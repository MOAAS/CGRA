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
        this.gui.add(this.scene, 'enableTex').name('Enable Textures');
        this.gui.add(this.scene, 'enableSkybox').name('Enable Sky Box');
        
        var obj = this;

        return true;
    }
}