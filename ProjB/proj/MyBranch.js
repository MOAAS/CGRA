/**
 * MyRectangle
 * @constructor
 * @param scene - Reference to MyScene object
 * @param x - Scale of rectangle in X
 * @param y - Scale of rectangle in Y
 */
class MyBranch extends ObjectGroup {
	constructor(scene, texture) {
		super(scene);
		this.cilinder = new MyCilinder(scene, 8);
		this.cilinder.setTexture(texture);
		this.addObjects(this.cilinder)
		this.setMaterial(new MyCGFappearance(scene, 0.2, 0.6, 0.2))
	}
}

