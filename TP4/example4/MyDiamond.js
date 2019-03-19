/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyDiamond extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			// Frontal 
			1, 0, 0,	//0
			0, 1, 0,	//1
			-1, 0, 0,	//2
			0, -1, 0,	//3

			// Traseira
			1, 0, 0,	//4
			0, 1, 0,	//5
			-1, 0, 0,	//6
			0, -1, 0	//7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			0, 2, 3,

			6, 5, 4,
			7, 6, 4
		];

		this.normals = [
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,1,

			0,0,-1,
			0,0,-1,
			0,0,-1,
			0,0,-1
		]

		this.texCoords = [
			0.5, 0.5,
			0.25, 0.25,
			0, 0.5,
			0.25, 0.75,

			0.5, 0.5,
			0.25, 0.25,
			0, 0.5,
			0.25, 0.75
		]
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}

