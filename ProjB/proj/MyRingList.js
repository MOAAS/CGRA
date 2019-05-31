class MyRingList extends ObjectGroup {
    constructor(scene, numRings, width, minX, maxX, minY, maxY, minZ, maxZ) {
        super(scene);
        this.numRings = numRings;
        this.width = width;
        this.minX = minX;
        this.maxX = maxX;
        this.minY = minY;
        this.maxY = maxY;
        this.minZ = minZ;
        this.maxZ = maxZ;
        this.reset()
    }

    update(birdX, birdY, birdZ) {
        let rings = this.getObjects();
        for (let i = 0; i < rings.length; ) {
            if (rings[i].isInside(birdX, birdY, birdZ))
                rings.splice(i, 1)
            else i++;
        }
    }

    reset() {
       // this.getObjects().splice(this.getObjects().length);
        for (let i = 0; i < this.numRings; i++) {
            let x = Math.random() * (this.maxX - this.minX) + this.minX;
            let y = Math.random() * (this.maxY - this.minY) + this.minY;
            let z = Math.random() * (this.maxZ - this.minZ) + this.minZ;
            let ring = new MyRing(this.scene, x, y, z, this.width);   
            //ring.rotate(Math.random() * Math.PI * 2, 0, 1, 0);
            this.addObjects(ring);
        }
    }
}