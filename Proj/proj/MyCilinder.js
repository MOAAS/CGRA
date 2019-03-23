class MyCilinder extends MyCGFobject {
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

        // as bases e que sao complicadas (igual ao prisma)

        for(var i = 0, ang = 0; i < this.slices; i++, ang += angDiff) {
            this.vertices.push(Math.cos(ang), 1, Math.sin(ang));
            this.texCoords.push((Math.cos(ang) + 1) / 2, (Math.sin(ang) + 1) / 2);
            this.normals.push(0,1,0);
        }

        for(var i = 1; i < this.slices - 1; i++) {
            this.indices.push(0, i + 1 , i )
        }
            
        for(var i = 0, ang = 0; i < this.slices; i++, ang += angDiff) {
            this.vertices.push(Math.cos(ang), 0, Math.sin(ang));
            this.texCoords.push((Math.cos(ang) + 1) / 2, (Math.sin(ang) + 1) / 2);
            this.normals.push(0,-1,0);
        }
        
        for(var i = 1; i < this.slices - 1; i++) {
            this.indices.push(1 * this.slices , 1 * this.slices + i, 1 * this.slices + i + 1)
        }  
        

        for(var i = 0, ang = 0; i <= this.slices; i++, ang += angDiff) {
            // Add vertices
            this.vertices.push(Math.cos(ang), 0, Math.sin(ang)); // 0 + 2 * i
            this.vertices.push(Math.cos(ang), 1, Math.sin(ang)); // 1 + 2 * i

            this.texCoords.push(ang / (2*Math.PI), 1);
            this.texCoords.push(ang / (2*Math.PI), 0);

            this.indices.push(2 * (i + this.slices) + 0, 2 * (i + this.slices) + 1, 2 * (i + this.slices) + 2)
            this.indices.push(2 * (i + this.slices) + 3, 2 * (i + this.slices) + 2, 2 * (i + this.slices) + 1)
            
            this.normals.push(Math.cos(ang), 0, Math.sin(ang));
            this.normals.push(Math.cos(ang), 0, Math.sin(ang));
        }
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        this.initBuffers();
    }
	
}
