class MyRainSpawner extends MyCGFobject {
    constructor(scene) {
        super(scene)
        this.particles = [];
        this.enableRain = false;
        this.rainFrequency = 0.2;
        this.rainAmount = 6;
        this.ticksLeft = 0;
    }

    display() {
        for (let i = 0; i < this.particles.length; i++)
            this.particles[i].display();
    }

    enableRain() {
        this.enableRain = true;
    }

    disableRain() {
        this.enableRain = false;
    }

    update() {
        for (let i = 0; i < this.particles.length; i++) {
            if (this.particles[i].dead) {
                this.particles.splice(i, 1);
                i--;
            }
            else this.particles[i].update();
        }

        if (!this.enableRain)
            return;

        if (this.ticksLeft > 0) {
            this.ticksLeft--;
            return;
        }
        else this.ticksLeft = 1 / this.rainFrequency;

        let diff = 150 / this.rainAmount;
        for (let x = -75; x <= 75; x += diff) {
            for (let z = -75; z <= 75; z += diff) {
                this.particles.push(new MyWaterDrop(this.scene, x + getRandNum(-diff / 2, diff / 2), 100, z + getRandNum(-diff / 2, diff / 2)));
            }
        }

    }

}

class MyWaterDrop extends ObjectGroup {
    constructor(scene, x, y, z) {
        super(scene);
        this.dead = false;
        this.velocity = getRandNum(-1, -2);

        this.sphere = new MySphere(scene, 15, 15, 0.25);
        this.sphere.setPos(x, y ,z);
        this.cone = new MyCone(scene, 15);
        this.cone.scale(0.25, 1.25, 0.25);
        this.cone.setPos(x, y, z);

        
        this.addObjects(this.sphere, this.cone);

        this.material = new MyCGFappearance(scene, 0.25, 0.2, 0.3, 3);
        this.material.setColor(0, 150, 255)
        this.setMaterial(this.material);
    }

    update() {
        this.movePos(this.scene.wind.x / 5, this.velocity, this.scene.wind.y / 5);
        this.setAngle(-this.scene.wind.y/15, 0, this.scene.wind.x/15);
        if (this.sphere.ypos <= 0)
            this.dead = true;
    }
}

function getRandNum(min, max) {
    return Math.random() * (max - min) + min;
}
