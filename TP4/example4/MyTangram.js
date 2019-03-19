/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.blue = new MyTriangle(scene,0);
        this.orange = new MyTriangle(scene,4);
        this.yellow = new MyParallelogram(scene);

        this.purple = new MyTriangle(scene,2);
        this.red = new MyTriangle(scene,3);

        this.pink = new MyTriangle(scene,1);
		this.green = new MyDiamond(scene);
	
		this.coolMaterial = new CGFappearance(this.scene);
        this.coolMaterial.setAmbient(1, 1, 1, 1.0);
        this.coolMaterial.setDiffuse(1, 1, 1, 1.0);
        this.coolMaterial.setSpecular(1, 1, 1, 1.0);
		this.coolMaterial.setShininess(10.0);
		
		this.coolTexture = new CGFtexture(this.scene, 'images/tangram-pattern.jpg')
		this.coolMaterial.setTexture(this.coolTexture);

	}
	display() {
		//var oldMaterial = this.scene.materials[this.scene.selectedMaterial];
		this.coolMaterial.apply();
		
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

		//oldMaterial.apply();
	}

	updateBuffers() {

	}
	enableNormalViz() {
		this.blue.enableNormalViz();
		this.orange.enableNormalViz();
		this.yellow.enableNormalViz();
		this.purple.enableNormalViz();
		this.red.enableNormalViz();
		this.pink.enableNormalViz();
		this.green.enableNormalViz();
	}

	disableNormalViz() {
		this.blue.disableNormalViz();
		this.orange.disableNormalViz();
		this.yellow.disableNormalViz();
		this.purple.disableNormalViz();
		this.red.disableNormalViz();
		this.pink.disableNormalViz();
		this.green.disableNormalViz();
	}

}
