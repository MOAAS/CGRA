class ShapeGroup extends MyCGFobject {
	constructor(scene) {
        super(scene);
        this.shapes = [];
    }

    initBuffers() {
        for (var i = 0; i < this.shapes.length; i++) {
            this.shapes[i].initBuffers();
        }		
    }

	updateBuffers() {
        for (var i = 0; i < this.shapes.length; i++) {
            this.shapes[i].updateBuffers();
        }		
	}
	
	display() {
        for (var i = 0; i < this.shapes.length; i++) {
            this.shapes[i].display();
        }		
	}
	
	translate(x, y, z) {
        for (var i = 0; i < this.shapes.length; i++) {
            this.shapes[i].translate(x, y, z);
        }		
    }

    rotate(angle, x, y, z) {
        for (var i = 0; i < this.shapes.length; i++) {
            this.shapes[i].rotate(angle, x, y, z) ;
        }		
    }

    scale(x, y, z) {
        for (var i = 0; i < this.shapes.length; i++) {
            this.shapes[i].scale(x, y, z);
        }		
	}
	
	setMaterial(material) {
        for (var i = 0; i < this.shapes.length; i++) {
            this.shapes[i].setMaterial(material);
        }		
    }

    removeMaterial() {
        for (var i = 0; i < this.shapes.length; i++) {
            this.shapes[i].removeMaterial();
        }		
    }

    setTexture(texture) {
        for (var i = 0; i < this.shapes.length; i++) {
            this.shapes[i].setTexture(texture);
        }		
    }

    removeMaterial() {
        for (var i = 0; i < this.shapes.length; i++) {
            this.shapes[i].removeMaterial();
        }		
    }

}
