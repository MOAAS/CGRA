class MyPrism extends MyCGFobject {
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

        for(var i = 0, ang = 0; i < this.slices; i++, ang += angDiff) {
            // Add vertices
            this.vertices.push(Math.cos(ang), 0, Math.sin(ang)); // 0 + 4 * i
            this.vertices.push(Math.cos(ang), 1, Math.sin(ang)); // 1 + 4 * i

            this.vertices.push(Math.cos(ang + angDiff), 0, Math.sin(ang + angDiff)); // 2 + 4 * i
            this.vertices.push(Math.cos(ang + angDiff), 1, Math.sin(ang + angDiff)); // 3 + 4 * i

            this.texCoords.push(1,1);
            this.texCoords.push(1,0);
            this.texCoords.push(0,1);
            this.texCoords.push(0,0);


            this.indices.push(0 + 4 * i, 1 + 4 * i, 2 + 4 * i)
            this.indices.push(3 + 4 * i, 2 + 4 * i, 1 + 4 * i)

            var normal = [Math.sin(ang + angDiff) - Math.sin(ang), 0, Math.cos(ang) - Math.cos(ang + angDiff)]
            // normalization
            var normalLength=Math.sqrt(normal[0]*normal[0] + normal[1]*normal[1] + normal[2]*normal[2])
            normal[0] /= normalLength;
            normal[1] /= normalLength;
            normal[2] /= normalLength;          
            
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);
        }

        // as bases e que sao complicadas

        for(var i = 0, ang = 0; i < this.slices; i++, ang += angDiff) {
            this.vertices.push(Math.cos(ang), 1, Math.sin(ang));

            this.texCoords.push((Math.cos(ang) + 1) / 2, (Math.sin(ang) + 1) / 2);
            this.normals.push(0,1,0);
        }

        for(var i = 1; i < this.slices - 1; i++) {
            this.indices.push(4 * this.slices , 4 * this.slices + i + 1 , 4 * this.slices + i )
        }
            
        for(var i = 0, ang = 0; i < this.slices; i++, ang += angDiff) {
            this.vertices.push(Math.cos(ang), 0, Math.sin(ang));
            this.normals.push(0,-1,0);
        }
        
        for(var i = 1; i < this.slices - 1; i++) {
            this.indices.push(5 * this.slices , 5 * this.slices + i, 5 * this.slices + i + 1)
        }  
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        this.initBuffers();
    }
	
}
