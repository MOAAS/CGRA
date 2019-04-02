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
        this.initObjects();

        //Objects connected to MyInterface
        this.scaleFactor = 0.2;
        this.displayAxis = false;
        this.objectComplexity = 0.5;
        this.enableTex = true;
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

        
        this.bigHill = new MyVoxelHill(this, 7)
        this.bigHill.scale(2,2,2)
        this.bigHill.translate(25, 0, 30)
        
        this.smallHill = new MyVoxelHill(this, 5)
        this.smallHill.scale(1.5, 1.5, 1.5)
        this.smallHill.translate(-15, 0, 20)
        
        this.hills = new ObjectGroup(this)
        this.hills.addObjects(this.bigHill, this.smallHill)
        this.hills.setTextureFilter(this.gl.NEAREST)
        this.hills.setTextures(this.mineTop, this.mineBot, this.mineSide)

        this.swimmingPool = new MySwimmingPool(this, this.waterTexture, this.poolTexture, this.poolRampTexture)
        this.swimmingPool.translate(20, 0, -5)

        this.campfire = new MyFireplace(this,this.woodTex,this.fireTex,this.poolTexture);
        this.campfire.translate(0, 0, 20)

        this.person1 = new MyPerson(this, this.skinTex, this.faceTex, this.hairTex, this.shirtTex, this.pantsTex, this.shoeTex);
        this.person2 = new MyPerson(this, this.skinTex, this.faceTex, this.hairTex, this.shirtTex, this.pantsTex, this.shoeTex);
        this.person3 = new MyPerson(this, this.skinTex, this.faceTex, this.hairTex, this.shirtTex, this.pantsTex, this.shoeTex);

        this.person1.rotate(1, 0, 1, 0)
        this.person2.rotate(3, 0, 1, 0)
        this.person3.rotate(4, 0, 1, 0)

        this.person1.translate(0, 0, 10)
        this.person2.translate(-5, 0, 22)
        this.person3.translate(20, 0, 8)
        
        this.people = new ObjectGroup(this)
        this.people.addObjects(this.person1, this.person2, this.person3)

        this.soil = new MySquare(this)
        this.soil.rotate(Math.PI / 2, 1, 0, 0)
        this.soil.scale(150, 1, 150) 
        this.soil.setMaterial(new MyCGFappearance(this, 0.5, 1, 0, 1))  
        this.soil.setTexture(this.mineTop)
        this.soil.setTextureWrap('REPEAT', 'REPEAT');
        this.soil.scaleTexCoords(150, 150);

        this.cubemapDay = new MyCubemap(this);
        this.cubemapDay.setTextures(this.cubemapDayTop,this.cubemapDayBot,this.cubemapDayFront, this.cubemapDayBack, this.cubemapDayLeft, this.cubemapDayRight);

        this.cubemapNight = new MyCubemap(this);
        this.cubemapNight.setTextures(this.cubemapNightTop,this.cubemapNightBot,this.cubemapNightFront, this.cubemapNightBack, this.cubemapNightLeft, this.cubemapNightRight);

        this.objects = [this.house, this.trees, this.soil, this.hills, this.swimmingPool, this.campfire, this.people]
    }
    initTextures() {
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
        
        this.cubemapDayTop = new CGFtexture(this, 'images/skybox/posy.jpg')
        this.cubemapDayBot = new CGFtexture(this, 'images/skybox/negy.jpg')
        this.cubemapDayFront = new CGFtexture(this, 'images/skybox/posz.jpg')
        this.cubemapDayBack = new CGFtexture(this, 'images/skybox/negz.jpg')
        this.cubemapDayLeft = new CGFtexture(this, 'images/skybox/posx.jpg')
        this.cubemapDayRight = new CGFtexture(this, 'images/skybox/negx.jpg')

        this.cubemapNightTop = new CGFtexture(this, 'images/nightbox/space_up.png')
        this.cubemapNightBot = new CGFtexture(this, 'images/nightbox/space_dn.png')
        this.cubemapNightFront = new CGFtexture(this, 'images/nightbox/space_ft.png')
        this.cubemapNightBack = new CGFtexture(this, 'images/nightbox/space_bk.png')
        this.cubemapNightLeft = new CGFtexture(this, 'images/nightbox/space_lt.png')
        this.cubemapNightRight = new CGFtexture(this, 'images/nightbox/space_rt.png')
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
            this.cubemap = this.cubemapDay;
        }
        else if (this.selectedTime == this.timeIDs['Night']) {
            this.lights[0].disable();
            this.lights[1].disable();
            this.lights[2].enable();
            this.lights[3].enable();
            this.campfire.enableFire();
            this.cubemap = this.cubemapNight;
        }
        else if (this.selectedTime == this.timeIDs['None']) {
            this.lights[0].enable();
            this.lights[1].disable();
            this.lights[2].disable();
            this.lights[3].disable();
            this.campfire.disableFire();
            this.cubemap = this.cubemapDay;
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

        this.cubemap.display();

        // ---- END Primitive drawing section
    }
}
