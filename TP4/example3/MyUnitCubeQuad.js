/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();

		this.front = new MyQuad(scene);
		this.back = new MyQuad(scene);
		this.leftSide = new MyQuad(scene);
		this.rightSide = new MyQuad(scene);
		this.top = new MyQuad(scene);
		this.bot = new MyQuad(scene);

		this.material = new CGFappearance(this.scene);
        this.material.setAmbient(1, 1, 1, 1.0);
        this.material.setDiffuse(1, 1, 1, 1.0);
        this.material.setSpecular(1, 1, 1, 1.0);
		this.material.setShininess(10.0);


		this.textureTop = new CGFtexture(this.scene, 'images/mineTop.png')
		this.textureSide = new CGFtexture(this.scene, 'images/mineSide.png')
		this.textureBot = new CGFtexture(this.scene, 'images/mineBottom.png')

	}

	updateBuffers(complexity){
		
	}
	
	display() {
		
		// top face
		this.scene.pushMatrix()
		this.scene.translate(0,0.5,0);
		this.scene.rotate(-Math.PI / 2, 1, 0, 0);
		this.material.setTexture(this.textureTop);
		this.material.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.top.display();
		this.scene.popMatrix();

		// bot face
		this.scene.pushMatrix()
		this.scene.translate(0,-0.5,0);
		this.scene.rotate(Math.PI / 2, 1, 0, 0);
		this.material.setTexture(this.textureBot);
		this.material.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.bot.display();
		this.scene.popMatrix();

		// front face
		this.scene.pushMatrix()
		this.scene.translate(0,0,0.5);
		this.material.setTexture(this.textureSide);
		this.material.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.bot.display();
		this.scene.popMatrix();

		// back face
		this.scene.pushMatrix()
		this.scene.rotate(Math.PI, 0, 1, 0);
		this.scene.translate(0,0,0.5);
		this.material.setTexture(this.textureSide);
		this.material.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.bot.display();
		this.scene.popMatrix();

		// left face
		this.scene.pushMatrix()
		this.scene.rotate(- Math.PI / 2, 0, 1, 0);
		this.scene.translate(0,0,0.5);
		this.material.setTexture(this.textureSide);
		this.material.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.bot.display();
		this.scene.popMatrix();
	
		// right face
		this.scene.pushMatrix()
		this.scene.rotate(Math.PI / 2, 0, 1, 0);
		this.scene.translate(0,0,0.5);
		this.material.setTexture(this.textureSide);
		this.material.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.bot.display();
		this.scene.popMatrix();
	
	}
	
}
