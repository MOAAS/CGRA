/**
 * MyLSystem
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLSPlant extends MyLSystem {
	constructor(scene, branchText, leafText, x, y, z) {
        super(scene);
        // Inicializa as texturas
        this.branchText = branchText;
        this.leafText = leafText;

        // Inicializa as coordenadas
        this.x = x;
        this.y = y;
        this.z = z;

        this.init();
    }

    init(){
        // cria o lexico da gramática
        this.initGrammar()
    }

    initGrammar(){
        this.grammar = {
            "B": new MyBranch(this.scene, this.branchText),
            "X": new MyLeaf(this.scene, this.leafText)
        };
    }

    generate(axiom) {
        let angle = 40.0;
        let iterations = 4;
        let scaleFactor = 0.3;


        // usa um axioma que escolhe uma direcao aleatoria para criar um novo ramo, continuando para cima
        // cada ramo tambem se pode dividir em ramos
        super.generate(
            axiom,
           {
            "B": ["B"],
            "F": ["BBB"],
            "X": [
                "[+\\<FX]B[/-<FX]FX", 
                "[/&<FX]BB[+^<FX]FX", 
                "[-/<FX]BB[+<FX]FX", 
                "[\\<FX]B[-\\<FX]FX",
            ],

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