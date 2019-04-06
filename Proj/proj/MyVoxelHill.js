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
/*
        for (var i = 0; i < side; i++) {
            for (var j = 0; j < side; j++) {
                var cube = new MyUnitCube(scene)
                cube.translate(0.5, 0.5, 0.5)
                cube.translate(j - side/2, 0, i - side/2);
                this.objects.push(cube)
            }
        }
        */
        for (let i = 0; i < side; i++) {
            let cube1 = new MyUnitCube(scene)
            cube1.translate(0.5, 0.5, 0.5)
            cube1.translate(0 - side/2, 0, i - side/2);
            this.objects.push(cube1)

            let cube2 = new MyUnitCube(scene)
            cube2.translate(0.5, 0.5, 0.5)
            cube2.translate(side/2 - 1, 0, i - side/2);
            this.objects.push(cube2)
        }

        for (let i = 1; i < side - 1; i++) {
            let cube1 = new MyUnitCube(scene)
            cube1.translate(0.5, 0.5, 0.5)
            cube1.translate(i - side/2, 0, 0 - side/2);
            this.objects.push(cube1)

            let cube2 = new MyUnitCube(scene)
            cube2.translate(0.5, 0.5, 0.5)
            cube2.translate(i - side/2, 0, side/2 - 1);
            this.objects.push(cube2)
        }

    }
}