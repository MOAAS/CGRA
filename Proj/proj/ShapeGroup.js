class ShapeGroup extends MyCGFobject {
	constructor(scene) {
        super(scene);
        this.polygons = [];
    }

    initBuffers() {
        for (var i = 0; i < this.polygons.length; i++) {
            this.polygons[i].initBuffers();
        }		
    }

	updateBuffers() {
        for (var i = 0; i < this.polygons.length; i++) {
            this.polygons[i].updateBuffers();
        }		
	}
	
	display() {
        for (var i = 0; i < this.polygons.length; i++) {
            this.polygons[i].display();
        }		
	}
	
	translate(x, y, z) {
        for (var i = 0; i < this.polygons.length; i++) {
            this.polygons[i].translate(x, y, z);
        }		
    }

    rotate(angle, x, y, z) {
        for (var i = 0; i < this.polygons.length; i++) {
            this.polygons[i].rotate(angle, x, y, z) ;
        }		
    }

    scale(x, y, z) {
        for (var i = 0; i < this.polygons.length; i++) {
            this.polygons[i].scale(x, y, z);
        }		
	}
	
	setMaterial(material) {
        for (var i = 0; i < this.polygons.length; i++) {
            this.polygons[i].setMaterial(material);
        }		
    }

    removeMaterial() {
        for (var i = 0; i < this.polygons.length; i++) {
            this.polygons[i].removeMaterial();
        }		
    }

    setTexture(texture) {
        for (var i = 0; i < this.polygons.length; i++) {
            this.polygons[i].setTexture(texture);
        }		
    }

    removeMaterial() {
        for (var i = 0; i < this.polygons.length; i++) {
            this.polygons[i].removeMaterial();
        }		
    }

}
