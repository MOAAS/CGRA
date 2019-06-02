class MyRingList extends ObjectGroup {
    constructor(scene, numRings, width, minX, maxX, minY, maxY, minZ, maxZ) {
        super(scene);
        this.numRings = numRings;
        this.width = width;
        this.minX = minX;
        this.maxX = maxX;
        this.minY = minY;
        this.maxY = maxY;
        this.minZ = minZ;
        this.maxZ = maxZ;

        // cria sound effect que toca em loop para o jogo
        this.nanana = new Audio('sounds/nanananananananana.mp3');
        this.nanana.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);

        // sons para quando o passaro passa nos aneis
        let sound1 = new Audio('sounds/bling.mp3');
        let sound2 = new Audio('sounds/blingbling.mp3');
        this.sounds = [sound1, sound1, sound1, sound1, sound2];
    }

    update(birdX, birdY, birdZ) {
        let rings = this.getObjects();
        // Percorre a lista de aneis
        for (let i = 0; i < rings.length; ) {
            // Se o passaro estiver dentro do anel, remove-o da lista e toca um som aleatorio
            if (rings[i].isInside(birdX, birdY, birdZ)) {
                rings.splice(i, 1)
                this.scene.playSound(this.sounds[Math.floor(Math.random() * this.sounds.length)]);
            }
            else i++;
        }
    }

    reset() {
        // Limpa o array de aneis e recomeça a musica
        this.clear();
        this.scene.playSound(this.nanana);
        // Cria N aneis
        for (let i = 0; i < this.numRings; i++) {
            // Escolhe uma posicao aleatoria
            let x = Math.random() * (this.maxX - this.minX) + this.minX;
            let y = Math.random() * (this.maxY - this.minY) + this.minY;
            let z = Math.random() * (this.maxZ - this.minZ) + this.minZ;
            // Escolhe tambem angulo aleatorio
            let ring = new MyRing(this.scene, x, y, z, this.width, Math.random() * Math.PI / 2);
            // Adiciona o objeto criado
            this.addObjects(ring);
        }
    }

    clear() {
        this.nanana.pause();
        this.objects = [];
    }
}