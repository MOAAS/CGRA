class MyLeaf extends ObjectGroup {
	constructor(scene, texture) {
		super(scene);
		this.sphere = new MySphere(scene, 12 , 12, 2.8);
		this.sphere.scale(1,1.25,1)
		this.sphere.setTexture(texture);
		this.sphere.setTextureWrap('REPEAT', 'REPEAT')
		this.addObjects(this.sphere)
	}
}