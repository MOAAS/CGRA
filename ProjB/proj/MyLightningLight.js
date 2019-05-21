class MyLightningLight extends ObjectGroup {
    constructor(scene) {
        super(scene);
        this.square = new MySquare(scene);
        this.square.scale(0.2, 1, 1);
        
        let material = new MyCGFappearance(scene, 1, 1, 1, 1);
        material.setColor(249, 255, 255)
        this.setMaterial(material);
        this.addObjects(this.square);
    }
}