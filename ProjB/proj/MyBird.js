class MyBird extends ObjectGroup {
    constructor(scene, sticks, nest) {
        super(scene);

        /* Head */
        this.head = new MySphere(scene, 15, 15, 4)
        this.head.translate(0, 4, 4);

        /* Head */
        this.body = new MySphere(scene, 15, 15, 5)
        this.body.translate(0, -1, -2);
        this.body.scale(0.9, 0.9, 1.5)

        /* Head */
        this.beak = new MyCone(scene, 10);
        this.beak.scale(1, 3, 1)
        this.beak.rotate(Math.PI / 2, 1, 0, 0)
        this.beak.translate(0, 4, 7.5)

        /* Head */
        this.leftEye = new MySphere(scene, 10, 10, 0.8)
        this.leftEye.rotate(-Math.PI / 5, 1, 0, 0)
        this.leftEye.rotate(2 * Math.PI / 5, 0, 1, 0)
        this.leftEye.translate(2, 6, 6.2)

        this.rightEye = new MySphere(scene, 10, 10, 0.8)
        this.rightEye.rotate(-Math.PI / 5, 1, 0, 0)
        this.rightEye.rotate(Math.PI / 5, 0, 1, 0)
        this.rightEye.translate(-2, 6, 6.2)

        this.eyes = new ObjectGroup(scene)
        this.eyes.addObjects(this.leftEye, this.rightEye)

        /* WINGS */
        /* Left Wing */
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

        this.leftWing1 = new MyUnitCube(scene)
        this.leftWing1.scale(7, 0.2, 6)
        this.leftWing1.translate(3, 0.5, -3)

        this.leftWing2 = new MyPrism(scene, 3)
        this.leftWing2.scale(4, 0.2, 4)
        this.leftWing2.translate(8.6, 0, -2.5)

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

        this.leftBackWingFeathers = new ObjectGroup(scene)
        this.leftBackWingFeathers.addObjects(this.leftBackWingFeather1, this.leftBackWingFeather2, this.leftBackWingFeather3)
        this.leftBackWingFeathers.translate(7, 0.2, -3.5)

        this.leftWingMainFeather = new MySphere(scene, 8, 15, 1)
        this.leftWingMainFeather.scale(1.3, 0.5, 4.5)
        this.leftWingMainFeather.rotate(-Math.PI / 2, 0, 1, 0)
        this.leftWingMainFeather.translate(3, 0.3, 0)

        this.leftWing = new ObjectGroup(scene)
        this.leftWing.addObjects(this.leftWingBase, this.leftFrontWings, this.leftBackWingFeathers, this.leftWingMainFeather)
        this.leftWing.translate(1, 0, 0)

        this.leftBackWing = new ObjectGroup(scene)
        this.leftBackWing.addObjects(this.leftBackWingFeathers,this.leftWing2)

        /* RightWing */

        this.rightWing1 = new MyUnitCube(scene)
        this.rightWing1.scale(7, 0.2, 6)
        this.rightWing1.translate(-3, 0.5, -3)

        this.rightWing2 = new MyPrism(scene, 3)
        this.rightWing2.scale(4, 0.2, 4)
        this.rightWing2.rotate(Math.PI, 0, 1, 0)
        this.rightWing2.translate(-8.6, 0, -2.5)

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

        this.rightBackWingFeathers = new ObjectGroup(scene)
        this.rightBackWingFeathers.addObjects(this.rightBackWingFeather1, this.rightBackWingFeather2, this.rightBackWingFeather3)
        this.rightBackWingFeathers.translate(-7, 0.2, -3.5)

        this.rightWingMainFeather = new MySphere(scene, 8, 15, 1)
        this.rightWingMainFeather.scale(1.3, 0.5, 4.5)
        this.rightWingMainFeather.rotate(-Math.PI / 2, 0, 1, 0)
        this.rightWingMainFeather.translate(-3, 0.3, 0)

        this.rightWing = new ObjectGroup(scene)
        this.rightWing.addObjects(this.rightWingBase, this.rightFrontWings, this.rightBackWingFeathers, this.rightWingMainFeather)
        this.rightWing.translate(-1, 0, 0)

        this.rightBackWing = new ObjectGroup(scene)
        this.rightBackWing.addObjects(this.rightBackWingFeathers,this.rightWing2)

        // Criação de transformaçoes que permitem que as asas dobrem

        // Asa direita
        this.rightWingFoldT1 = new Translation(7, -0.2, 3.5);
        this.rightWingFoldR = new Rotation(0, 0, 0, 1);
        this.rightWingFoldT2 = new Translation(-7, 0.2, -3.5);

        this.rightBackWing.addTransformation(this.rightWingFoldT1);
        this.rightBackWing.addTransformation(this.rightWingFoldR);
        this.rightBackWing.addTransformation(this.rightWingFoldT2);

        // Asa esquerda
        this.leftWingFoldT1 = new Translation(-7, -0.2,3.5);
        this.leftWingFoldR = new Rotation(0 ,0,0,1);
        this.leftWingFoldT2 = new Translation(7, 0.2, -3.5);

        this.leftBackWing.addTransformation(this.leftWingFoldT1);
        this.leftBackWing.addTransformation(this.leftWingFoldR);
        this.leftBackWing.addTransformation(this.leftWingFoldT2);

        this.wings = new ObjectGroup(scene)
        this.wings.addObjects(this.leftWing, this.rightWing)



        this.objects = [this.head, this.body, this.beak, this.eyes, this.backFeathers, this.wings]

        /* Inicializaçao de variaveis */
        this.scaleFactor = 1;
        this.speedFactor = 1;

        this.movementState = 'freeRoam' //estado de movimento utilizados para apanhar/largar o ramo: freeroam, goingDown, goingUp
        this.hasStick = false

        this.defaultHeight = 8;
        this.floorHeight = 5;
        this.pos = [0, this.defaultHeight, 0]

        //velocidades
        this.vertSpeed = 3;
        this.speed = 3;
        this.minSpeed = 2
        this.birdAngle = 0
        this.turnRate = 1

        //velocidade das asas
        this.wingVelocity = 5
        this.wingAngle = 0
        this.wingDir = 1

        //abanar do passaro
        this.wobleAngVel = Math.PI / 1024
        this.wobleAng = 0
        this.wobleDir = -1
        this.wingAngle =0

        this.sticks = sticks
        this.nest = nest
    }

    update(t) {
        // Para o caso de nao estar definido
        if (this.lastTime == undefined)
            return this.lastTime = -1;
        // Colocado a -1 pq o primeiro update atrasa muito
        if (this.lastTime == -1)
            return this.lastTime = t;
        // Calcula o tempo que passou (segundos)
        let diff = (t - this.lastTime) / 1000.0;
        this.lastTime = t;

        this.updateSpeed(); //atualizacao dos parametros relacionados com velocidade
        this.updateWingAngle(diff) //atualizacao do batimento das asas
        this.updateBirdWoble(diff) // atualizacao de abanamento do passaro
        this.updateHeight(t / 1000, diff); // atualiza a altura

        //atualizar posicao do passaro com base na velocidade
        this.pos[0] += Math.sin(this.birdAngle) * this.speed * diff * this.speedFactor; 
        this.pos[2] += Math.cos(this.birdAngle) * this.speed * diff * this.speedFactor;

        // coordenadas esfericas (posicao do bico-utilizado para sincronizar posicao de um ramo apanhado)
        this.beakAngle = Math.sin(this.wobleAng / 20) / 5 + this.verticalBeakAngle - Math.PI / 8
        let radius = this.scaleFactor * 1.15;
        this.beakPos = [this.pos[0] + Math.sin(this.birdAngle) * Math.cos(this.beakAngle) * radius,  
                        this.pos[1] - Math.sin(this.beakAngle) * radius,
                        this.pos[2] + Math.cos(this.birdAngle) * Math.cos(this.beakAngle) * radius];
    }

    changeHeight(v) { //mudar a posicao vertical
        this.pos[1] += v;
    }

    turn(v) { //mudanca do angulo do passaro
        this.birdAngle += v * this.speedFactor;
    }

    accelerate(v) { //aumento / diminuicao de velocidade
        this.speed = Math.max(this.minSpeed, this.speed + v) //velocidade minima , para nao ficar parado no ar / nao andar para tras
    }

    resetPos() { //reset de posicao 
        this.pos = [0, this.defaultHeight, 0]
        this.speed = 3;
        this.birdAngle = 0;
    }

    updateSpeed() {
        this.wobleAngVel = 15 * Math.PI * this.speedFactor //velocidade de abanamento do passaro (nao depende da velocidade)
        this.wingVelocity = 25 * this.speedFactor * this.speed; //velocidade das asas (depende da velocidade)
    }

    updateBirdWoble(diff) { //abanamento do passaro

        if (this.movementState == 'freeRoam') {
            this.wobleAng += this.wobleAngVel * diff;
            this.setAngle(Math.sin(this.wobleAng / 20) / 5, null, null) //atualizacao do angulo
        }

    }

    updateHeight(t, diff) {
        switch (this.movementState) {
            case 'freeRoam':
                // Oscilacao do passaro
                // Cada oscilacao demora 1 segundo
                // O parametro t e passado em segundos                
                this.pos[1] = (Math.sin(t * 2 * Math.PI) / 4 + this.defaultHeight)
                break;
            case 'goingDown':
                // Desce (3 unidades por segundo)
                this.changeHeight(-this.vertSpeed * diff);
                break;
            case 'goingUp':
                // Sobe (3 unidades por segundo)
                this.changeHeight(this.vertSpeed * diff);
                break;    
        }
    }

    updateWingAngle(diff) { //batimento das asas

        if (this.movementState != 'goingDown') {
            this.wingAngle += Math.min(this.wingVelocity * diff, 20) //guarda o angulo atual
            
            this.rightWingFoldR.angle +=  Math.sin(this.wingAngle / 20) / 1.5 - this.rightWing.zAngle;
            this.leftWingFoldR.angle += - Math.sin(this.wingAngle / 20) / 1.5 - this.leftWing.zAngle;

            this.rightWing.setAngle(0, 0, Math.sin(this.wingAngle / 20) / 1.5)
            this.leftWing.setAngle(0, 0, -Math.sin(this.wingAngle / 20) / 1.5)
        }

    }

    checkKeys() {
        if (this.scene.gui.isKeyPressed("KeyA"))
            this.turn(0.05)
        if (this.scene.gui.isKeyPressed("KeyD"))
            this.turn(-0.05)
        switch (this.movementState) {
            case 'freeRoam': { //em freeRoaming é possivel mudar a velocidade / fazer reset e iniciar a descida
                if (this.scene.gui.isKeyPressed("KeyW"))
                    this.accelerate(0.15)
                if (this.scene.gui.isKeyPressed("KeyS"))
                    this.accelerate(-0.15)
                if (this.scene.gui.isKeyPressed("KeyR"))
                    this.resetPos()
                if (this.scene.gui.isKeyPressed("KeyP"))
                    this.switchToDown() //mudar de estado
                break
            }

            case 'goingDown': {     //fase de descida
                if (this.scene.gui.isKeyPressed("Space")) {    //cancelar a descida indo logo para a fase de subida
                    this.switchToUp() //mudar de estado 
                    break
                }
                if (this.pos[1] <= this.floorHeight) { //caso ja esteja no chao , verificar se toucou no passaro / ninho e mudar de fase
                    if (this.hasStick) {   //caso tenha o ramo, verifica se colidae com o ninhi
                        if (this.nest.checkColision(this)) {
                            this.hasStick = false   //se colidir deixa de ter o ramo
                            this.pickedStick.land() //ramo aterra
                        }
                    }
                    else { //caso nao tenha ramo , verifica se colidiu com algum ramo
                        var sticksArray = this.sticks.getObjects()
                        for (let i = 0, length = sticksArray.length; i < length; i++) { //verificar no array de ramos se colidiu
                            if (sticksArray[i].checkColision(this)) {
                                this.hasStick = true    //atualiza estado caso tenha colidido
                                this.pickedStick = sticksArray[i]   //ramo com que foi colidido é guardado
                                break
                            }
                        }
                    }
                    //mudar de fase
                    this.switchToUp(); 
                    break
                }

                //caso nao esteja no chao ainda, anda mais para baixo
                break
            }
            case 'goingUp': {
                if (this.pos[1] >= this.defaultHeight) //caso ja tenha chegado á altura suposta , muda de estado 
                    this.switchToFree()
                break
            }
        }

    }

    switchToDown() {
        let vertAngle = Math.atan(this.vertSpeed / this.speed) / 2; //calculo do angulo de aterrajem , que relaciona a velocidade horizontal com vertical
        this.verticalBeakAngle = vertAngle; //atualizacao do angulo vertical do bico para ser utilizado na posicao do bico
        this.moveAngle(vertAngle, 0, 0); //atualizacao do angulo passaro
        this.movementState = 'goingDown'; //mudanca de estado
    }

    switchToUp() {
        let vertAngle = Math.atan(this.vertSpeed / this.speed) / 2
        this.verticalBeakAngle = -vertAngle
        this.moveAngle(-2 * vertAngle, 0, 0)
        this.movementState = 'goingUp'
    }

    switchToFree() {
        let vertAngle = Math.atan(this.vertSpeed / this.speed) / 2
        this.verticalBeakAngle = 0
        this.moveAngle(vertAngle, 0, 0)
        this.movementState = 'freeRoam'
    }

    setFeathersTexture(texture) { //textura das penas
        this.wings.setTexture(texture)
        this.backFeathers.setTexture(texture)
        this.body.setTexture(texture)
        this.head.setTexture(texture)
    }

    setEyesTexture(texture) { //textura dos olhos
        this.eyes.setTexture(texture)
    }
    
    setBeakTexture(texture) { //textura do bico
        this.beak.setTexture(texture)
    }

    display() {
        this.setPos(this.pos[0], this.pos[1], this.pos[2]);
        this.setAngle(null, this.birdAngle, null)                
        this.setScale(0.1 * this.scaleFactor, 0.1 * this.scaleFactor, 0.1 * this.scaleFactor)
        super.display();
    }
}