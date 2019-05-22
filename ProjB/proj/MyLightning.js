class MyLightning extends MyLSystem {
	constructor(scene, axiom) {
        super(scene);
        this.startingAxiom = axiom;
        this.animating = false;
        this.init();
    }

    init(){
        this.initGrammar()
    }

    // cria o lexico da gramática
    initGrammar(){
        this.grammar = {
            "F": new MyLightningLight(this.scene),
            "X": null
        };
    }

    generate() {
        super.generate(this.startingAxiom,
        {
          "F": ["FF"],
          //"X": ["F[-X][X]F[-X]+FX"]
          "X": ["F[-X][X]F[-X]+FX", "X+[X]-X-[X]",  "XX[F[/X][X]F[\\X]+XF-[F[/X][X]F[\\X]+XF-[/X][X]+X]+XX"]
        },
        25.0,
        3,
        0.5)
    }

    startAnimation(t) {
        this.generate();
        this.animating = true;
        this.startTime = t;
        this.depth = 0;
    }

    update(t) {
        if (this.animating == false)
            return;
        this.depth = this.axiom.length * (t - this.startTime) / 1000;
        if (this.depth > this.axiom.length) {
            this.animating = false;
            this.depth = 0;
        }
    }

    display(){
        this.scene.pushMatrix();
        this.scene.scale(this.scale, this.scale, this.scale);

        var i;

        let numPushes = 0;
        // percorre a cadeia de caracteres
        for (i=0; i < this.depth; ++i){

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
                    numPushes++;
                    this.scene.pushMatrix();
                    break;
    
                case "]":
                    numPushes--;
                    this.scene.popMatrix();
                    break;
    
                case "\\":
                    this.scene.translate(0, 0, Math.sin(this.angle) / 2);
                    this.scene.rotate(this.angle, 1, 0, 0);
                    break;
    
                case "/":
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
        
        for (i = 0; i < numPushes; i++)
            this.scene.popMatrix();
        this.scene.popMatrix();
    }
}