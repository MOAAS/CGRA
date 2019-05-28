class ObjectGroup extends MyCGFobject {
	constructor(scene) {
        super(scene);
        this.objects = [];
    }

    initBuffers() {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].initBuffers();
        }		
    }
	
	display() {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].display();
        }		
	}
	
	translate(x, y, z) {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].translate(x, y, z);
        }		
    }

    rotate(angle, x, y, z) {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].rotate(angle, x, y, z) ;
        }		
    }    

    setPos(x, y, z) {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].setPos(x, y, z) ;
        }		
    }

    movePos(x, y, z) {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].movePos(x, y, z) ;
        }		
    }

    setAngle(x, y, z) {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].setAngle(x, y, z) ;
        }		
    }

    moveAngle(x, y, z) {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].moveAngle(x, y, z) ;
        }		
    }

    setScale(x, y, z) {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].setScale(x, y, z) ;
        }		
    }

    addScale(x, y, z) {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].addScale(x, y, z) ;
        }		
    }

    
    scale(x, y, z) {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].scale(x, y, z);
        }		
    }
    
    addObjects(...args) {
        this.objects.push(...args);
    }
    
	updateComplexity(complexity) {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].updateComplexity(complexity);
        }		
    }
    
    update() {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].update();
        }		
    }
    
    getObjects() {
        return this.objects;
    }
    // --- Lighting, Materials, Textures -- //
    
    setTextureWrap(x, y) {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].setTextureWrap(x, y);
        }		
    }

    scaleTexCoords(s, t) {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].scaleTexCoords(s,t);
        }		
    }

    enableTextureSlide(amount) {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].enableTextureSlide(amount);
        }		
    }

	
	setMaterial(material) {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].setMaterial(material);
        }		
    }

    removeMaterial() {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].removeMaterial();
        }		
    }

    setTexture(texture) {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].setTexture(texture);
        }		
    }

    setTextures(...args) {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].setTextures(...args);
        }		
    }


    setTextureFilter(filterType) {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].setTextureFilter(filterType);
        }		
    }

    removeTexture() {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].removeTexture();
        }		
    }

    setObjAmbient(R, G, B, a) {
        for (var i = 0; i < this.objects.length; i++) {
            this.material.setAmbient(R, G, B, a);
        }
    }

    setObjDiffuse(R, G, B, a) {
        for (var i = 0; i < this.objects.length; i++) {
            this.material.setDiffuse(R, G, B, a);
        }
    }

    setObjSpecular(R, G, B, a) {
        for (var i = 0; i < this.objects.length; i++) {
            this.material.setSpecular(R, G, B, a);
        }
    }

    setObjShininess(shininess) {
        for (var i = 0; i < this.objects.length; i++) {
            this.material.setShininess(shininess);
        }
    }


}
