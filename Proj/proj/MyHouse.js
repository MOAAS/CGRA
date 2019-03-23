class MyHouse extends ObjectGroup {
    constructor(scene, houseLength, houseWidth, houseHeight, wallTexture, roofTexture) {
        super(scene);

        this.walls = new MyUnitCube(scene);
        this.walls.scale(houseLength, houseHeight, houseWidth);
        this.walls.translate(0, houseHeight / 2, 0);
        this.walls.setTexture(wallTexture, wallTexture, wallTexture);

        this.roof = new MyPyramid(scene, 4)
        this.roof.rotate(Math.PI / 4, 0, 1, 0)
        this.roof.scale(houseLength, houseHeight / 2, houseWidth)
        this.roof.translate(0, houseHeight, 0);
        this.roof.setTexture(roofTexture)

        this.objects = [this.walls, this.roof]
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
}