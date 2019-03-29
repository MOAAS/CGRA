class MyFireplace extends ObjectGroup {
    constructor(scene, firewoodTexture, fireTexture){
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
        this.fireWood2.rotate(Math.PI/5,0,1,0);
        this.fireWood3.rotate(2*Math.PI/5,0,1,0);
        this.fireWood4.rotate(3*Math.PI/5,0,1,0);
        this.fireWood5.rotate(4*Math.PI/5,0,1,0);
        this.fireWood1.translate(0,0,-1);
        this.fireWood2.translate(-0.951,0,-0.309);
        this.fireWood3.translate(-0.588,0,0.809);
        this.fireWood4.translate(0.588,0,0.809);
        this.fireWood5.translate(0.951,0,-0.309);



        this.fireWoodMaterial = new MyCGFappearance(scene, 0.3, 0.8, 0.4, 10);
        this.fireWoods.setMaterial(this.fireWoodMaterial);
        this.fireWoods.setTexture(firewoodTexture);

        // ----- Fire -------
        this.fire= new MyCone(scene, 8);
        this.fire.translate(0,50,0);
        this.fireMaterial = new MyCGFappearance(scene, 0.2, 0.8, 0.8, 25);
        this.fire.setMaterial(this.fireMaterial);
        this.fire.setTexture(fireTexture);


        this.addObjects(this.fire, this.fireWoods);

    }

}
