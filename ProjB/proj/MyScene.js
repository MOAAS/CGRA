/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);
        this.setUpdatePeriod(50);

        this.initTextures();
        this.initObjects();

        //Objects connected to MyInterface
        this.enableTex = true;
        this.enableSkybox = true;
        this.scaleFactor = 1;
        this.speedFactor = 1;
        this.firstPerson = false;

        this.selectedView = 1;
        this.viewList = {
            'First Person': 0,
			'Second Person': 1,
			'Third Person': 2
		}

        // Shaders
        this.terrainShader = new CGFshader(this.gl, "shaders/terrain.vert", "shaders/terrain.frag");
        this.terrainShader.setUniformsValues({ uSampler2: 1 });
        this.terrainShader.setUniformsValues({ uSampler3: 2 });
    }

    initTextures() {
        this.terrainTex = new CGFtexture(this, 'images/terrain.jpg');
        this.terrainMap = new CGFtexture(this, 'images/heightmap.jpg');
        this.terrainAlt = new CGFtexture(this, 'images/altimetry.png');

        this.houseFront = new CGFtexture(this, 'images/houseFront.png')
		this.houseSide = new CGFtexture(this, 'images/houseSide.png')
		this.houseBack = new CGFtexture(this, 'images/houseBack.png')
		this.houseRoof = new CGFtexture(this, 'images/houseRoof.jpg')
		this.houseFloor = new CGFtexture(this, 'images/houseBot.png')
		this.pillarTexture = new CGFtexture(this, 'images/stone.jpg')
    }

    initObjects() {
        this.axis = new CGFaxis(this);

        this.skybox = new MySkyBox(this);
        this.skybox.setMaterial(new MyCGFappearance(this, 1,1,1,1));
        this.skybox.setTexture(new CGFtexture(this, 'images/skybox.jpg'));
        this.skybox.scale(200,200,200);

        this.bird = new MyBird(this)

        this.house = new MyHouse(this, 2.5, 2, 3, 0.3);
        this.house.setWallTexture(this.houseSide)
        this.house.setDoorTexture(this.houseFront)
        this.house.setBackTexture(this.houseBack)
        this.house.setFloorTexture(this.houseFloor)
        this.house.setRoofTexture(this.houseRoof)
        this.house.setPillarTexture(this.pillarTexture)

        this.house.setPos(-3, 3, 5)

        this.terrain = new MyTerrain(this, 60, this.terrainTex, this.terrainMap, this.terrainAlt)

        this.nest = new MyNest(this)

        this.objects = [this.bird, this.house, this.terrain];
        
        this.lightning = new MyLightning(this);
        this.tree1 = new MyLSPlant(this);
        this.tree2 = new MyLSPlant(this);
        this.tree3 = new MyLSPlant(this);

        this.axiom = "X";
        this.tree1.generate(this.axiom);
        this.tree2.generate(this.axiom);
        this.tree3.generate(this.axiom);
        this.lightning.generate(this.axiom);

        //this.objects = [this.nest]
    }

    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setAmbient(1.0, 1.0, 1.0, 1.0);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].setSpecular(1, 1, 1, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }

    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.0, 0.0, 0.0, 1.0);
        this.setShininess(10.0);
    }

    update(t){
        this.bird.update()

        if (this.selectedView == 0) {
            let cameraPos = [this.bird.pos[0], this.bird.pos[1] - 1, this.bird.pos[2]]
            this.camera.fov = 1.2
            this.camera.setPosition(vec3.fromValues(cameraPos[0], cameraPos[1], cameraPos[2]))
            this.camera.setTarget(vec3.fromValues(cameraPos[0] + Math.sin(this.bird.birdAngle), cameraPos[1], cameraPos[2] + Math.cos(this.bird.birdAngle)));
        }

        else if (this.selectedView == 2) {
            this.camera.fov = 1.2
            let cameraPos = [this.bird.pos[0] - 8 * Math.sin(this.bird.birdAngle), this.bird.pos[1] + 2, this.bird.pos[2] - 8 * Math.cos(this.bird.birdAngle)]
            this.camera.setPosition(vec3.fromValues(cameraPos[0], cameraPos[1], cameraPos[2]))
            this.camera.setTarget(vec3.fromValues(cameraPos[0] + Math.sin(this.bird.birdAngle), cameraPos[1], cameraPos[2] + Math.cos(this.bird.birdAngle)));
        }

        this.checkKeys();
    }

    updateBirdSpeed() {
        this.bird.speedFactor = this.speedFactor;
        this.bird.scaleFactor = this.scaleFactor;
        this.bird.onSpeedUpdate();
    }

    updateCamera() {
        if (this.selectedView == 1)
            this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
    }

    checkKeys()  {        
        // Check for key codes e.g. in ​https://keycode.info/
        if (this.gui.isKeyPressed("KeyW"))
            this.bird.accelerate(0.05);
        if (this.gui.isKeyPressed("KeyS"))
            this.bird.accelerate(-0.05);
        if (this.gui.isKeyPressed("KeyA"))
            this.bird.turn(0.12);
        if (this.gui.isKeyPressed("KeyD"))
            this.bird.turn(-0.12);
        if (this.gui.isKeyPressed("KeyR"))
            this.bird.resetPos();
        if (this.gui.isKeyPressed("ShiftLeft"))
            this.bird.changeHeight(-0.4);
        if (this.gui.isKeyPressed("Space"))
            this.bird.changeHeight(0.6);
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        this.axis.display();

        // Textures
        this.enableTextures(this.enableTex);
        
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].display();
        }

       //

        this.pushMatrix()
        this.translate(0, 10, 0);       
        this.lightning.display();
        this.popMatrix();

        this.pushMatrix()

        this.translate(15, 0, 8);
        this.tree1.display();

        this.translate(-25, 0, -15);
        this.tree2.display();

        this.translate(21, 0, -5);
        this.tree3.display();

        this.popMatrix();
            
        // ---- END Primitive drawing section
    }
}