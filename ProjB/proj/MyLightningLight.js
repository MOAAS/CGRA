class MyLightningLight extends ObjectGroup {
    constructor(scene) {
        super(scene);
        this.square = new MySquare(scene);
        this.square.scale(0.1, 1, 1);
        this.addObjects(this.square);
        
        this.mat = new MyCGFappearance(scene, 1, 1, 1, 1);
        this.mat.setColor(255, 255, 0)
        this.setMaterial(this.mat);
    }
}