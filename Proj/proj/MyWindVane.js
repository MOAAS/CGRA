class MyWindVane extends ObjectGroup {
    constructor(scene, pillarTexture) {
        super(scene);

        this.triangle = new MyTriangle(scene);
        this.rectangle = new MyPrism(scene, 4);
        this.square = new MySquare(scene);

        this.arrow = new ObjectGroup(scene);
        this.arrow.addObjects(this.triangle, this.rectangle, this.square);

        this.triangle.rotate(- Math.PI / 4, 0, 0, 1);
        this.rectangle.rotate(Math.PI / 4, 0, 1, 0);        
        this.rectangle.scale(3, 0.25, 0.1);
        this.rectangle.translate(2.75, 0, -0.01)
        this.square.translate(5, 0, 0);

        this.arrow.translate(-1, 2, 0)
        
        this.triangle.material.setColor(0, 0, 255);
        this.rectangle.material.setColor(255, 0, 0);
        this.square.material.setColor(0, 0, 255);

        this.pillar = new MyPrism(scene, 5);
        this.handle = new MyCilinder(scene, 15);

        this.pillar.scale(1, 8, 1);
        this.pillar.translate(1.5, -8, 0)
        this.handle.scale(0.2, 4, 0.2);
        this.handle.translate(1.5, -2, 0)

        this.handle.material.setColor(255, 255, 0)
        this.pillar.setTexture(pillarTexture)

        
        this.addObjects(this.arrow, this.pillar, this.handle);
        this.translate(-1.5, 8, 0);        
    }

    update() {
        let targetAngle = Math.atan2(this.scene.wind.x, this.scene.wind.y) + Math.PI / 2;
        this.arrow.setAngle(0, targetAngle, 0);
    }

}