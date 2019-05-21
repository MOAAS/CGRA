class MyLightning extends MyLSystem {
	constructor(scene) {
        super(scene);
        this.init();
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

    generate(axiom) {
        super.generate(axiom,
        {
          "F": ["FF"],
           "X": ["F[-X][X]F[-X]+FX"]
        },
        25.0,
        3,
        0.5)
    }
}