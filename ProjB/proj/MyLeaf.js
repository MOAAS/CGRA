class MyLeaf extends ObjectGroup {
	constructor(scene, texture) {
		super(scene);
		this.cilinder = new MyCilinder(scene, 12);
		this.cilinder.rotate(Math.PI / 2, 1, 0, 0);
		this.cilinder.scale(0.5, 2, 0.1)
		this.cilinder.setTexture(texture);
		this.cilinder.setTextureWrap('REPEAT', 'REPEAT')
		this.addObjects(this.cilinder)
	}
}