class MyLeaf extends CGFobject {
	constructor(scene) {
        super(scene);
        this.triangle = new MyTriangle(scene);
    }
    display() {
        this.material = new CGFappearance(this.scene);
		this.material.setAmbient(28 / 255.0, 242 / 255.0, 24 / 255.0);
		this.material.setDiffuse(28 / 255.0, 242 / 255.0, 24 / 255.0);
	//	this.material.setSpecular(55 / 255.0, 183 / 255.0, 74 / 255.0);
		this.material.apply();
        this.triangle.display();
    }
}