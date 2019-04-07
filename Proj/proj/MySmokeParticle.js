class MySmokeParticle extends MyCGFobject {
    constructor(scene, x, y, z) {
        super(scene);
        this.particleLife = getRandNum(50, 150);
        this.dead = false;

        this.sphere = new MySphere(scene, 5, 5, this.particleLife / 1000);
        this.sphere.setPos(x, y ,z);
        

        this.material = new MyCGFappearance(scene, 0.4, 0.4, 0, 0);
        this.sphere.setMaterial(this.material);
    }

    display() {
        this.sphere.display();
    }

    update() {
        this.sphere.movePos(this.scene.wind.x/75 , getRandNum(0.1, 0.2), this.scene.wind.y/75);
        this.particleLife--;
        if (this.particleLife <= 0)
            this.dead = true;
    }
}

function getRandNum(min, max) {
    return Math.random() * (max - min) + min;
}
