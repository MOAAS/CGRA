/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */

textCoordsRed = [
	0.5,0.5,
	1,0,
	0,0,
	
	0.5,0.5,
	1,0,
	0,0
 ]

 textCoordsGreen= [
	 0,1,
	 0.5,1,
	 0,0.5,

	 0,1,
	 0.5,1,
	 0,0.5
 ]

 textCoordsBlue = [
	 0.25,0.25,
	 0,0,
	 0,0.5,

	 0.25,0.25,
	 0,0,
	 0,0.5
 ]

textCoordsCyan = [
	0.5,0.5,
	0.25,0.75,
	0.75,0.75,

	0.5,0.5,
	0.25,0.75,
	0.75,0.75
 ]

textCoordsPink = [
	1,1,
	0.5,0.5,
	1,0,

	 1,1,
	 0.5,0.5,
	 1,0
 ]



class MyTriangle extends CGFobject {
	constructor(scene,id) {
		super(scene);
		if(id == 0)
			this.texCoords=textCoordsRed;
		else if (id == 1)
			this.texCoords=textCoordsGreen;
		else if (id == 2)
			this.texCoords=textCoordsBlue;
		else if (id == 3)
			this.texCoords=textCoordsCyan;
		else if(id == 4)
			this.texCoords=textCoordsPink;
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
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}