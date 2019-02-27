/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0.5, -0.5, 0.5,		//0
			0.5, 0.5, 0.5, 		//1
			-0.5, 0.5, 0.5,		//2
			-0.5, -0.5, 0.5,	//3

			0.5, -0.5, -0.5,	//4
			0.5, 0.5, -0.5,		//5
			-0.5, 0.5, -0.5,	//6
			-0.5, -0.5, -0.5,	//7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2, // face frontal
			0, 2, 3,

			0, 4, 5, // face lateral (voltada para x positivo)
			5, 1, 0,

			4, 7, 6, // face traseira 
			4, 6, 5,

			3, 2, 6, // face lateral (voltada para x negativo)
			6, 7, 3,

			1, 5, 6, // face superior
			6, 2, 1,

			0, 3, 7, // face inferior
			0, 7, 4


		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
