class MyPerson extends ObjectGroup {
    constructor(scene, skinTexture, faceTexture, hairTexture, shirtTexture, pantsTexture, shoeTexture) {
        super(scene);
        
        // --- Head --- //

        this.headBase = new MyCilinder(scene, 12); // cover bot texture
        this.headMain = new MyCilinder(scene, 12);
        this.hair = new MyCilinder(scene, 12);
        this.neck = new MyCilinder(scene, 12);

        this.hair.scale(1.1,0.5,1.1)
        this.hair.translate(0, 1, 0);

        this.headBase.scale(1, 0.1, 1);

        this.neck.scale(0.5, 1, 0.5)
        this.neck.translate(0, -0.5, 0)


        this.head = new ObjectGroup(scene);
        this.head.addObjects(this.hair, this.headMain, this.headBase, this.neck);

        this.head.setTexture(skinTexture)
        this.hair.setTexture(hairTexture);        
        this.headMain.setTexture(faceTexture)

        // -- Body -- //

        this.body = new MyCilinder(scene, 8);
        this.armLeft = new MyCilinder(scene, 12)
        this.armRight = new MyCilinder(scene, 12)

        this.body.scale(1.25,2.5,1.25);
        this.body.translate(0, -3, 0);

        this.armLeft.scale(0.25,2,0.25)
        this.armRight.scale(0.25,2,0.25)

        this.armLeft.rotate(-Math.PI/3, 1, 0, 0)
        this.armRight.rotate(Math.PI/3, 1, 0, 0)

        this.armLeft.translate(0, -1.25, -1)
        this.armRight.translate(0, -1.25, 1)

        this.shirt = new ObjectGroup(scene);
        this.shirt.addObjects(this.body, this.armLeft, this.armRight)
        this.shirt.setTexture(shirtTexture);

        
        // -- hands -- //
        this.handLeft = new MyCilinder(scene, 12)
        this.handRight = new MyCilinder(scene, 12)

        this.hands = new ObjectGroup(scene);
        this.hands.addObjects(this.handLeft, this.handRight);
        this.hands.setTexture(skinTexture); 

        this.hands.scale(0.35,0.125,0.35)

        this.handLeft.rotate(-5 * Math.PI/6, 1, 0, 0)
        this.handRight.rotate(5 * Math.PI/6, 1, 0, 0)

        this.handLeft.translate(0, 0, -3)
        this.handRight.translate(0, 0, 3)


        // -- legs -- //

        this.legLeft = new MyCilinder(scene, 12)
        this.legRight = new MyCilinder(scene, 12)

        this.legLeft.scale(0.3,1.5,0.3)
        this.legRight.scale(0.3,1.5,0.3)

        this.legLeft.translate(0, -4.5, -0.5)
        this.legRight.translate(0, -4.5, 0.5)

        this.pants = new ObjectGroup(scene);
        this.pants.addObjects(this.legLeft, this.legRight)
        this.pants.setTexture(pantsTexture);

        // -- feet -- //

        this.footLeft = new MyCilinder(scene, 12)
        this.footRight = new MyCilinder(scene, 12)

        this.footLeft.scale(0.8,0.3,0.4)
        this.footRight.scale(0.8,0.3,0.4)

        this.footLeft.translate(-0.4, -4.75, -0.5)
        this.footRight.translate(-0.4, -4.75, 0.5)

        this.shoes = new ObjectGroup(scene);
        this.shoes.addObjects(this.footLeft, this.footRight);
        this.shoes.setTexture(shoeTexture)


        this.setMaterial(new MyCGFappearance(scene, 0.4, 0.6, 0.8, 10))
        this.addObjects(this.head, this.shirt, this.hands, this.pants, this.shoes);

        this.translate(0, 4.75, 0)
    }
}
