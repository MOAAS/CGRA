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
        this.gui.add(this.scene, 'illumination', 0, 1);

        // a subfolder for grouping only the three coordinates of the light
        var f0 = this.gui.addFolder('Light 0 ');
        f0.add(this.scene.lights[0], 'enabled').name("Enabled");
        f0.add(this.scene.lights[0].position, '0', -25.0, 25.0).name("X Position");
        f0.add(this.scene.lights[0].position, '1', 0, 10.0).name("Y Position");
        f0.add(this.scene.lights[0].position, '2', -25.0, 25.0).name("Z Position");
    
        // similar but for light 1
        var f1 = this.gui.addFolder('Light 1 ');
        f1.add(this.scene.lights[1], 'enabled').name("Enabled");
        f1.add(this.scene.lights[1].position, '0', -5.0, 5.0).name("X Position");
        f1.add(this.scene.lights[1].position, '1', -5.0, 5.0).name("Y Position");
        f1.add(this.scene.lights[1].position, '2', -5.0, 5.0).name("Z Position");

        var f2 = this.gui.addFolder('Wind direction');
        f2.add(this.scene.wind, 'x', -5, 5).name("X Direction");
        f2.add(this.scene.wind, 'y', -5, 5).name("Y Direction");


        //this.gui.add(this.scene, 'selectedObject', this.scene.objectIDs).name('Selected Objects');

       return true;
    }
}