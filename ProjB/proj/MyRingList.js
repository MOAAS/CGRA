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
        this.reset()

        let sound1 = new Audio('sounds/bling.mp3');
        let sound2 = new Audio('sounds/blingbling.mp3');
        this.sounds = [sound1, sound1, sound1, sound1, sound2];
    }

    update(birdX, birdY, birdZ) {
        let rings = this.getObjects();
        for (let i = 0; i < rings.length; ) {
            if (rings[i].isInside(birdX, birdY, birdZ)) {
                rings.splice(i, 1)
                this.scene.playSound(this.sounds[Math.floor(Math.random() * this.sounds.length)]);
            }
            else i++;
        }
    }

    reset() {
        this.clear();
        for (let i = 0; i < this.numRings; i++) {
            let x = Math.random() * (this.maxX - this.minX) + this.minX;
            let y = Math.random() * (this.maxY - this.minY) + this.minY;
            let z = Math.random() * (this.maxZ - this.minZ) + this.minZ;
            let ring = new MyRing(this.scene, x, y, z, this.width, Math.random() * Math.PI / 2);   
            //ring.rotate(Math.random() * Math.PI * 2, 0, 1, 0);
            this.addObjects(ring);
        }
    }

    clear() {
        this.objects = [];
    }
}