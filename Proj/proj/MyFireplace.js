class MyFireplace extends ObjectGroup {
    constructor(scene, firewoodTexture, fireTexture){
        super(scene);


        // ----- Firewood -------
        this.fireWood1 = new MyCilinder(scene, 8);
        this.fireWood2 = new MyCilinder(scene, 8);
        this.fireWood3 = new MyCilinder(scene, 8);

        this.fireWoods = new ObjectGroup(scene);
        this.fireWoods.addObjects(this.fireWood1, this.fireWood2,this.fireWood3);

        // ----- Fire -------
        this.fire= new MyCone(scene, 8);


        this.fireWoodMaterial = new MyCGFappearance(scene, 0.3, 0.8, 0.4, 10);
        this.fireMaterial = new MyCGFappearance(scene, 0.2, 0.8, 0.8, 25);

        this.fireWoods.setMaterial(this.fireWoodMaterial)
        this.fire.setMaterial(this.fireMaterial)

        this.addObjects(this.fire, this.fireWoods);

    }

}
