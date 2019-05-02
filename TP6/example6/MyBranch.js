/**
 * MyRectangle
 * @constructor
 * @param scene - Reference to MyScene object
 * @param x - Scale of rectangle in X
 * @param y - Scale of rectangle in Y
 */
class MyBranch extends CGFobject {
	constructor(scene) {
		super(scene);
		this.cilinder = new MyCilinder(scene, 3);
	}
	
	display() {
		this.scene.pushMatrix();

		this.scene.scale(0.3, 1, 0.3)
		this.material = new CGFappearance(this.scene);
		this.material.setAmbient(70 / 255.0, 30 / 255.0, 30 / 255.0);
		this.material.setDiffuse(70 / 255.0, 30 / 255.0, 30 / 255.0);
		this.material.setSpecular(0, 0, 0);
		this.material.apply();
		this.cilinder.display();

		this.scene.popMatrix();
	}
}

