class MyCar extends ObjectGroup {
    constructor(scene, road) {
        super(scene);

        this.road = road;

        // -- Wheels -- //

        this.wheel1 = new MyCilinder(scene, 16);
        this.wheel2 = new MyCilinder(scene, 16);
        this.wheel3 = new MyCilinder(scene, 16);
        this.wheel4 = new MyCilinder(scene, 16);

        this.wheels = new ObjectGroup(scene);
        this.wheels.addObjects(this.wheel1, this.wheel2, this.wheel3, this.wheel4)
        this.wheels.rotate(Math.PI / 2, 0, 0, 1);

        this.wheel1.translate(2, 0, 3);
        this.wheel2.translate(-2, 0, 3);
        this.wheel3.translate(2, 0, -3);
        this.wheel4.translate(-2, 0, -3);    
        
        // -- Mid -- //

        this.mid = new MyPrism(scene, 4);        
        this.mid.rotate(Math.PI/4, 0, 1, 0)
        this.mid.scale(4, 1.75, 8);
        this.mid.translate(-0.5, 0.5, 0);

        // -- Top -- //

        this.top = new ObjectGroup(scene);

        this.topmid = new MyPrism(scene, 4);
        this.topmid.rotate(Math.PI/4, 0, 1, 0)
        this.topmid.scale(4, 1.6, 3);
        this.topmid.translate(-0.5, 2, 0.5);

        this.topfront = new MyPrism(scene, 3);
        this.topfront.scale(1.5, 5.65, 1.5);
        this.topfront.rotate(Math.PI / 6, 0, 1, 0)
        this.topfront.rotate(Math.PI / 2, 0, 0, 1)
        this.topfront.translate(2.325, 2.25, 3.25);

        this.topback = new MyPrism(scene, 3);
        this.topback.scale(1.5, 5.65, 1.5);
        this.topback.rotate(-Math.PI / 6, 0, 1, 0)
        this.topback.rotate(Math.PI / 2, 0, 0, 1)
        this.topback.translate(2.325, 2.25, -2.3);

        this.top.addObjects(this.topfront, this.topmid, this.topback)

        this.addObjects(this.wheels, this.mid, this.top);
        this.translate(0, 1, 0);
        this.rotate(this.road.angle, 0, 1, 0)

        // -- Materials -- //

        this.wheelmaterial = new MyCGFappearance(scene, 0.2, 0.4, 0);
        this.wheels.setMaterial(this.wheelmaterial)

        this.mainMaterial = new MyCGFappearance(scene, 0.3, 0.7, 1, 5);
        this.mainMaterial.setColor(214, 36, 28)
        this.mid.setMaterial(this.mainMaterial)
        this.top.setMaterial(this.mainMaterial)

    }

    update() {
        this.movePos(Math.cos(this.road.angle), 0, Math.sin(this.road.angle))
        if (this.road.inverted && this.wheel1.xpos <= this.road.minX) {
            this.setPos(this.road.maxX, 0, this.road.maxZ);
        }
        else if (!this.road.inverted && this.wheel1.xpos >= this.road.maxX) {
            this.setPos(this.road.minX, 0, this.road.minZ);
        }
    }

}

class MyRoad extends ObjectGroup {
    constructor(scene, width, inverted, texture) {
        super(scene)
        this.inverted = inverted;
        if (inverted)
            this.angle = 5 * Math.PI / 4;
        else this.angle = Math.PI / 4;
        this.minX = -75;
        this.maxX = 75;        
        this.minZ = -75;
        this.maxZ = 75;

        this.road = new MySquare(scene);
        this.addObjects(this.road);

        this.rotate(Math.PI/2, 1, 0, 0)
        this.scale(this.maxX * 2 * Math.sqrt(2), 1, width);
        this.rotate(-this.angle, 0, 1, 0)
        this.translate(0, 0.1, 0);

        this.setTexture(texture);
        this.setTextureWrap('REPEAT', 'REPEAT');
        this.scaleTexCoords(25, 0.1 * width);
    }
}