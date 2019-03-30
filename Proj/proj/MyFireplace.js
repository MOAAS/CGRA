class MyFireplace extends ObjectGroup {
    constructor(scene, firewoodTexture, fireTexture , baseTexture){
        super(scene);


        // ----- Firewood -------
        this.fireWood1 = new MyCilinder(scene, 8);
        this.fireWood2 = new MyCilinder(scene, 8);
        this.fireWood3 = new MyCilinder(scene, 8);
        this.fireWood4 = new MyCilinder(scene, 8);
        this.fireWood5 = new MyCilinder(scene, 8);
        this.fireWoods = new ObjectGroup(scene);
        this.fireWoods.addObjects(this.fireWood1, this.fireWood2,this.fireWood3,this.fireWood4,this.fireWood5);
        this.fireWoods.scale(0.25,2,0.25);
        this.fireWoods.rotate(Math.PI/8,1,0,0);
        this.fireWood2.rotate(2*Math.PI/5,0,1,0);
        this.fireWood3.rotate(4*Math.PI/5,0,1,0);
        this.fireWood4.rotate(6*Math.PI/5,0,1,0);
        this.fireWood5.rotate(8*Math.PI/5,0,1,0);
        this.fireWood1.translate(0,0,-1);
        this.fireWood2.translate(-0.951,0,-0.309);
        this.fireWood3.translate(-0.588,0,0.809);
        this.fireWood4.translate(0.588,0,0.809);
        this.fireWood5.translate(0.951,0,-0.309);
        this.fireWoods.translate(0,0.1,0);



        this.fireWoodMaterial = new MyCGFappearance(scene, 0.3, 0.8, 0.4, 10);
        this.fireWoods.setMaterial(this.fireWoodMaterial);
        this.fireWoods.setTexture(firewoodTexture);

        // ----- Fire -------
        this.fire= new MyCone(scene, 8);
        this.fireMaterial = new MyCGFappearance(scene, 1, 0, 0, 25);
        this.fire.scale(0.65,1.2,0.65);
        this.fire.translate(0,1.85,0);
        this.fire.setMaterial(this.fireMaterial);
        this.fire.setTexture(fireTexture);
        this.fire.enableTextureSlide();


        // ----- Base -------
        this.base = new MyCilinder(scene,10);
        this.baseMaterial = new MyCGFappearance(scene, 0.2, 0.8, 0.8, 25);
        this.base.setMaterial(this.baseMaterial);
        this.base.setTexture(baseTexture);
        this.base.scale(1.5,0.3,1.5);


        this.addObjects(this.fire, this.fireWoods , this.base);

    }

    enableFire() {
        this.enabled = true;
    }

    disableFire() {
        this.enabled = false;
    }

    display() {
        this.objects = [this.fireWoods, this.base];
        if (this.enabled)
            this.addObjects(this.fire)
        super.display();
    }

}
