/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyTriangle extends MyCGFobject {
	constructor(scene) {
		super(scene);
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


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}