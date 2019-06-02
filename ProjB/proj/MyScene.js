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
        this.setGlobalAmbientLight(0.8, 0.8, 0.8, 1.0);

        //Objects connected to MyInterface
        this.sceneScale = 1;
        this.enableTex = true;
        this.enableSkybox = true;
        this.scaleFactor = 1;
        this.speedFactor = 1;
        this.firstPerson = false;
        this.enableSound = false;
        this.enableRings = false;
        this.enableLight = true;
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

        // Objects and textures
        this.initTextures();
        this.initObjects();
        this.setUpdatePeriod(10);
    }

    initTextures() {
        // Textura da skybox
        this.skyTex = new CGFtexture(this, 'images/skybox.jpg');

        // Texturas do terreno: imagem, heightmap, gradiente
        this.terrainTex = new CGFtexture(this, 'images/terrain.jpg');
        this.terrainMap = new CGFtexture(this, 'images/heightmap.jpg');
        this.terrainAlt = new CGFtexture(this, 'images/altimetry.png');

        // Texturas da casa
        this.houseFront = new CGFtexture(this, 'images/houseFront.png')
        this.houseSide = new CGFtexture(this, 'images/houseSide.png')
        this.houseBack = new CGFtexture(this, 'images/houseBack.png')
        this.houseRoof = new CGFtexture(this, 'images/houseRoof.jpg')
        this.houseFloor = new CGFtexture(this, 'images/houseBot.png')
        this.pillarTexture = new CGFtexture(this, 'images/stone.jpg')

        // Texturas do passaro
        this.featherTexture = new CGFtexture(this, 'images/feather.jpg')
        this.beakTexture = new CGFtexture(this,'images/beak.jpg')
        this.eyeTexture = new CGFtexture(this,'images/eye.jpg')

        // Texturas de arvores e ramos
        this.branchTex = new CGFtexture(this, 'images/branch.jpg')
        this.branchTex2 = new CGFtexture(this, 'images/branch2.jpg')
        this.leafTex = new CGFtexture(this, 'images/leaf.jpg')

        // Textura do ninho
        this.nestTex = new CGFtexture(this, 'images/nest.png');

        // Texturas da pessoa
        this.skinTex = new CGFtexture(this, 'images/skin.png')
		this.faceTex = new CGFtexture(this, 'images/face.png')
		this.hairTex = new CGFtexture(this, 'images/hair.jpg')
        this.shirtTex = new CGFtexture(this, 'images/shirt.jpg')
        this.pantsTex = new CGFtexture(this, 'images/pants.jpg') 
        this.shoeTex = new CGFtexture(this, 'images/shoe.jpg')
    }

    initObjects() {
        this.axis = new CGFaxis(this);

        // Cria a skybox
        this.skybox = new MySkyBox(this);
        this.skybox.setMaterial(new MyCGFappearance(this, 0.4, 0.6, 0, 10));
        this.skybox.setTexture(this.skyTex);
        this.skybox.scale(60, 60, 60);
        this.skybox.translate(0, 30, 0);

        // Cria o nest
        this.nest = new MyNest(this,-4,-8.5)
        this.nest.setTexture(this.nestTex)

        // Cria os galhos
        this.sticks = new ObjectGroup(this)
        this.stickRandomizer(8);

        // Cria o passaro
        this.bird = new MyBird(this, this.sticks, this.nest)
        this.bird.setFeathersTexture(this.featherTexture)
        this.bird.setBeakTexture(this.beakTexture)
        this.bird.setEyesTexture(this.eyeTexture)

        // Cria a Casa
        this.house = new MyHouse(this, 2.5, 2, 3, 0.3)
        this.house.setWallTexture(this.houseSide)
        this.house.setDoorTexture(this.houseFront)
        this.house.setBackTexture(this.houseBack)
        this.house.setFloorTexture(this.houseFloor)
        this.house.setRoofTexture(this.houseRoof)
        this.house.setPillarTexture(this.pillarTexture)
        this.house.setPos(-3, 3.2, 5)

        // Cria a pessoa e o spinner
        this.person = new MyPerson(this, this.skinTex, this.faceTex, this.hairTex, this.shirtTex, this.pantsTex, this.shoeTex);
        this.person.setScale(0.3, 0.3, 0.3);
        this.spinner = new MySpinner(this, -3, 3.8, 9);

        // Cria o conjunto de aneis (8 aneis de largura 2)
        // Parametros seguintes correspondem aos valores que as coordenadas podem tomar
        // X : [-15, 15], Y : [5, 9], Z : [-15, 15]
        this.rings = new MyRingList(this, 8, 2, -15, 15, 5, 9, -15, 15);

        // Cria o terreno
        this.terrain = new MyTerrain(this, 60, this.terrainTex, this.terrainMap, this.terrainAlt)


        // Cria os objetos gerados procedimentalmente
        this.axiom = "BBX";

        // Cria o trovao, passando valores que coordenadas podem tomar
        // X : [-15, 15], Y : [25, 30], Z : [-15, 15]
        this.lightning = new MyLightning(this, this.axiom, -15, 15, 25, 30, -15, 15, this.lights[1]);
        this.lights[1] = this.lightning.light;

        // Cria as arvores, passando a posicao x, y, z
        this.tree1 = new MyLSPlant(this, this.branchTex, this.leafTex, 15, 4, 8);
        this.tree2 = new MyLSPlant(this, this.branchTex, this.leafTex, -18, 4, 6);
        this.tree3 = new MyLSPlant(this, this.branchTex, this.leafTex, 12, 4, -6)
        this.tree1.generate(this.axiom);
        this.tree2.generate(this.axiom);
        this.tree3.generate(this.axiom);

        // Inicializa o vetor de objetos
        this.objects = [this.bird, this.house, this.terrain, this.sticks, this.nest, this.lightning, this.person, this.spinner, this.rings, this.tree1, this.tree2, this.tree3];
    }

    stickRandomizer(numSticks) {
        for (let i = 0; i < numSticks; i++) {
            let x = Math.random() * 18         //x entre  0   a  18
            let z = Math.random() * 18.5 - 6.5 //z entre -6,5 a  11
            if (!(x < 8 && z < 2)) {    //impedir sticks na area do lago(x[0,8],z[-6.5,2])
                this.stick = new MyStick(this, x, z)
                this.stick.setBranchTexture(this.branchTex2)
                this.stick.setLeafTexture(this.leafTex) 
                this.stick.setMaterial(new MyCGFappearance(this, 0.2, 0.6, 0.2))
                this.sticks.addObjects(this.stick)
            }
            else i--;
        }
    }

    initLights() {
        // Luz normal
        this.lights[0].setPosition(0, 25, 0, 1);
        this.lights[0].setDiffuse(1.0, 0.85, 0.6, 1.0); // cor quentinha
        this.lights[0].setSpecular(1.0, 0.85, 0.6, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
        this.lights[0].setConstantAttenuation(1);
        this.lights[0].setLinearAttenuation(0);
        this.lights[0].setQuadraticAttenuation(0);

        // Luz de relampago
        this.lights[1].setDiffuse(0.8, 1.0, 1.0, 1.0); // relampago
        this.lights[1].setSpecular(0.8, 1.0, 1.0, 1.0);
        this.lights[1].disable();
        this.lights[1].setVisible(false);
        this.lights[1].update();
        this.lights[1].setConstantAttenuation(1);
        this.lights[1].setLinearAttenuation(0);
        this.lights[1].setQuadraticAttenuation(0);
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

    playSound(sound) {
        if (this.enableSound)
            sound.play();
        else sound.pause();
    }

    update(t) {
        this.checkKeys(t);
        this.bird.update(t)
        this.sticks.update()
        this.lightning.update(t)
        this.spinner.update(t, this.person);
        this.rings.update(this.bird.pos[0], this.bird.pos[1], this.bird.pos[2]);

        // Camara first person: poe a camara na posicao do passaro
        if (this.selectedView == 0) {
            let cameraPos = [this.bird.pos[0], this.bird.pos[1] - 1, this.bird.pos[2]]
            this.camera.fov = 1.2
            this.camera.setPosition(vec3.fromValues(cameraPos[0], cameraPos[1], cameraPos[2]))
            this.camera.setTarget(vec3.fromValues(cameraPos[0] + Math.sin(this.bird.birdAngle), cameraPos[1], cameraPos[2] + Math.cos(this.bird.birdAngle)));
        }

        // Camara third person: poe a camara na posicao do passaro um bocadinho atras e acima
        else if (this.selectedView == 2) {
            this.camera.fov = 1.2
            let cameraPos = [this.bird.pos[0] - 8 * Math.sin(this.bird.birdAngle), this.bird.pos[1] + 2, this.bird.pos[2] - 8 * Math.cos(this.bird.birdAngle)]
            this.camera.setPosition(vec3.fromValues(cameraPos[0], cameraPos[1], cameraPos[2]))
            this.camera.setTarget(vec3.fromValues(cameraPos[0] + Math.sin(this.bird.birdAngle), cameraPos[1], cameraPos[2] + Math.cos(this.bird.birdAngle)));
        }

    }

    updateBirdFactors() {
        // Atualiza os valores speed/scale factor de bird
        this.bird.speedFactor = this.speedFactor;
        this.bird.scaleFactor = this.scaleFactor;
    }

    updateTexEnable() {
        this.enableTextures(this.enableTex);
    }

    updateRings() {
        if (this.enableRings) 
            this.rings.reset();
        else this.rings.clear();
    }

    updateCamera() {
        if (this.selectedView == 1)
            this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
    }

    checkKeys(t) {
        // Check for key codes e.g. in ​https://keycode.info/
        this.bird.checkKeys();

        // Controlos do spinner
        if (this.gui.isKeyPressed("ControlRight")) 
            this.spinner.lift();
        if (this.gui.isKeyPressed("ShiftRight"))
            this.spinner.descend();
        if (this.gui.isKeyPressed("ArrowUp"))
            this.spinner.front();
        if (this.gui.isKeyPressed("ArrowLeft"))
            this.spinner.left();        
        if (this.gui.isKeyPressed("ArrowDown"))
            this.spinner.back();
        if (this.gui.isKeyPressed("ArrowRight"))
            this.spinner.right();

        // Ativa o trovao
        if (this.gui.isKeyPressed("KeyL"))
            this.lightning.startAnimation(t);
        
        // Reset aos aneis
        if (this.gui.isKeyPressed("KeyR")) {
            if (this.enableRings)
                this.rings.reset();
        }
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

        // Update light
        this.lights[0].update();
        this.lights[1].update();

        this.scale(this.sceneScale, this.sceneScale, this.sceneScale);

        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].display();
        }

        if (this.enableSkybox)
            this.skybox.display();

        // ---- END Primitive drawing section
    }
}