class MyLightning extends MyLSystem {
	constructor(scene, axiom, xMin, xMax, yMin, yMax, zMin, zMax, light) {
        super(scene);
        this.startingAxiom = axiom;
        this.animating = false;
        this.init();

        this.xMin = xMin;
        this.xMax = xMax;
        this.yMin = yMin;
        this.yMax = yMax;
        this.zMin = zMin;
        this.zMax = zMax;

        this.light = light;

        // inicializa 3 sons possiveis
        let sound1 = new Audio('sounds/t1.mp3');
        let sound2 = new Audio('sounds/t2.mp3');
        let sound3 = new Audio('sounds/t3.mp3');
        this.sounds = [sound1, sound2, sound3];
    }

    init(){
        this.initGrammar()
    }

    // cria o lexico da gramática
    initGrammar(){
        this.grammar = {
            "F": new MyLightningLight(this.scene),
            "X": new MyLightningLight(this.scene)
        };
    }

    generate() {
        // Escolhe posicao de lightning e angulo aleatorio
        this.lightX = Math.random() * (this.xMax - this.xMin) + this.xMin;
        this.lightY = Math.random() * (this.yMax - this.yMin) + this.yMin;
        this.lightZ = Math.random() * (this.zMax - this.zMin) + this.zMin;
        this.lightAngle = Math.random() * Math.PI * 2;

        // Ativa a luz
        this.light.enable()
        this.light.setPosition(this.lightX, this.lightY, this.lightZ, 1);
        this.light.update();

        // Gera o axioma
        super.generate(this.startingAxiom,
        {
            "F": ["FF"],
            "X": ["F[-X][X]F[-X]+FX", "XL[FXLX]FX[FRX]^R","XL[/FR&X]F[LX[FXXF\\]F]R", "X[[F]LFX/]FX[FR/FX]^R", "XL[FXLX]FX[FRX]^R","XL[/FR&X]F[LX[FXXF\\]F]R", "X[[F]LFX/]FX[FR/FX]^R"],
            "L": ["+F"],
            "R": ["-F"]
            },
        25.0,
        3,
        0.5)
    }

    startAnimation(t) {
        // ativa o som
        this.scene.playSound(this.sounds[Math.floor(Math.random() * this.sounds.length)]);

        // gera o axioma
        this.generate();
        this.animating = true;
        this.startTime = t;
        this.depth = 0;
    }

    update(t) {
        if (this.animating == false)
            return;
        this.light.enable()
        this.light.update();
        // numero de carateres mostrados depende do tempo que passou desde o inicio da animacao
        this.depth = this.axiom.length * (t - this.startTime) / 1000;
        if (this.depth >= this.axiom.length) {
            // acaba a animacao quando se tiver mostrado o ultimo carater
            this.animating = false;
            this.depth = 0;
            this.light.disable();
            this.light.update();    
        }
    }

    display(){
        this.scene.pushMatrix();
        this.scene.translate(this.lightX, this.lightY, this.lightZ);
        this.scene.rotate(this.lightAngle, 0, 1, 0);
        this.scene.rotate(Math.PI, 1, 0, 0);
        this.scene.scale(this.scale * 5, this.scale * 5, this.scale * 5);

        // Conta o número de pushMatrix chamados que nao tiveram pops
        let numPushes = 0;

        // percorre a cadeia de caracteres
        for (let i=0; i < this.depth; ++i){

            // verifica se sao caracteres especiais
            switch(this.axiom[i]){
                case "+":
                    // roda a esquerda
                    this.scene.translate(-Math.sin(this.angle) / 2, -Math.cos(this.angle) / 10, 0);
                    this.scene.rotate(this.angle, 0, 0, 1);
                    break;
    
                case "-":
                    // roda a direita
                    this.scene.translate(Math.sin(this.angle) / 2, -Math.cos(this.angle) / 10, 0);
                    this.scene.rotate(-this.angle, 0, 0, 1);
                    break;
    
                case "[":
                    // atualiza o número de push matrix
                    numPushes++;
                    this.scene.pushMatrix();
                    break;
    
                case "]":
                    // atualiza o número de push matrix
                    numPushes--;
                    this.scene.popMatrix();
                    break;
    
                case "\\":
                    // translate para os retângulos encaixarem
                    this.scene.translate(0, 0, Math.sin(this.angle) / 2);
                    this.scene.rotate(this.angle, 1, 0, 0);
                    break;
    
                case "/":
                    // translate para os retângulos encaixarem
                    this.scene.translate(0, 0, -Math.sin(this.angle) / 2);
                    this.scene.rotate(-this.angle, 1, 0, 0);
                    break;    
                // processa primitiva definida na gramatica, se existir
                default:
                    var primitive=this.grammar[this.axiom[i]];
    
                    if ( primitive )
                    {
                        primitive.display();
                        this.scene.translate(0, 1, 0);
                    }
                    break;
            }
        }
        
        // Por cada pushMatrix que não teve um popMatrix, faz-se popMatrix
        for (let i = 0; i < numPushes; i++)
            this.scene.popMatrix();

        this.scene.popMatrix();
    }
}