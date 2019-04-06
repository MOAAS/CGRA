class MyCar extends ObjectGroup {
    constructor(scene) {
        super(scene);
        this.wheel1 = new MyCilinder(scene, 10);
        this.wheel2 = new MyCilinder(scene, 10);
        this.wheel3 = new MyCilinder(scene, 10);
        this.wheel4 = new MyCilinder(scene, 10);

        this.wheel1.translate(2, 0, 0);
        this.wheel2.translate(2, 0, 0);
        this.wheel3.translate(2, 0, 0);
        this.wheel4.translate(2, 0, 0);    
    }

}