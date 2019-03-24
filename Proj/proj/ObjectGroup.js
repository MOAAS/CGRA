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

    // --- Lighting, Materials, Textures -- //
	
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
