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
        this.initObjects();

        //Objects connected to MyInterface
        this.scaleFactor = 0.5;
        this.displayAxis = false;
        this.objectComplexity = 0.5;
        this.selectedObject = 0;
        this.enableTex = true;
    }
    initLights() {
        this.illumination = 1.0;
        this.setGlobalAmbientLight(this.illumination, this.illumination, this.illumination, 1.0);

        this.lights[0].setPosition(0, 2, 5, 1.0);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].setSpecular(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].setVisible(true);
        this.lights[0].update();

        console.log(this.lights[0].constant_attenuation)
        console.log(this.lights[0].linear_attenuation)
        console.log(this.lights[0].quadratic_attenuation)

        this.lights[1].setPosition(0.0, -1.0, 2.0, 1.0);
        this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[1].setSpecular(1.0, 1.0, 0.0, 1.0);
        this.lights[1].disable();
        this.lights[1].setVisible(true);
        this.lights[1].update();
    }

    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    initObjects() {
        this.cube1 = new MyUnitCube(this);
        this.cube2 = new MyUnitCube(this);
        this.cube3 = new MyUnitCube(this);

        this.cube1.scale(2,2,2);
        this.cube2.scale(1.5,1.5,1.5);
        this.cube3.scale(1,1,1);
        this.cube1.translate(0,0,0);
        this.cube2.translate(0,1,0);
        this.cube3.translate(0,2,0);

        this.cubeStack = new ObjectGroup(this);
        this.cubeStack.addObjects(this.cube1, this.cube2, this.cube3);
        this.cubeStack.setTextureFilter(this.gl.NEAREST)
        this.cubeStack.setTextures(this.mineTop, this.mineBot, this.mineSide);
        
        this.prism = new MyPrism(this, 8);        
        this.prism.setTexture(this.joyTexture);
        this.prism.translate(0,2.5,0);
        
        this.cilinder = new MyCilinder(this, 25);
        this.cilinder.setTexture(this.joyTexture);
        this.cilinder.scale(2,2,2);
        this.cilinder.translate(0,-2,0);

        this.dankStructure = new ObjectGroup(this);
        this.dankStructure.addObjects(this.cubeStack, this.prism, this.cilinder);
        this.dankStructure.translate(15, 2, 15)
        
        this.treeGroup = new MyTreeGroupPatch(this, 6, 1.5, 4, 3, this.woodTex, this.leaves);        
        this.treeGroup.translate(-5, 0, -30)

        this.treeRow1 = new MyTreeRowPatch(this, 9, 2, 4, 4.5, this.woodTex, this.leaves); 
        this.treeRow2 = new MyTreeRowPatch(this, 9, 2, 4, 4.5, this.woodTex, this.leaves); 
        this.treeRow3 = new MyTreeRowPatch(this, 9, 2, 4, 4.5, this.woodTex, this.leaves); 
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
        this.bigHill.scale(2,2,2)
        this.bigHill.translate(20, 0, 25)
        
        this.smallHill = new MyVoxelHill(this, 4)
        this.smallHill.scale(1.5, 1.5, 1.5)
        this.smallHill.translate(-15, 0, 20)
        
        this.hills = new ObjectGroup(this)
        this.hills.addObjects(this.bigHill, this.smallHill)
        this.hills.setTextureFilter(this.gl.NEAREST)
        this.hills.setTextures(this.mineTop, this.mineBot, this.mineSide)

        this.swimmingPool = new MySwimmingPool(this, this.waterTexture, this.poolTexture, this.poolRampTexture)
        this.swimmingPool.translate(20, 0, -5)
        
        this.soil = new MySquare(this)
        this.soil.rotate(Math.PI / 2, 1, 0, 0)
        this.soil.scale(150, 1, 150) 
        this.soil.setMaterial(new MyCGFappearance(this, 0.8, 1, 1))  
        this.soil.setTexture(this.mineTop)
        this.soil.material.setTextureWrap('REPEAT', 'REPEAT');
        this.soil.scaleTexCoords(150, 150);

        this.objects = [this.dankStructure]
        this.objects = [this.house, this.trees, this.soil, this.hills, this.swimmingPool]

        //this.objectIDs = {'Dank Structure': 0, 'Tree Patch': 1, 'None': 2};
    }
    initTextures() {
        this.joyTexture = new CGFtexture(this, 'images/emoji.jpg');
        this.mineTop = new CGFtexture(this, 'images/mineTop.png')
		this.mineSide = new CGFtexture(this, 'images/mineSide.png')
		this.mineBot = new CGFtexture(this, 'images/mineBottom.png')
		this.woodTex = new CGFtexture(this, 'images/trunk.jpg')
		this.leaves = new CGFtexture(this, 'images/leaf.jpg')

		this.houseFront = new CGFtexture(this, 'images/houseFront.png')
		this.houseSide = new CGFtexture(this, 'images/houseSide.png')
		this.houseBack = new CGFtexture(this, 'images/houseBack.png')
		this.houseRoof = new CGFtexture(this, 'images/houseRoof.png')
		this.houseFloor = new CGFtexture(this, 'images/houseBot.png')
		this.pillarTexture = new CGFtexture(this, 'images/stone.jpg')


		this.poolTexture = new CGFtexture(this, 'images/poolRock.png')
		this.waterTexture = new CGFtexture(this, 'images/water.png')
		this.poolRampTexture = new CGFtexture(this, 'images/plastic.png')
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
        this.lights[0].update();
        this.lights[1].update();
        
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


        // ---- BEGIN Primitive drawing section

        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].display();
        }

        // ---- END Primitive drawing section
    }
}