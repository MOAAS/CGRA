/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends ShapeGroup {
	constructor(scene) {
		super(scene);

		this.front = new MySquare(scene);
		this.back = new MySquare(scene);
		this.left = new MySquare(scene);
		this.right = new MySquare(scene);
		this.top = new MySquare(scene);
		this.bot = new MySquare(scene);

		this.material = new MyCGFappearance(this.scene, 1, 1, 1, 10);

		this.textureTop = new CGFtexture(this.scene, 'images/mineTop.png')
		this.textureSide = new CGFtexture(this.scene, 'images/mineSide.png')
		this.textureBot = new CGFtexture(this.scene, 'images/mineBottom.png')

		this.top.rotate(-Math.PI / 2, 1, 0, 0);
		this.top.translate(0,0.5,0);
		this.top.setMaterial(this.material);
		this.top.setTexture(this.textureTop, this.scene.gl.NEAREST);

		this.bot.rotate(Math.PI / 2, 1, 0, 0);
		this.bot.translate(0,-0.5,0);
		this.bot.setMaterial(this.material);
		this.bot.setTexture(this.textureBot, this.scene.gl.NEAREST);

		this.front.translate(0,0,0.5);
		this.front.setMaterial(this.material);
		this.front.setTexture(this.textureSide, this.scene.gl.NEAREST);

		this.back.translate(0,0,0.5);
		this.back.rotate(Math.PI, 0, 1, 0);
		this.back.setMaterial(this.material);
		this.back.setTexture(this.textureSide, this.scene.gl.NEAREST);

		this.left.translate(0,0,0.5);
		this.left.rotate(- Math.PI / 2, 0, 1, 0);
		this.left.setMaterial(this.material);
		this.left.setTexture(this.textureSide, this.scene.gl.NEAREST);
	
		this.right.translate(0,0,0.5);
		this.right.rotate(Math.PI / 2, 0, 1, 0);
		this.right.setMaterial(this.material);
		this.right.setTexture(this.textureSide, this.scene.gl.NEAREST);

		this.shapes = [this.top,this.bot,this.front,this.back,this.left,this.right]
	}
}
