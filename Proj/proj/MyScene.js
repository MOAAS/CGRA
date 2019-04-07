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
        this.initTextures();
        
        this.axis = new CGFaxis(this);
        this.wind = new Vector2D(1,1);
        this.setUpdatePeriod(10);
        this.initObjects();

        //Objects connected to MyInterface
        this.scaleFactor = 0.2;
        this.displayAxis = false;
        this.objectComplexity = 0.5;
        this.enableTex = true;
        this.enableSkybox = true;
        this.selectedTime = 2;
        this.timeIDs = { 'Day': 0 , 'Night': 1, 'None': 2};
        this.updateTimeOfDay();
    }
    initLights() {
        this.illumination = 1.0;
        this.setGlobalAmbientLight(this.illumination, this.illumination, this.illumination, 1.0);

        this.lights[0].setPosition(10, 30, 30, 1.0);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].setSpecular(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].setVisible(true);
        this.lights[0].update();

        // Dia

        this.lights[1].setPosition(0.0, 40, 0.0, 1.0);
        this.lights[1].setDiffuse(1.0, 0.85, 0.6, 1.0); // cor quentinha
        this.lights[1].setSpecular(1.0, 0.85, 0.3, 1.0);
        this.lights[1].disable();
        this.lights[1].setVisible(false);
        this.lights[1].update();
        this.lights[1].setConstantAttenuation(1);
        this.lights[1].setLinearAttenuation(0);
        this.lights[1].setQuadraticAttenuation(0);

        // Noite

        this.lights[2].setPosition(0.0, 40, 0.0, 1.0);
        this.lights[2].setDiffuse(0.2, 0.4, 1, 1.0); // cor fresqeuinha
        this.lights[2].setSpecular(0.2, 0.4, 1, 1.0);
        this.lights[2].disable();
        this.lights[2].setVisible(false);
        this.lights[2].update();
        this.lights[2].setConstantAttenuation(1);
        this.lights[2].setLinearAttenuation(0.01);
        this.lights[2].setQuadraticAttenuation(0);

        // Fogueira (noite)

        this.lights[3].setPosition(0.0, 3, 20, 1.0); // mudar
        this.lights[3].setDiffuse(1.0, 0.85, 0, 1.0); // cor quentinha
        this.lights[3].setSpecular(1.0, 0.85, 0, 1.0);
        this.lights[3].disable();
        this.lights[3].setVisible(false);
        this.lights[3].update();
        this.lights[3].setConstantAttenuation(1);
        this.lights[3].setLinearAttenuation(0.2);
        this.lights[3].setQuadraticAttenuation(0);
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    initObjects() {
        this.treeGroup = new MyTreeGroupPatch(this, 6, 1.5, 6, 4, this.woodTex, this.leaves);        
        this.treeGroup.translate(-15, 0, -40)

        this.treeRow1 = new MyTreeRowPatch(this, 9, 2, 8, 5, this.woodTex, this.leaves); 
        this.treeRow2 = new MyTreeRowPatch(this, 9, 2, 8, 5, this.woodTex, this.leaves); 
        this.treeRow3 = new MyTreeRowPatch(this, 9, 2, 8, 5, this.woodTex, this.leaves); 
        this.treeRow1.rotate(Math.PI/2, 0, 1, 0)
        this.treeRow2.rotate(Math.PI/2, 0, 1, 0)
        this.treeRow3.rotate(Math.PI/2, 0, 1, 0)
        this.treeRow1.translate(-30, 0, 40)
        this.treeRow2.translate(-45, 0, 40)
        this.treeRow3.translate(-60, 0, 40)

        this.trees = new ObjectGroup(this)
        this.trees.addObjects(this.treeGroup, this.treeRow1, this.treeRow2, this.treeRow3)

        this.house = new MyHouse(this, 12, 9, 8, this.houseSide, this.houseRoof, this.pillarTexture)
        this.house.setDoorTexture(this.houseFront)
        this.house.setBackTexture(this.houseBack)
        this.house.setFloorTexture(this.houseFloor)

        
        this.bigHill = new MyVoxelHill(this, 5)
        this.bigHill.scale(2,2,2);
        this.bigHill.translate(25, 0, 30)
        
        this.smallHill = new MyVoxelHill(this, 4)
        this.smallHill.scale(1.5,1.5,1.5);
        this.smallHill.translate(-15, 0, 20)
        
        this.hills = new ObjectGroup(this)
        this.hills.addObjects(this.bigHill, this.smallHill)
        this.hills.setTextureFilter(this.gl.NEAREST)
        this.hills.setTextures(this.mineTop, this.mineBot, this.mineSide)

        this.swimmingPool = new MySwimmingPool(this, this.waterTexture, this.poolTexture, this.poolRampTexture)
        this.swimmingPool.translate(20, 0, -5)

        this.campfire = new MyFireplace(this,this.woodTex,this.fireTex,this.poolTexture);
        this.campfire.translate(0, 0, 20)
        this.campfire.enableSmoke(0, 3, 20);

        this.person1 = new MyPerson(this, this.skinTex, this.faceTex, this.hairTex, this.shirtTex, this.pantsTex, this.shoeTex);
        this.person2 = new MyPerson(this, this.skinTex, this.faceTex, this.hairTex, this.shirtTex, this.pantsTex, this.shoeTex);
        this.child = new MyPerson(this, this.skinTex, this.faceTex, this.hairTex, this.shirtTex, this.pantsTex, this.shoeTex);

        this.person1.rotate(1, 0, 1, 0)
        this.person2.rotate(3, 0, 1, 0)
        this.child.rotate(4, 0, 1, 0)

        this.person1.translate(0, 0, 10)
        this.person2.translate(-5, 0, 22)
        this.child.scale(0.5, 0.6, 0.5)
        this.child.translate(20, 0, 8)
        
        this.people = new ObjectGroup(this)
        this.people.addObjects(this.person1, this.person2, this.child)

        this.road1 = new MyRoad(this, 8, false, this.pillarTexture);
        this.road2 = new MyRoad(this, 8, true, this.pillarTexture);

        this.road1.translate(30, 0, -30);
        this.road2.translate(40, 0, -40);

        this.car0 = new MyCar(this, this.road1);
        this.car1 = new MyCar(this, this.road1);
        this.car2 = new MyCar(this, this.road1);
        this.car3 = new MyCar(this, this.road1);
        this.car4 = new MyCar(this, this.road1);
        this.car5 = new MyCar(this, this.road2);
        this.car6 = new MyCar(this, this.road2);
        this.car7 = new MyCar(this, this.road2);
        this.car8 = new MyCar(this, this.road2);
        this.car9 = new MyCar(this, this.road2);

        this.car0.translate(30, 0, -30);
        this.car1.translate(30, 0, -30);
        this.car2.translate(30, 0, -30);
        this.car3.translate(30, 0, -30);
        this.car4.translate(30, 0, -30);

        this.car5.translate(40, 0, -40);
        this.car6.translate(40, 0, -40);
        this.car7.translate(40, 0, -40);
        this.car8.translate(40, 0, -40);
        this.car9.translate(40, 0, -40);
        
        this.car0.movePos(-60, 0, -60);
        this.car1.movePos(-30, 0, -30);
        this.car2.movePos(0, 0, 0);
        this.car3.movePos(30, 0, 30);
        this.car4.movePos(60, 0, 60);

        this.car5.movePos(-60, 0, -60);
        this.car6.movePos(-30, 0, -30);
        this.car7.movePos(0, 0, 0);
        this.car8.movePos(30, 0, 30);
        this.car9.movePos(60, 0, 60);

        this.roads = new ObjectGroup(this);
        this.cars = new ObjectGroup(this);

        this.roads.addObjects(this.road1, this.road2);
        this.cars.addObjects(this.car0, this.car1, this.car2, this.car3, this.car4, this.car5, this.car6,this.car7,this.car8, this.car9);

        this.windvane = new MyWindVane(this, this.pillarTexture);
        this.windvane.movePos(-15, 0, 0)

        this.soil = new MySquare(this)
        this.soil.rotate(Math.PI / 2, 1, 0, 0)
        this.soil.scale(200, 1, 200) 
        this.soil.setMaterial(new MyCGFappearance(this, 0.5, 1, 0, 1))  
        this.soil.setTexture(this.mineTop)
        this.soil.setTextureWrap('REPEAT', 'REPEAT');
        this.soil.scaleTexCoords(150, 150);

        this.football = new MySphere(this,20,20,0.5);
        this.football.setMaterial(new MyCGFappearance(this, 0.5, 1, 0, 1));
        this.football.setTexture(this.footballTexture)
        this.football.translate(22, 1, 8)

        this.skyBoxDay = new MySkyBox(this);
        this.skyBoxDay.setMaterial(new MyCGFappearance(this, 1,1,1,1));
        this.skyBoxDay.setTexture(this.skyBoxDayTex);
        this.skyBoxDay.scale(200,200,200);
        this.skyBoxDay.translate(0, 25, 0);
        
        this.skyBoxNight = new MySkyBox(this);
        this.skyBoxNight.setMaterial(new MyCGFappearance(this, 1,1,1,1));
        this.skyBoxNight.setTexture(this.skyBoxNightTex);
        this.skyBoxNight.scale(200,200,200);
        this.skyBoxNight.translate(0, 25, 0);

        this.objects = [this.house, this.trees, this.soil, this.hills, this.swimmingPool, this.campfire, this.people, this.football, this.cars, this.roads, this.windvane]
        //this.objects = [this.windvane]
       // this.objects = [this.campfire]
    }
    initTextures() {
        this.testeTex = new CGFtexture(this, 'images/teeeste.png');
        this.joyTexture = new CGFtexture(this, 'images/emoji.jpg');
        this.mineTop = new CGFtexture(this, 'images/mineTop.png')
		this.mineSide = new CGFtexture(this, 'images/mineSide.png')
		this.mineBot = new CGFtexture(this, 'images/mineBottom.png')
		this.woodTex = new CGFtexture(this, 'images/trunk.jpg')
        this.leaves = new CGFtexture(this, 'images/leaf.jpg')
        this.fireTex = new CGFtexture(this, 'images/fire.jpg')

		this.houseFront = new CGFtexture(this, 'images/houseFront.png')
		this.houseSide = new CGFtexture(this, 'images/houseSide.png')
		this.houseBack = new CGFtexture(this, 'images/houseBack.png')
		this.houseRoof = new CGFtexture(this, 'images/houseRoof.jpg')
		this.houseFloor = new CGFtexture(this, 'images/houseBot.png')
		this.pillarTexture = new CGFtexture(this, 'images/stone.jpg')

        this.skinTex = new CGFtexture(this, 'images/skin.png')
		this.faceTex = new CGFtexture(this, 'images/face.png')
		this.hairTex = new CGFtexture(this, 'images/hair.jpg')
        this.shirtTex = new CGFtexture(this, 'images/shirt.jpg')
        this.pantsTex = new CGFtexture(this, 'images/pants.jpg') 
        this.shoeTex = new CGFtexture(this, 'images/shoe.jpg') 


		this.poolTexture = new CGFtexture(this, 'images/poolRock.png')
		this.waterTexture = new CGFtexture(this, 'images/water.png')
        this.poolRampTexture = new CGFtexture(this, 'images/plastic.png')

        this.footballTexture = new CGFtexture(this, 'images/football.jpg')
        
        this.skyBoxDayTex = new CGFtexture(this, 'images/skybox.jpg')
        this.skyBoxNightTex= new CGFtexture(this, 'images/nightbox.jpg')

    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    updateObjectComplexity() {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].updateComplexity(this.objectComplexity);
        }
    }

    updateTimeOfDay() {
        if (this.selectedTime == this.timeIDs['Day']) {
            this.lights[0].disable();
            this.lights[1].enable();
            this.lights[2].disable();
            this.lights[3].disable();
            this.campfire.disableFire();
            this.cubemap = this.skyBoxDay;
        }
        else if (this.selectedTime == this.timeIDs['Night']) {
            this.lights[0].disable();
            this.lights[1].disable();
            this.lights[2].enable();
            this.lights[3].enable();
            this.campfire.enableFire();
            this.cubemap = this.skyBoxNight;
        }
        else if (this.selectedTime == this.timeIDs['None']) {
            this.lights[0].enable();
            this.lights[1].disable();
            this.lights[2].disable();
            this.lights[3].disable();
            this.campfire.disableFire();
            this.cubemap = this.skyBoxDay;
        }

        
        else console.log("Invalid time!");
        

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
        this.setGlobalAmbientLight(this.illumination, this.illumination, this.illumination, 1.0);
        
        this.enableTextures(this.enableTex);

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        var scale = [this.scaleFactor, 0.0, 0.0, 0.0,
            0.0, this.scaleFactor, 0.0, 0.0,
            0.0, 0.0, this.scaleFactor, 0.0,
            0.0, 0.0, 0.0, 1.0];
        this.multMatrix(scale);

        this.lights[0].update();
        this.lights[1].update();
        this.lights[2].update();
        this.lights[3].update();


        // ---- BEGIN Primitive drawing section

        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].display();
        }

        if (this.enableSkybox)
            this.cubemap.display();

        // ---- END Primitive drawing section
    }

    update() {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].update();
        }
    }
}
