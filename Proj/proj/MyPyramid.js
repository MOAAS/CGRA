/**
* MyPyramid
* @constructor
*/
class MyPyramid extends MyCGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
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

                
        for(var i = 0, ang = 0; i < this.slices; i++, ang+=angDiff){
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals 
            // in each face will be different

            var sa=Math.sin(ang);
            var saa=Math.sin(ang+angDiff);
            var ca=Math.cos(ang);
            var caa=Math.cos(ang+angDiff);

            this.vertices.push(0, 1, 0);
            this.vertices.push(Math.cos(ang), 0, -Math.sin(ang));
            this.vertices.push(Math.cos(ang+angDiff), 0, -Math.sin(ang+angDiff));
            
            this.texCoords.push(0.5,0);
            this.texCoords.push(ang / (2*Math.PI), 1);
            this.texCoords.push((ang + angDiff) / (2*Math.PI), 1);
            
            this.indices.push(3 * i + this.slices, (3 * i + 1) + this.slices, (3 * i + 2) + this.slices);


            // triangle normal computed by cross product of two edges
            var normal= [saa-sa, ca*saa-sa*caa, caa-ca];

            // normalization
            var normalLength=Math.sqrt(normal[0]*normal[0] + normal[1]*normal[1] + normal[2]*normal[2])
            normal[0] /= normalLength;
            normal[1] /= normalLength;
            normal[2] /= normalLength;          

            // push normal once for each vertex of this triangle
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);


            
        }

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


