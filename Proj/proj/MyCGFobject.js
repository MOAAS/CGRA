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
    }

    translate(x, y, z) {
        this.transformations.push(new Translation(x,y,z))
    }

    rotate(angle, x, y, z) {
        this.transformations.push(new Rotation(angle, x, y, z))
    }

    scale(x, y, z) {
        this.transformations.push(new Scaling(x,y,z))
    }

    display() {
        this.scene.pushMatrix()
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
            //else this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        }
        else console.log("NULL MATERIAL!");

        if (this.textureSlide) {
            for (var i = 0; i < this.texCoords.length; i++) {
                this.texCoords[i] -= 0.002;
            }
            this.material.setTextureWrap('REPEAT', 'REPEAT');
            this.updateTexCoordsGLBuffers();                
        }
     
        super.display();
        this.scene.popMatrix();        
    }

	updateComplexity(complexity) {
        
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