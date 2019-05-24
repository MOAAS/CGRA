class MyBird extends ObjectGroup {
    constructor(scene, stick) {
        super(scene);

        this.head = new MySphere(scene, 15, 15, 4)
        this.head.translate(0, 4, 4);

        this.body = new MySphere(scene, 15, 15, 5)
        this.body.translate(0, -1, -2);
        this.body.scale(0.9, 0.9, 1.5)

        this.beak = new MyCone(scene, 10);
        this.beak.scale(1, 3, 1)
        this.beak.rotate(Math.PI / 2, 1, 0, 0)
        this.beak.translate(0, 4, 7.5)

        this.leftEye = new MySphere(scene, 10, 10, 0.8)
        this.leftEye.translate(2, 6, 6.2)
        this.rightEye = new MySphere(scene, 10, 10, 0.8)
        this.rightEye.translate(-2, 6, 6.2)


        this.eyes = new ObjectGroup(scene)
        this.eyes.addObjects(this.leftEye, this.rightEye)

        this.backFeather1 = new MySphere(scene, 8, 15, 1)
        this.backFeather1.scale(1, 0.3, 4)
        this.backFeather1.rotate(Math.PI / 6, 1, 0, 0)
        this.backFeather1.translate(0, 2, -11)

        this.backFeather2 = new MySphere(scene, 8, 15, 1)
        this.backFeather2.scale(1, 0.3, 4)
        this.backFeather2.rotate(Math.PI / 6, 1, 0, 0)
        this.backFeather2.translate(0, 0, -2)
        this.backFeather2.rotate(-Math.PI / 8, 0, 1, 0)
        this.backFeather2.translate(0, 0, 2)
        this.backFeather2.translate(0, 2, -11)

        this.backFeather3 = new MySphere(scene, 8, 15, 1)
        this.backFeather3.scale(1, 0.3, 4)
        this.backFeather3.rotate(Math.PI / 6, 1, 0, 0)
        this.backFeather3.translate(0, 0, -2)
        this.backFeather3.rotate(Math.PI / 8, 0, 1, 0)
        this.backFeather3.translate(0, 0, 2)
        this.backFeather3.translate(0, 2, -11)

        this.backFeathers = new ObjectGroup(scene)
        this.backFeathers.addObjects(this.backFeather1, this.backFeather2, this.backFeather3)

        this.leftWing = new MySphere(scene, 8, 15, 2)
        this.leftWing.scale(3.2, 0.5, 2.7)
        this.leftWing.translate(3, 0.5, -3)

        this.rightWing = new MySphere(scene, 8, 15, 2)
        this.rightWing.scale(3.2, 0.5, 2.7)
        this.rightWing.translate(-3, 0.5, -3)

        this.wings = new ObjectGroup(scene)
        this.wings.addObjects(this.rightWing, this.leftWing)

        this.objects = [this.head, this.body, this.beak, this.eyes, this.backFeathers, this.wings]

        this.scaleFactor = 1;
        this.speedFactor = 1;

        this.movementState = 'freeRoam'
        this.hasStick = false

        this.pos = [0, 10, 0]
        this.speed = 0.1;
        this.minSpeed = 0.05;
        this.birdAngle = 0;
        this.turnRate = 1;

        this.wingVelocity = 5
        this.wingAngle = 0
        this.wingDir = 1

        this.wobleAngVel = Math.PI / 1024
        this.wobleAng = 0

        this.stick = stick
    }

    update() {
        this.onSpeedUpdate();
        this.updateBirdWoble()
        this.updateWingAngle()
        this.pos[0] += Math.sin(this.birdAngle) * this.speed * this.speedFactor;
        this.pos[2] += Math.cos(this.birdAngle) * this.speed * this.speedFactor;
    }

    changeHeight(v) {
        this.pos[1] += v;
    }

    turn(v) {
        this.birdAngle += v * this.speedFactor;
    }

    accelerate(v) {
        this.speed = Math.max(this.minSpeed, this.speed + v)
    }

    resetPos() {
        this.pos = [0, 10, 0]
        this.speed = 0.1;
        this.birdAngle = 0;
    }

    onSpeedUpdate() {
        this.wobleAngVel = Math.PI / 1024 * this.speedFactor * this.speed * 10;
        this.wingVelocity = 5 * this.speedFactor * this.speed * 10;
    }

    updateBirdWoble() {
        if (this.wobleAng >= Math.PI / 32)
            this.wobleAngVel = -this.wobleAngVel
        if (this.wobleAng <= -Math.PI / 32)
            this.wobleAngVel = -this.wobleAngVel
        this.wobleAng += this.wobleAngVel
        this.moveAngle(this.wobleAngVel, 0, 0)
    }

    updateWingAngle() {
        if (this.wingAngle >= Math.PI / 8)
            this.wingDir = -1
        if (this.wingAngle <= -Math.PI / 8)
            this.wingDir = 1
        var wingAngVel = this.wingVelocity * this.wingDir / 100;

        this.wingAngle += wingAngVel
        this.rightWing.moveAngle(0, 0, wingAngVel)
        this.leftWing.moveAngle(0, 0, -wingAngVel)
        this.backFeathers.moveAngle(wingAngVel / 10, 0, 0);
    }

    check(gui) {
        switch (this.movementState) {
            case 'freeRoam': {
                if (gui.isKeyPressed("KeyW"))
                    this.accelerate(0.02)
                if (gui.isKeyPressed("KeyS"))
                    this.accelerate(-0.02)
                if (gui.isKeyPressed("KeyA"))
                    this.turn(0.12)
                if (gui.isKeyPressed("KeyD"))
                    this.turn(-0.12)
                if (gui.isKeyPressed("KeyR"))
                    this.resetPos()
                if (gui.isKeyPressed("KeyP")) {
                    this.movementState = 'goingDown'
                    this.changeHeight(-0.2)
                }
                break
            }

            case 'goingDown': {
                if (gui.isKeyPressed("Space")) {
                    this.movementState = 'goingUp'
                    break
                }
                if (this.hasStick) {
                    //nests
                }
                else {
                    if (this.pos[1] <= 5) {
                        if (this.stick.checkColision(this))
                            this.hasStick = true
                        this.movementState = 'goingUp'
                        break
                    }
                }
                this.changeHeight(-0.25)
                break
            }
            case 'goingUp': {
                if (this.pos[1] >= 10) {
                    this.movementState = 'freeRoam'
                }
                else this.changeHeight(+0.25)
                break
            }
        }

    }


    display() {
        this.scene.pushMatrix();
        this.setScale(0.1 * this.scaleFactor, 0.1 * this.scaleFactor, 0.1 * this.scaleFactor)
        this.setPos(this.pos[0], this.pos[1], this.pos[2]);
        this.setAngle(null, this.birdAngle, null)
        super.display();
        this.scene.popMatrix();
    }
}