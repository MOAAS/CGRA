class MySwimmingPool extends ObjectGroup {
    constructor(scene, waterTexture, poolTexture, rampTexture) {
        super(scene)
        var length = 12, width = 16, depth = 3;

        // ----- Walls -------
        this.frontWall = new MyUnitCube(scene);
        this.backWall = new MyUnitCube(scene);
        this.leftWall = new MyUnitCube(scene);
        this.rightWall = new MyUnitCube(scene);

        this.leftWall.rotate(Math.PI / 2, 0, 1, 0)
        this.rightWall.rotate(Math.PI / 2, 0, 1, 0)

        this.frontWall.scale(length, depth, 1)
        this.backWall.scale(length, depth, 1)        
        this.leftWall.scale(1, depth, width - 1);
        this.rightWall.scale(1, depth, width - 1);

        this.frontWall.translate(0, 0, width / 2);
        this.backWall.translate(0, 0, -width / 2);

        this.leftWall.translate(- length / 2 + 0.5, 0, 0);
        this.rightWall.translate(length / 2 - 0.5, 0, 0);

        this.walls = new ObjectGroup(scene)
        this.walls.addObjects(this.frontWall, this.backWall, this.leftWall, this.rightWall);
        this.walls.setTexture(poolTexture);
        
        // ------ Water -------
        this.water = new MyUnitCube(scene);
        this.water.scale(length - 1, 1, width - 1);
        this.water.setTexture(waterTexture)
        this.water.translate(0, depth / 4, 0)

        // ------ Stair -------

        this.stairStep1 = new MyUnitCube(scene);
        this.stairStep2 = new MyUnitCube(scene);        
        this.stairs = new ObjectGroup(scene)
        this.stairs.addObjects(this.stairStep1, this.stairStep2)
        this.stairs.setTexture(poolTexture)
        this.stairs.scale(length / 2, 1, 1)        
        this.stairStep1.translate(0, 0, width / 2 + 2)
        this.stairStep2.translate(0, 0.5, width / 2 + 1)

        // ------- Ramp --------

        this.rampBase = new MyUnitCube(scene)
        this.rampPillar = new MyUnitCube(scene)

        this.rampPillar.scale(1, 0.75, 0.33)
        this.rampBase.scale(1, 0.25, 3)
        this.rampBase.translate(0, 0.5, -1)

        this.ramp = new ObjectGroup(scene)
        this.ramp.addObjects(this.rampBase, this.rampPillar)
        this.ramp.setTexture(rampTexture);

        this.ramp.translate(0, depth / 2, width / 2)


        this.waterMaterial = new MyCGFappearance(scene, 0.2, 0.6, 1, 40)
        this.wallsMaterial = new MyCGFappearance(scene, 0.3, 0.8, 0.4, 10)
        this.rampMaterial = new MyCGFappearance(scene, 0.2, 0.8, 0.8, 25)

        this.water.setMaterial(this.waterMaterial)
        this.walls.setMaterial(this.wallsMaterial)
        this.stairs.setMaterial(this.wallsMaterial)
        this.ramp.setMaterial(this.rampMaterial)

        this.addObjects(this.walls, this.water, this.stairs, this.ramp);
    }
}