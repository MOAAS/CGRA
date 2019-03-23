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
        this.scaleFactor = 0.3;
        this.displayAxis = 1;
        this.objectComplexity = 0.5;
        this.selectedObject = 0;
        this.enableTex = true;
    }
    initLights() {
        this.lights[0].setPosition(10, 3, 10, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
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
        this.cubeStack.setTexture(this.mineTop, this.mineBot, this.mineSide);
        
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
        
        this.treePatch = new MyTreeGroupPatch(this, 6, 1.5, 4, 3, this.mineBot, this.mineTop);        
        this.treePatch.setTextureFilter(this.gl.NEAREST)
        this.treePatch.translate(0, 0, -25)

        this.house = new MyHouse(this, 12, 9, 8, this.houseSide, this.houseRoof)
        this.house.setDoorTexture(this.houseFront)
        this.house.setBackTexture(this.houseBack)
        this.house.setFloorTexture(this.houseFloor)
        
        this.objects = [this.dankStructure, this.treePatch, this.house]
        this.objects = [this.house, this.treePatch]

        //this.objectIDs = {'Dank Structure': 0, 'Tree Patch': 1, 'None': 2};
    }
    initTextures() {
        this.joyTexture = new CGFtexture(this, 'images/emoji.jpg');
        this.mineTop = new CGFtexture(this, 'images/mineTop.png')
		this.mineSide = new CGFtexture(this, 'images/mineSide.png')
		this.mineBot = new CGFtexture(this, 'images/mineBottom.png')
		this.mineBot = new CGFtexture(this, 'images/floor.png')

		this.houseFront = new CGFtexture(this, 'images/houseFront.png')
		this.houseSide = new CGFtexture(this, 'images/houseSide.png')
		this.houseBack = new CGFtexture(this, 'images/houseBack.png')
		this.houseRoof = new CGFtexture(this, 'images/houseRoof.png')
		this.houseFloor = new CGFtexture(this, 'images/houseBot.png')
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