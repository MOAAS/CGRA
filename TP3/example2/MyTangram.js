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

        var ambFact = 5.0;
        var specFact = 1.25;
		var diffFact = 1.5;
		
        this.blueMaterial = new CGFappearance(this.scene);
        this.blueMaterial.setAmbient(0 / ambFact, 0.61 / ambFact, 1 / ambFact, 1.0);
        this.blueMaterial.setDiffuse(0 / diffFact, 0.61 / diffFact, 1 / diffFact, 1.0);
		this.blueMaterial.setSpecular(0 / specFact, 0.61 / specFact, 1 / specFact, 1.0);
        this.blueMaterial.setShininess(10.0);
		
        this.orangeMaterial = new CGFappearance(this.scene);
        this.orangeMaterial.setAmbient(1 / ambFact, 0.61 / ambFact, 0 / ambFact, 1.0);
        this.orangeMaterial.setDiffuse(1 / diffFact, 0.61 / diffFact, 0 / diffFact, 1.0);
        this.orangeMaterial.setSpecular(1 / specFact, 0.61 / specFact, 0 / specFact, 1.0);
        this.orangeMaterial.setShininess(10.0);

        this.yellowMaterial = new CGFappearance(this.scene);
        this.yellowMaterial.setAmbient(1 / ambFact, 1 / ambFact, 0 / ambFact, 1.0);
        this.yellowMaterial.setDiffuse(1 / diffFact, 1 / diffFact, 0 / diffFact, 1.0);
        this.yellowMaterial.setSpecular(1 / specFact, 1 / specFact, 0 / specFact, 1.0);
        this.yellowMaterial.setShininess(10.0);

        this.purpleMaterial = new CGFappearance(this.scene);
        this.purpleMaterial.setAmbient(0.58 / ambFact, 0.31 / ambFact, 0.75 / ambFact, 1.0);
        this.purpleMaterial.setDiffuse(0.58 / diffFact, 0.31 / diffFact, 0.75 / diffFact, 1.0);
        this.purpleMaterial.setSpecular(0.58 / specFact, 0.31 / specFact, 0.75 / specFact, 1.0);
        this.purpleMaterial.setShininess(10.0);

        this.redMaterial = new CGFappearance(this.scene);
        this.redMaterial.setAmbient(1 / ambFact, 0.11 / ambFact, 0.11 / ambFact, 1.0);
        this.redMaterial.setDiffuse(1 / diffFact, 0.11 / diffFact, 0.11 / diffFact, 1.0);
        this.redMaterial.setSpecular(1 / specFact, 0.11 / specFact, 0.11 / specFact, 1.0);
        this.redMaterial.setShininess(10.0);

        this.pinkMaterial = new CGFappearance(this.scene);
        this.pinkMaterial.setAmbient(1 / ambFact, 0.61 / ambFact, 0.81 / ambFact, 1.0);
        this.pinkMaterial.setDiffuse(1 / diffFact, 0.61 / diffFact, 0.81 / diffFact, 1.0);
        this.pinkMaterial.setSpecular(1 / specFact, 0.61 / specFact, 0.81 / specFact, 1.0);
        this.pinkMaterial.setShininess(10.0);

        this.greenMaterial = new CGFappearance(this.scene);
        this.greenMaterial.setAmbient(0 / ambFact, 1 / ambFact, 0 / ambFact, 1.0);
        this.greenMaterial.setDiffuse(0 / diffFact, 1 / diffFact, 0 / diffFact, 1.0);
        this.greenMaterial.setSpecular(0 / specFact, 1 / specFact, 0 / specFact, 1.0);
        this.greenMaterial.setShininess(10.0);

	}
	display() {
		var oldMaterial = this.scene.materials[this.scene.selectedMaterial];

		this.scene.pushMatrix();
		this.scene.translate(-3, -2, 0);
		this.scene.rotate(Math.PI / 2, 0, 0, 1);
		this.scene.scale(3,3,3);
		this.blueMaterial.apply();
		this.blue.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-3, -2, 0);
		this.scene.scale(3,3,3);
		this.orangeMaterial.apply();
		this.orange.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-1, -1, 0);
		this.yellowMaterial.apply();
		this.yellow.display();
		this.scene.popMatrix();
	  
		this.scene.pushMatrix();
		this.scene.translate(-1, 1, 0);
		this.scene.rotate(- 3 * Math.PI / 4, 0, 0, 1);
		this.scene.scale(Math.sqrt(2), Math.sqrt(2), Math.sqrt(2));
		this.purpleMaterial.apply();
		this.purple.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.scale(Math.sqrt(2), Math.sqrt(2), Math.sqrt(2));
		this.scene.rotate(-Math.PI / 4, 0, 0, 1);
		this.redMaterial.apply();
		this.red.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(1, -1, 0);
		this.scene.scale(2, 2, 2);
		this.pinkMaterial.apply();
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
		//this.greenMaterial.apply();
		this.scene.customMaterial.apply();
		this.green.display();
		this.scene.popMatrix();

		oldMaterial.apply();
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
