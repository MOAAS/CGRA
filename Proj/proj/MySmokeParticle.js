class MySmokeParticle extends MyCGFobject {
    constructor(scene, x, y, z) {
        super(scene);
        this.cube = new MyUnitCube(scene);
        this.cube.setPos(x, y ,z);
        this.cube.scale(0.3, 0.3, 0.3)
        
        this.particleLife = getRandNum(50, 150);
        this.dead = false;

        this.material = new MyCGFappearance(scene, 0.4, 0.4, 0, 0);
        this.cube.setMaterial(this.material);
    }

    display() {
        this.cube.display();
    }

    update() {
        this.cube.movePos(getRandNum(-0.05, 0.05), 0.1, getRandNum(-0.05, 0.05));
        this.particleLife--;
        if (this.particleLife <= 0)
            this.dead = true;
    }
}

function getRandNum(min, max) {
    return Math.random() * (max - min) + min;
}
