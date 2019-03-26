/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyTriangle extends CGFobject {
	constructor(scene,id) {
		super(scene);
		this.texId = id;
		this.initTextures();
		this.initBuffers();		
	}

	initBuffers() {
		this.vertices = [
			// Frontal
			0, 0, 0,	//0
			1, 0, 0,	//1
			0, 1, 0,	//2

			// Traseira
			0, 0, 0,	//3
			1, 0, 0,	//4
			0, 1, 0,	//5
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			5, 4, 3
		];

		this.normals = [
			0,0,1,
			0,0,1,
			0,0,1,

			0,0,-1,
			0,0,-1,
			0,0,-1
		]

		this.texCoords = this.textCoordList[this.texId];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}

	initTextures() {
		this.textCoordsRed = [
			0.5,0.5,
			1,0,
			0,0,
			
			0.5,0.5,
			1,0,
			0,0
		]
		
		this.textCoordsGreen= [
			0,1,
			0.5,1,
			0,0.5,
	
			0,1,
			0.5,1,
			0,0.5
		]
		
		this.textCoordsBlue = [
			0.25,0.25,
			0,0,
			0,0.5,
	
			0.25,0.25,
			0,0,
			0,0.5
		]
		
		this.textCoordsCyan = [
			0.5,0.5,
			0.25,0.75,
			0.75,0.75,
		
			0.5,0.5,
			0.25,0.75,
			0.75,0.75
		]
		
		this.textCoordsPink = [
			1,1,
			0.5,0.5,
			1,0,
		
			1,1,
			0.5,0.5,
			1,0
		]

		this.textCoordList = [this.textCoordsRed, this.textCoordsGreen, this.textCoordsBlue, this.textCoordsCyan, this.textCoordsPink]
		
	}
}