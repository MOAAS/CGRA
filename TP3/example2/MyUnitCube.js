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
			0, 1, 2, // face frontal
			0, 2, 3,
			
			4, 7, 6, // face traseira 
			4, 6, 5,

			8, 10, 11, // face lateral (voltada para x positivo)
			11, 9, 8,

			13, 12, 14, // face lateral (voltada para x negativo)
			14, 15, 13,

			16, 18, 19, // face superior
			19, 17, 16,

			20, 21, 23, // face inferior
			20, 23, 22
		];

        this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,

			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,

			1, 0, 0,
			1, 0, 0,
			1, 0, 0,
			1, 0, 0,

			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,

			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,

			0, -1, 0,
			0, -1, 0,
			0, -1, 0,
			0, -1, 0
		]

        //var ang = 0;
        //var alphaAng = 2*Math.PI/this.slices;

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	updateBuffers(complexity){
		
    }
}
