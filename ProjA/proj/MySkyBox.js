/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MySkyBox extends MyCGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			// Frontal
			0.5, -0.5, 0.5,		//0
			0.5, 0.5, 0.5, 		//1
			-0.5, 0.5, 0.5,		//2
			-0.5, -0.5, 0.5,	//3			

			// Traseira
			0.5, -0.5, -0.5,	//4
			0.5, 0.5, -0.5,		//5
			-0.5, 0.5, -0.5,	//6
			-0.5, -0.5, -0.5,	//7

			// Lateral x positivo
			0.5, -0.5, 0.5,		//8
			0.5, 0.5, 0.5, 		//9
			0.5, -0.5, -0.5,	//10
			0.5, 0.5, -0.5,		//11

			// Lateral x negativo
			-0.5, 0.5, 0.5,		//12
			-0.5, -0.5, 0.5,	//13
			-0.5, 0.5, -0.5,	//14
			-0.5, -0.5, -0.5,	//15

			// face superior
			0.5, 0.5, 0.5, 		//16
			-0.5, 0.5, 0.5,		//17
			0.5, 0.5, -0.5,		//18
			-0.5, 0.5, -0.5,	//19

			// Face inferior
			0.5, -0.5, 0.5,		//20
			-0.5, -0.5, 0.5,	//21	
			0.5, -0.5, -0.5,	//22
			-0.5, -0.5, -0.5,	//23
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 2, 1, // face frontal
			0, 3, 2,
			
			4, 6, 7,  // face traseira 
			4, 5, 6,

			8, 11,10, // face lateral (voltada para x positivo)
			11, 8, 9,

			13, 14,12, // face lateral (voltada para x negativo)
			14, 13,15,

			16, 19,18, // face superior
			19, 16,17,

			20, 23,21, // face inferior
			20, 22,23
		];

        this.normals = [
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,

			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,

			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,

			1, 0, 0,
			1, 0, 0,
			1, 0, 0,
			1, 0, 0,

			0, -1, 0,
			0, -1, 0,
			0, -1, 0,
			0, -1, 0,

			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			0, 1, 0
		]

		this.texCoords = [
			0.75,2/3, //back
			0.75,1/3,
			1,1/3,
			1,2/3,
			
			0.5,2/3, //front
			0.5,1/3,
			0.25,1/3,
			0.25,2/3,


			0.75,2/3, //right
			0.75,1/3,
			0.5,2/3,
			0.5,1/3,

			0,1/3, //left
			0,2/3,
			0.25,1/3,
			0.25,2/3,

			0.5,0,	//top
			0.25,0, 
			0.5,1/3, 
			0.25,1/3, 

			0.5,1,		//bottom
			0.25,1, 	
			0.5,2/3,	
			0.25,2/3,   
		]

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
