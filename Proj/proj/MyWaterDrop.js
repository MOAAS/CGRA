class MyRainSpawner extends MyCGFobject {
    constructor(scene) {
        super(scene)
        this.particles = [];
        this.enableRain = false;
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
        else this.ticksLeft = 5;

        for (let x = -50; x <= 50; x += 20) {
            for (let z = -50; z <= 50; z += 20) {
                this.particles.push(new MyWaterDrop(this.scene, x + getRandNum(-10, 10), 50, z + getRandNum(-10, 10)));
            }
        }

    }

}

class MyWaterDrop extends ObjectGroup {
    constructor(scene, x, y, z) {
        super(scene);
        this.dead = false;
        this.offsetX =  getRandNum(-0.04, 0.04);
        this.offsetY =  getRandNum(-0.04, 0.04);
        this.velocity = getRandNum(-1, -2);


        this.sphere = new MySphere(scene, 15, 15, 0.5);
        this.sphere.setPos(x, y ,z);
        this.cone = new MyCone(scene, 15);
        this.cone.scale(0.5, 1.5, 0.5);
        this.cone.setPos(x, y, z);

        
        this.addObjects(this.sphere, this.cone);

        this.material = new MyCGFappearance(scene, 0.8, 0.8, 1, 5);
        this.material.setColor(0, 200, 255)
        this.setMaterial(this.material);
    }

    update() {
        this.movePos(this.scene.wind.x/75 + this.offsetX, this.velocity, this.scene.wind.y/75+ this.offsetY);
        if (this.sphere.ypos <= 0)
            this.dead = true;
    }
}

function getRandNum(min, max) {
    return Math.random() * (max - min) + min;
}
