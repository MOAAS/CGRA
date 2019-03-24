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
        
        var obj = this;
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');
        this.gui.add(this.scene, 'enableTex').name('Enable Textures');
        
        this.gui.add(this.scene, 'scaleFactor', 0.1, 1).name('Scale Factor');
        this.gui.add(this.scene, 'objectComplexity', 0, 5).name('Object Complexity').onChange(this.scene.updateObjectComplexity.bind(this.scene));;

        //this.gui.add(this.scene, 'selectedObject', this.scene.objectIDs).name('Selected Objects');

       return true;
    }
}