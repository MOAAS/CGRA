class MyHouse extends ObjectGroup {
    constructor(scene, houseLength, houseWidth, houseHeight, pillarRadius) {
        super(scene);


        this.walls = new MyUnitCube(scene);
        this.walls.scale(houseLength, houseHeight, houseWidth);
        this.walls.translate(0, houseHeight / 2, 0);

        this.roof = new MyPyramid(scene, 4)
        this.roof.rotate(Math.PI / 4, 0, 1, 0)
        this.roof.scale(houseLength * 1.25, houseHeight / 1.5, houseWidth * 1.25)
        this.roof.translate(0, houseHeight, 0);

        this.pillar1 = new MyPrism(scene, 8)
        this.pillar2 = new MyPrism(scene, 8)
        this.pillar3 = new MyPrism(scene, 8)
        this.pillar4 = new MyPrism(scene, 8)

        this.pillars = new ObjectGroup(scene)
        this.pillars.addObjects(this.pillar1, this.pillar2, this.pillar3, this.pillar4)
        this.pillars.scale(pillarRadius, houseHeight, pillarRadius)
        
        this.pillar1.translate(houseLength / 1.5, 0, houseWidth / 1.5)
        this.pillar2.translate(-houseLength / 1.5, 0, houseWidth / 1.5)
        this.pillar3.translate(houseLength / 1.5, 0, -houseWidth / 1.5)
        this.pillar4.translate(-houseLength / 1.5, 0, -houseWidth / 1.5)


        this.pillarMaterial = new MyCGFappearance(scene, 0.3, 0.8, 0.2, 10)
        this.roofMaterial = new MyCGFappearance(scene, 0.3, 0.9, 0.2, 10)
        this.wallMaterial = new MyCGFappearance(scene, 0.3, 0.7, 0.6, 10)

        this.pillars.setMaterial(this.pillarMaterial)
        this.roof.setMaterial(this.roofMaterial)
        this.walls.setMaterial(this.wallMaterial)


        this.objects = [this.walls, this.roof, this.pillars]
    }

    setWallTexture(texture) {
        this.walls.setTexture(texture);
    }

    setDoorTexture(texture) {
        this.walls.front.setTexture(texture);
    }

    setBackTexture(texture) {
        this.walls.back.setTexture(texture);
    }

    setFloorTexture(texture) {
        this.walls.bot.setTexture(texture);
    }

    setPillarTexture(texture) {
        this.pillars.setTexture(texture)
    }

    setRoofTexture(texture) {
        this.roof.setTexture(texture);
    }
}