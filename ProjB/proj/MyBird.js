class MyBird extends ObjectGroup {
    constructor(scene, sticks, nest) {
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


        //Left Wing
        this.leftWing1 = new MyUnitCube(scene)
        this.leftWing1.scale(7, 0.2, 6)
        this.leftWing1.translate(3, 0.5, -3)

        this.leftWing2 = new MyPrism(scene, 3)
        this.leftWing2.scale(4, 0.2, 4)
        this.leftWing2.rotate(-Math.PI / 4, 0, 0, 1)
        this.leftWing2.translate(8.6, -1.5, -2.5)

        this.leftWingBase = new ObjectGroup(scene)
        this.leftWingBase.addObjects(this.leftWing1, this.leftWing2)

        this.leftFrontWingFeather1 = new MySphere(scene, 8, 15, 1)
        this.leftFrontWingFeather1.scale(1.2, 0.3, 4)
        this.leftFrontWingFeather1.rotate(0, 1, 0, 0)
        this.leftFrontWingFeather1.translate(3, 0.5, -4)

        this.leftFrontWingFeather2 = new MySphere(scene, 8, 15, 1)
        this.leftFrontWingFeather2.scale(1.2, 0.3, 4)
        this.leftFrontWingFeather2.rotate(0, 1, 0, 0)
        this.leftFrontWingFeather2.translate(5, 0.5, -3.5)

        this.leftFrontWings = new ObjectGroup(scene)
        this.leftFrontWings.addObjects(this.leftFrontWingFeather1, this.leftFrontWingFeather2)

        this.leftBackWingFeather1 = new MySphere(scene, 8, 15, 1)
        this.leftBackWingFeather1.scale(1.2, 0.3, 4)
        this.leftBackWingFeather1.translate(0, 0, -4)
        this.leftBackWingFeather1.rotate(0, 1, 0, 0)
        this.leftBackWingFeather1.translate(0, 0, 4)

        this.leftBackWingFeather2 = new MySphere(scene, 8, 15, 1)
        this.leftBackWingFeather2.scale(1.2, 0.3, 4)
        this.leftBackWingFeather2.translate(0, 0, -4)
        this.leftBackWingFeather2.rotate(-Math.PI / 6, 0, 1, 0)
        this.leftBackWingFeather2.translate(0, 0, 4)

        this.leftBackWingFeather3 = new MySphere(scene, 8, 15, 1)
        this.leftBackWingFeather3.scale(1.2, 0.3, 4)
        this.leftBackWingFeather3.translate(0, 0, -4)
        this.leftBackWingFeather3.rotate(-Math.PI / 3, 0, 1, 0)
        this.leftBackWingFeather3.translate(0, 0, 4)

        this.leftBackWings = new ObjectGroup(scene)
        this.leftBackWings.addObjects(this.leftBackWingFeather1, this.leftBackWingFeather2, this.leftBackWingFeather3)

        this.leftBackWings.rotate(-Math.PI / 4, 0, 0, 1)
        this.leftBackWings.translate(7, 0.2, -3.5)

        this.leftWingMainFeather = new MySphere(scene, 8, 15, 1)
        this.leftWingMainFeather.scale(1.3, 0.5, 4.5)
        this.leftWingMainFeather.rotate(-Math.PI / 2, 0, 1, 0)
        this.leftWingMainFeather.translate(3, 0.3, 0)

        this.leftWing = new ObjectGroup(scene)
        this.leftWing.addObjects(this.leftWingBase, this.leftFrontWings, this.leftBackWings, this.leftWingMainFeather)
        this.leftWing.translate(1, 0, 0)

        //RightWing

        this.rightWing1 = new MyUnitCube(scene)
        this.rightWing1.scale(7, 0.2, 6)
        this.rightWing1.translate(-3, 0.5, -3)

        this.rightWing2 = new MyPrism(scene, 3)
        this.rightWing2.scale(4, 0.2, 4)
        this.rightWing2.rotate(Math.PI, 0, 1, 0)
        this.rightWing2.rotate(Math.PI / 4, 0, 0, 1)
        this.rightWing2.translate(-8.6, -1.5, -2.5)

        this.rightWingBase = new ObjectGroup(scene)
        this.rightWingBase.addObjects(this.rightWing1, this.rightWing2)

        this.rightFrontWingFeather1 = new MySphere(scene, 8, 15, 1)
        this.rightFrontWingFeather1.scale(1.2, 0.3, 4)
        this.rightFrontWingFeather1.rotate(0, 1, 0, 0)
        this.rightFrontWingFeather1.translate(-3, 0.5, -4)

        this.rightFrontWingFeather2 = new MySphere(scene, 8, 15, 1)
        this.rightFrontWingFeather2.scale(1.2, 0.3, 4)
        this.rightFrontWingFeather2.rotate(0, 1, 0, 0)
        this.rightFrontWingFeather2.translate(-5, 0.5, -3.5)

        this.rightFrontWings = new ObjectGroup(scene)
        this.rightFrontWings.addObjects(this.rightFrontWingFeather1, this.rightFrontWingFeather2)

        this.rightBackWingFeather1 = new MySphere(scene, 8, 15, 1)
        this.rightBackWingFeather1.scale(1.2, 0.3, 4)
        this.rightBackWingFeather1.translate(0, 0, -4)
        this.rightBackWingFeather1.rotate(0, 1, 0, 0)
        this.rightBackWingFeather1.translate(0, 0, 4)

        this.rightBackWingFeather2 = new MySphere(scene, 8, 15, 1)
        this.rightBackWingFeather2.scale(1.2, 0.3, 4)
        this.rightBackWingFeather2.translate(0, 0, -4)
        this.rightBackWingFeather2.rotate(+Math.PI / 6, 0, 1, 0)
        this.rightBackWingFeather2.translate(0, 0, 4)

        this.rightBackWingFeather3 = new MySphere(scene, 8, 15, 1)
        this.rightBackWingFeather3.scale(1.2, 0.3, 4)
        this.rightBackWingFeather3.translate(0, 0, -4)
        this.rightBackWingFeather3.rotate(+Math.PI / 3, 0, 1, 0)
        this.rightBackWingFeather3.translate(0, 0, 4)

        this.rightBackWings = new ObjectGroup(scene)
        this.rightBackWings.addObjects(this.rightBackWingFeather1, this.rightBackWingFeather2, this.rightBackWingFeather3)

        this.rightBackWings.rotate(+Math.PI / 4, 0, 0, 1)
        this.rightBackWings.translate(-7, 0.2, -3.5)

        this.rightWingMainFeather = new MySphere(scene, 8, 15, 1)
        this.rightWingMainFeather.scale(1.3, 0.5, 4.5)
        this.rightWingMainFeather.rotate(-Math.PI / 2, 0, 1, 0)
        this.rightWingMainFeather.translate(-3, 0.3, 0)

        this.rightWing = new ObjectGroup(scene)
        this.rightWing.addObjects(this.rightWingBase, this.rightFrontWings, this.rightBackWings, this.rightWingMainFeather)
        this.rightWing.translate(-1, 0, 0)


        this.wings = new ObjectGroup(scene)
        this.wings.addObjects(this.leftWing, this.rightWing)

        this.objects = [this.head, this.body, this.beak, this.eyes, this.backFeathers, this.wings]

        this.scaleFactor = 1;
        this.speedFactor = 1;

        this.movementState = 'freeRoam'
        this.hasStick = false

        this.pos = [0, 10, 0]
        this.speed = 0.1
        this.minSpeed = 0.05
        this.birdAngle = 0
        this.turnRate = 1

        this.wingVelocity = 5
        this.wingAngle = 0
        this.wingDir = 1

        this.wobleAngVel = Math.PI / 1024
        this.wobleAng = 0
        this.wobleDir = -1

        //this.turning = false

        this.sticks = sticks
        this.nest = nest
    }

    update() {
        this.onSpeedUpdate();
        this.updateWingAngle()
        this.updateBirdWoble()
        this.pos[0] += Math.sin(this.birdAngle) * this.speed * this.speedFactor;
        this.pos[2] += Math.cos(this.birdAngle) * this.speed * this.speedFactor;
        // coordenadas esfericas 
        let beakAngle = this.wobleAng - Math.PI / 8;
        let radius = this.scaleFactor * 1.15;
        this.beakPos = [this.pos[0] + Math.sin(this.birdAngle) * Math.cos(beakAngle) * radius, 
                        this.pos[1] - Math.sin(beakAngle) * radius, 
                        this.pos[2] + Math.cos(this.birdAngle) * Math.cos(beakAngle) * radius];
    }

    changeHeight(v) {
        this.pos[1] += v;
    }

    turn(v) {
        //this.turning = true
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
        this.wobleAngVel = Math.PI / 1024 * this.speedFactor * this.speed * 100; 
        this.wingVelocity = 5 * this.speedFactor * this.speed * 10;
    }

    updateBirdWoble() {
        if (this.wobleAng >= Math.PI / 8)
            this.wobleDir = -1
        if (this.wobleAng <= -Math.PI / 8)
            this.wobleDir = 1
        this.wobleAng += this.wobleAngVel * this.wobleDir;
        this.setAngle(this.wobleAng, null, null)
    }

    updateWingAngle() {
        if (this.wingAngle >= Math.PI / 8)
            this.wingDir = -1
        if (this.wingAngle <= -Math.PI / 8)
            this.wingDir = 1
        this.wingAngVel = this.wingVelocity * this.wingDir / 70;
        this.wingAngle += this.wingAngVel
        this.rightWing.moveAngle(0, 0, this.wingAngVel);
        this.leftWing.moveAngle(0, 0, -this.wingAngVel);
        this.backFeathers.moveAngle(this.wingAngVel / 5, 0, 0);
        this.changeHeight(this.wingAngVel * 0.7)
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
                if (this.pos[1] <= 5) {
                    if (this.hasStick) {
                        if (this.nest.checkColision(this)) {
                            this.hasStick = false
                            this.pickedStick.land()
                        }
                    }
                    else {
                        var sticksArray = this.sticks.getObjects()
                        for (let i = 0, length = sticksArray.length; i < length; i++) {
                            if (sticksArray[i].checkColision(this)) {
                                this.hasStick = true
                                this.pickedStick = sticksArray[i]
                                break
                            }
                        }
                    }
                    this.movementState = 'goingUp'
                    break
                }

                this.changeHeight(-0.25)
                break
            }
            case 'goingUp': {
                if (this.pos[1] >= 10) {
                    this.movementState = 'freeRoam'
                }
                else this.changeHeight(0.25)
                break
            }
        }

    }


    display() {
        this.setScale(0.1 * this.scaleFactor, 0.1 * this.scaleFactor, 0.1 * this.scaleFactor)
        this.setPos(this.pos[0], this.pos[1], this.pos[2]);
        this.setAngle(null, this.birdAngle, null)
        super.display();
    }
}