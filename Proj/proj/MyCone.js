/**
* MyCone
* @constructor
*/
class MyCone extends MyCGFobject {
    constructor(scene, slices) {
        super(scene);
        this.slices = slices;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var angDiff = 2*Math.PI/this.slices;

        // Base inferior 
        for(var i = 0, ang = 0; i < this.slices; i++, ang += angDiff) {
            this.vertices.push(Math.cos(ang), 0, Math.sin(ang));
            this.texCoords.push((Math.cos(ang) + 1) / 2, (Math.sin(ang) + 1) / 2);
            this.normals.push(0,-1,0);
        }

        for(var i = 1; i < this.slices - 1; i++) {
            this.indices.push(0, i, i + 1)
        }

        for(var i = 0, ang = 0; i < this.slices; i++, ang += angDiff){

            this.vertices.push(Math.cos(ang), 0, -Math.sin(ang));
            this.indices.push(i + this.slices, (i + 1) % this.slices + this.slices, this.slices * 2);
            this.normals.push(Math.cos(ang), Math.cos(Math.PI/4.0), -Math.sin(ang));

            this.texCoords.push(ang / (2*Math.PI), 1);
        }
        
        this.vertices.push(0,1,0);
        this.normals.push(0,1,0);
        this.texCoords.push(0.5,0);


        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


