class MyVoxelHill extends ObjectGroup {
    constructor(scene, height) {
        super(scene);

        this.objects = []

        this.hillMaterial = new MyCGFappearance(scene, 0.2, 1, 0, 10)

        for (var i = 0; i < height; i++) {
            var level = new MyHillLevel(scene, 2 * (height - i) - 1)
            level.translate(0, i, 0);
            level.setMaterial(this.hillMaterial)
            this.objects.push(level)
        }




    }    
}

class MyHillLevel extends ObjectGroup {
    constructor(scene, side) {
        super(scene)
        this.objects = []

        for (var i = 0; i < side; i++) {
            for (var j = 0; j < side; j++) {
                var cube = new MyUnitCube(scene)
                cube.translate(0.5, 0.5, 0.5)
                cube.translate(j - side/2, 0, i - side/2);
                this.objects.push(cube)
            }
        }

    }
}