class MyFireplace extends ObjectGroup {
    constructor(scene,firewoodTexture , fireTexture){
        super(scene);


        // ----- Firewood -------
        this.fireWood1 = new MyCilinder(scene);
        this.fireWood2 = new MyCilinder(scene);
        this.fireWood3 = new MyCilinder(scene);

        this.fireWoods.addObjects(fireWood1,fireWood2,fireWood3);

        // ----- Fire -------
        this.fire= new MyCone(scene);


        this.fireWoodMaterial = new MyCGFappearance(scene, 0.3, 0.8, 0.4, 10);
        this.FireMaterial = new MyCGFappearance(scene, 0.2, 0.8, 0.8, 25);

        this.fireWoods.setMaterial(this.waterMaterial)
        this.Fire.setMaterial(this.wallsMaterial)

        this.addObjects(this.firewood1, this.fireWoods);

    }

}
