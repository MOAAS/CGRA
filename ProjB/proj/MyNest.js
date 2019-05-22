class MyNest extends ObjectGroup {
    constructor(scene) {
        super(scene)

        this.branches = [];
        for (var i = 1; i < 5; i++) {
            for (var j = 0; j < 2 * (i + 5); j++) {
                this.branch = new MyCilinder(scene, 7)
                this.branch.scale(0.17, i / 3, 0.17)
                this.branch.rotate(Math.PI / (2.7 * (1 + 0.15 * i)), 1, 0, 0)
                this.branch.translate(i / 5, (i - 1) / 5, i / 5)
                this.branch.rotate(j * (Math.PI / (i + 5)), 0, 1, 0)
                this.branches.push(this.branch)
            }
        }
        this.base = new MyCilinder(scene, 10)
        this.base.scale(1, 0.2, 1)
        this.base.translate(0, 0.4, 0)
        this.addObjects(...this.branches)
        this.addObjects(this.base)
    }
}