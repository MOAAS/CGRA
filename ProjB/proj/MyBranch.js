/**
 * MyRectangle
 * @constructor
 * @param scene - Reference to MyScene object
 * @param x - Scale of rectangle in X
 * @param y - Scale of rectangle in Y
 */
class MyBranch extends ObjectGroup {
	constructor(scene) {
		super(scene);
		this.cilinder = new MyCilinder(scene, 3);
		this.cilinder.scale(0.5, 1, 0.5);

		let material = new MyCGFappearance(this.scene, 0.7, 0.8, 0.6);
		material.setColor(70, 30, 30)
		this.cilinder.setMaterial(material);

		this.addObjects(this.cilinder)
	}
}

