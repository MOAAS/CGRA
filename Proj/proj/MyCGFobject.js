/**
* MyScene
* @constructor
*/
class MyCGFobject extends CGFobject {
    constructor(scene) {
        super(scene);
        this.transformations = []
        this.material = null;
        this.texture = null;
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
        //var oldMaterial = this.scene.materials[this.scene.selectedMaterial];

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
            if (this.texture != null)
                this.material.setTexture(this.texture);
            this.material.apply();
        }
     
        super.display();
        this.scene.popMatrix();
        
        //oldMaterial.apply();
    }

    setMaterial(material) {
        this.material = material;
    }

    removeMaterial() {
        this.material = null;
    }

    setTexture(texture) {
        this.texture = texture;
    }

    removeMaterial() {
        this.texture = null;
    }

}