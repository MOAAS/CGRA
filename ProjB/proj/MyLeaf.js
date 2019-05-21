class MyLeaf extends ObjectGroup {
	constructor(scene) {
        super(scene);
        this.triangle = new MyTriangle(scene);

        
		let material = new MyCGFappearance(this.scene, 0.8, 0.8, 0.5);
		material.setColor(28, 242, 24)
		this.triangle.setMaterial(material);

		this.addObjects(this.triangle)

    }
}