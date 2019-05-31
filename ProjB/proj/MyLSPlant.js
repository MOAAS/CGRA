/**
 * MyLSystem
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLSPlant extends MyLSystem {
	constructor(scene, branchText, leafText) {
        super(scene);
        this.branchText = branchText;
        this.leafText = leafText;
        this.init();


    }

    init(){
        // cria o lexico da gramática
        this.initGrammar()
    }

    // cria o lexico da gramática
    initGrammar(){
        this.grammar = {
            "F": new MyBranch(this.scene, this.branchText),
            "X": new MyLeaf(this.scene, this.leafText)
        };
    }

    generate(axiom) {
        let ruleF = "FF";
        let ruleX1 = "F[-X][X]F[-X]+FX";
        let ruleX2 = "F[-X][x]+X";
        let ruleX3 = "F[-X][x]+X";
        let ruleX4 = "F[/X][X]F[\\X]+X";
        let ruleX5 = "F[\\X][X]/X";
        let ruleX6 = "F[/X]\\X";
        let ruleX7 = "F[^X][X]F[&X]^X";
        let ruleX8 = "F[^X][X]F[&X]^X";
        let ruleX9 = "F[&X]^X";
        let angle = 60.0;
        let iterations = 4;
        let scaleFactor = 1;

        super.generate(
            axiom,
            /*
            {
                "F": [ ruleF ],
                "X": [ ruleX1, ruleX2, ruleX5, ruleX9 ]
            },
            */
           {
            "F": ["FF"],
            "X": ["F[-X][X]F[-X]+FX", "F[-X][-X]F[+X]+X", "F[/X][X]F[\\X]+X", "F[^X][X]F[&X]^XX"]
            },
            angle,
            iterations,
            scaleFactor
        );

    }
}