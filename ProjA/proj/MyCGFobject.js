/**
* MyScene
* @constructor
*/
class MyCGFobject extends CGFobject {
    constructor(scene) {
        super(scene);
        this.transformations = []
        this.material = new MyCGFappearance(scene, 0.35, 0.8, 0.2, 10);
        this.texture = null;
        this.textureFilter = null;
        this.textureSlide = false;
        this.xpos = 0;
        this.ypos = 0;
        this.zpos = 0;

        this.xAngle = 0;
        this.yAngle = 0;
        this.zAngle = 0;        
    }

    translate(x, y, z) {
        let length = this.transformations.length
        if (length > 0 && this.transformations[length - 1] instanceof Translation) {
            this.transformations[length - 1].x += x;
            this.transformations[length - 1].y += y
            this.transformations[length - 1].z += z;
        }
        else this.transformations.push(new Translation(x, y, z))
    }

    rotate(angle, x, y, z) {
        this.transformations.push(new Rotation(angle, x, y, z))
    }

    scale(x, y, z) {
        this.transformations.push(new Scaling(x,y,z))
    }

    setPos(x, y, z) {
        this.xpos = x;
        this.ypos = y;
        this.zpos = z;        
    }

    movePos(x, y, z) {
        this.xpos += x;
        this.ypos += y;
        this.zpos += z;        
    }

    setAngle(x, y , z) {
        this.xAngle = x;
        this.yAngle = y;
        this.zAngle = z;        
    }

    moveAngle(x, y, z) {
        this.xAngle += x;
        this.yAngle += y;
        this.zAngle += z;
        while (this.xAngle > 2 * Math.PI)    
            this.xAngle -= 2 * Math.PI;
        while (this.yAngle > 2 * Math.PI)    
            this.yAngle -= 2 * Math.PI;
        while (this.zAngle > 2 * Math.PI)    
            this.zAngle -= 2 * Math.PI;
    }

    display() {
        this.scene.pushMatrix()
        if (this.xpos || this.ypos || this.zpos)
            this.scene.translate(this.xpos, this.ypos, this.zpos);
        if (this.xAngle)
            this.scene.rotate(this.xAngle, 1, 0, 0);
        if (this.yAngle)
            this.scene.rotate(this.yAngle, 0, 1, 0);
        if (this.zAngle)
            this.scene.rotate(this.zAngle, 0, 0, 1);
        for (var i = this.transformations.length - 1; i >= 0; i--) {
            var transformation = this.transformations[i];
            if (transformation instanceof Translation)
                this.scene.translate(transformation.x, transformation.y, transformation.z);
            else if (transformation instanceof Rotation)
                this.scene.rotate(transformation.angle, transformation.x, transformation.y, transformation.z);
            else if (transformation instanceof Scaling) {
                this.scene.scale(transformation.x, transformation.y, transformation.z);
            }
            else this.is.how.we.crash.js = 40;
        }

        if (this.material != null) {
            this.material.setTexture(this.texture);
            this.material.apply();
            if (this.textureFilterType != null) {
                this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.textureFilterType);
            }
        }
        else console.log("NULL MATERIAL!");

        if (this.textureSlide) {
            for (var i = 0; i < this.texCoords.length; i += 2) {
                this.texCoords[i] -= this.scene.wind.x / 1000;
                this.texCoords[i + 1] -= this.scene.wind.y / 1000;
            }
            this.material.setTextureWrap('REPEAT', 'REPEAT');
            this.updateTexCoordsGLBuffers();                
        }
     
        super.display();
        this.scene.popMatrix();        
    }

	updateComplexity(complexity) {
        
    }

    update() {

    }

    // --- Lighting, Materials, Textures -- //

    enableTextureSlide(amount) {
        this.textureSlide = true;
        this.textureSlideAmount = amount;
    }

    scaleTexCoords(s, t) {
        for (var i = 0; i < this.texCoords.length; i += 2) {
            this.texCoords[i] *= s;
            this.texCoords[i + 1] *= t;
        }
        this.updateTexCoordsGLBuffers();
    }

    setMaterial(material) {
        this.material = material;
    }

    setTexture(texture) {
        this.texture = texture;
        this.textureFilter = null;
    }

    setTextureFilter(filterType) {
        this.textureFilterType = filterType;
    }

    setTextureWrap(x, y) {
        this.material.setTextureWrap(x,y);
    }

    removeTexture() {
        this.texture = null;
        this.textureFilterType = null;
    }
    
    setObjAmbient(R, G, B, a) {
        this.material.setAmbient(R, G, B, a);
    }

    setObjDiffuse(R, G, B, a) {
        this.material.setDiffuse(R, G, B, a);
    }

    setObjSpecular(R, G, B, a) {
        this.material.setSpecular(R, G, B, a);
    }

    setObjShininess(shininess) {
        this.material.setShininess(shininess);
    }
}