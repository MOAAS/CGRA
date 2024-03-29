/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        this.gui.add(this.scene, 'enableTex').name('Enable Textures').onChange(this.scene.updateTexEnable.bind(this.scene))
        this.gui.add(this.scene, 'enableSkybox').name('Enable Sky Box');
        this.gui.add(this.scene, 'enableSound').name('Enable Sound Effects');
        this.gui.add(this.scene, 'sceneScale', 0.1, 2).name('Scene scale');
        this.gui.add(this.scene.lights[0], 'enabled').name("Enable Light 0");

        this.gui.add(this.scene, 'scaleFactor', 0.5, 3).name('Bird scale').onChange(this.scene.updateBirdFactors.bind(this.scene))
        this.gui.add(this.scene, 'speedFactor', 0.1, 3).name('Bird speed').onChange(this.scene.updateBirdFactors.bind(this.scene))
        
        this.gui.add(this.scene, 'selectedView', this.scene.viewList).name('Camera Type').onChange(this.scene.updateCamera.bind(this.scene))
        this.gui.add(this.scene, 'enableRings', this.scene.enableRings).name('Enable Rings').onChange(this.scene.updateRings.bind(this.scene))

        var obj = this;

        this.initKeys();

        return true;
    }

    initKeys() {
        // create reference from the scene to the GUI
        this.scene.gui = this;
        
        // disable the processKeyboard function
        this.processKeyboard=function(){};
        // create a named array to store which keys are being pressed
        this.activeKeys={};
    }

    processKeyDown(event) {
        // called when a key is pressed down
        // mark it as active in the array
        this.activeKeys[event.code]=true;
    }
    
    processKeyUp(event) {
        // called when a key is released, mark it as inactive in the array
        this.activeKeys[event.code]=false;
    }
    
    isKeyPressed(keyCode) {
        // returns true if a key is marked as pressed, false otherwise
        return this.activeKeys[keyCode] || false;
    }
}