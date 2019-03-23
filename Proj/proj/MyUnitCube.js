/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends ObjectGroup {
	constructor(scene) {
		super(scene);

		this.front = new MySquare(scene);
		this.back = new MySquare(scene);
		this.left = new MySquare(scene);
		this.right = new MySquare(scene);
		this.top = new MySquare(scene);
		this.bot = new MySquare(scene);

		this.top.rotate(-Math.PI / 2, 1, 0, 0);
		this.top.translate(0,0.5,0);

		this.bot.rotate(Math.PI / 2, 1, 0, 0);
		this.bot.translate(0,-0.5,0);

		this.front.translate(0,0,0.5);

		this.back.translate(0,0,0.5);
		this.back.rotate(Math.PI, 0, 1, 0);

		this.left.translate(0,0,0.5);
		this.left.rotate(- Math.PI / 2, 0, 1, 0);
	
		this.right.translate(0,0,0.5);
		this.right.rotate(Math.PI / 2, 0, 1, 0);

		this.addObjects(this.top,this.bot,this.front,this.back,this.left,this.right);
	}

	setTexture(topTexture, botTexture, sideTexture) {
		if (topTexture != null)
			this.top.setTexture(topTexture);
		if (botTexture != null)
			this.bot.setTexture(botTexture);
		if (sideTexture != null) {
			this.left.setTexture(sideTexture);
			this.right.setTexture(sideTexture);
			this.back.setTexture(sideTexture);
			this.front.setTexture(sideTexture);
		}
	}
}
