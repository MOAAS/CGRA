/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.blue = new MyTriangle(scene);
        this.orange = new MyTriangle(scene);
        this.yellow = new MyParallelogram(scene);

        this.purple = new MyTriangle(scene);
        this.red = new MyTriangle(scene);

        this.pink = new MyTriangle(scene);
		this.green = new MyDiamond(scene);
	}
	display() {
		this.scene.pushMatrix();
		this.scene.translate(-3, -2, 0);
		this.scene.rotate(Math.PI / 2, 0, 0, 1);
		this.scene.scale(3,3,3);
		this.blue.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-3, -2, 0);
		this.scene.scale(3,3,3);
		this.orange.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-1, -1, 0);
		this.yellow.display();
		this.scene.popMatrix();
	  
		this.scene.pushMatrix();
		this.scene.translate(-1, 1, 0);
		this.scene.rotate(- 3 * Math.PI / 4, 0, 0, 1);
		this.scene.scale(Math.sqrt(2), Math.sqrt(2), Math.sqrt(2));
		this.purple.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.scale(Math.sqrt(2), Math.sqrt(2), Math.sqrt(2));
		this.scene.rotate(-Math.PI / 4, 0, 0, 1);
		this.red.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(1, -1, 0);
		this.scene.scale(2, 2, 2);
		this.pink.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.translateMatrix = [
			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 1, 0, 1
		];
		this.scene.multMatrix(this.translateMatrix);
		this.green.display();
		this.scene.popMatrix();
	}

}
