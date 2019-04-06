class MySmokeParticle extends MyCGFobject {
    constructor(scene, x, y, z) {
        super(scene);
        this.cube = new MySphere(scene,5,5,1);
        this.cube.setPos(x, y ,z);
        this.cube.scale(0.12, 0.12, 0.12)
        
        this.particleLife = getRandNum(100, 150);
        this.dead = false;

        this.material = new MyCGFappearance(scene, 0.4, 0.4, 0, 0);
        this.cube.setMaterial(this.material);
    }

    display() {
        this.cube.display();
    }

    update() {
        this.cube.movePos(getRandNum(-0.1, 0.1)+this.scene.wind.x/125 , 0.05, getRandNum(-0.1, 0.1)+this.scene.wind.y/125);
        this.particleLife--;
        if (this.particleLife <= 0)
            this.dead = true;
    }
}

function getRandNum(min, max) {
    return Math.random() * (max - min) + min;
}
