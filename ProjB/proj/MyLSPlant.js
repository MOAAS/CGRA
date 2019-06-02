/**
 * MyLSystem
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLSPlant extends MyLSystem {
	constructor(scene, branchText, leafText, x, y, z) {
        super(scene);
        this.branchText = branchText;
        this.leafText = leafText;
        this.x = x;
        this.y = y;
        this.z = z;
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
        let angle = 35.0;
        let iterations = 4;
        let scaleFactor = 0.3;

        super.generate(
            axiom,
           /*
           {
            "F": ["FF"],
            "X": ["F[RX][LX][LX]F[RX]FX", "F[RX][RX]F[LX][RX]FX", "F[RX][LX]F[LX]FX"],// "F[^X][X]F[&X]^XX"],
            "L": ["+<", "\\<"],
            "R" : ["-<", "/<"]
            },
            */

           {
            "F": ["FF"],
          //  "X": ["F[+<X]F[/-<X][-<X]FX", "F[/<X][\\<X]F[+<X]FX", "F[-<X][+<X]F[&<X]FX", "F[^<X][\\<X]F[/<X]FX"],// "B[RX]B[RX][RX][RX]BX"],// "F[^X][X]F[&X]^XX"],
            "X": ["F[+\\<X]F[/-<X][-<X]FX", "F[/&<X][\\<X]F[+^<X]FX", "F[-/<X]F[&<X][+<X]FX", "F[^<X][\\<X][+&<X]F[/<X]FX"],// "B[RX]B[RX][RX][RX]BX"],// "F[^X][X]F[&X]^XX"],

        },

            angle,
            iterations,
            scaleFactor
        );
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        super.display();
        this.scene.popMatrix();
    }
}