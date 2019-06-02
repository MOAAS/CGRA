class MyLeaf extends ObjectGroup {
	constructor(scene, texture) {
		super(scene);
		// cria uma esfera de raio entre 2 e 3
		this.sphere = new MySphere(scene, 8 , 8, Math.random() + 2);

		this.sphere.scale(1, 1.25, 1)
		this.sphere.setTexture(texture);
		this.addObjects(this.sphere)
		this.setMaterial(new MyCGFappearance(scene, 0.35, 0.8, 0.6))
	}
}