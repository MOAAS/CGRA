class Transformation {
    constructor () {
        
    }
}

class Rotation extends Transformation {
    constructor(angle, x, y, z) {
        super();
        this.angle = angle;
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

class Translation extends Transformation {
    constructor(x, y, z) {
        super();
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

class Scaling extends Transformation {
    constructor(x, y, z) {
        super();
        this.x = x;
        this.y = y;
        this.z = z;
    }
}