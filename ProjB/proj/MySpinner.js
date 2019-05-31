class MySpinner extends ObjectGroup {
    constructor(scene) {
        super(scene);

        this.greenApp = new MyCGFappearance(scene, 0.6, 0.6, 0.8, 10);
        this.greenApp.setColor(15, 255, 15);
        this.blackApp = new MyCGFappearance(scene, 0.6, 0.6, 0.8, 10);
        this.blackApp.setColor(0, 0, 0);

        this.center = new MyCilinder(scene, 8);
        this.center.setScale(1, 0.2, 1);
        this.center.movePos(0, -0.1, 0);

        this.edge1 = new MyUnitCube(scene, 8);
        this.edge2 = new MyUnitCube(scene, 8);
        this.edge3 = new MyUnitCube(scene, 8);        
        this.edges = new ObjectGroup(scene);
        this.edges.addObjects(this.edge1, this.edge2, this.edge3);
        this.edges.setMaterial(this.greenApp);
        this.edges.scale(0.5, 0.2, 1.5);

        let angle1 = 0;
        let angle2 = 2 * Math.PI / 3;
        let angle3 = 4 * Math.PI / 3;

        this.edge1.rotate(angle1, 0, 1, 0);
        this.edge2.rotate(angle2, 0, 1, 0);
        this.edge3.rotate(angle3, 0, 1, 0);

        this.edge1.translate(Math.sin(angle1) * 1.25, 0, Math.cos(angle1) * 1.25);
        this.edge2.translate(Math.sin(angle2) * 1.25, 0, Math.cos(angle2) * 1.25);
        this.edge3.translate(Math.sin(angle3) * 1.25, 0, Math.cos(angle3) * 1.25);

        // Spinners outer
        this.spinner1 = new MyCilinder(scene, 8);
        this.spinner2 = new MyCilinder(scene, 8);
        this.spinner3 = new MyCilinder(scene, 8);

        this.spinner1.setPos(Math.sin(angle1) * 2.5, 0, Math.cos(angle1) * 2.5);
        this.spinner2.setPos(Math.sin(angle2) * 2.5, 0, Math.cos(angle2) * 2.5);
        this.spinner3.setPos(Math.sin(angle3) * 2.5, 0, Math.cos(angle3) * 2.5);
        this.spinners = new ObjectGroup(scene);
        this.spinners.addObjects(this.spinner1, this.spinner2, this.spinner3);
        this.spinners.setScale(1, 0.1, 1);
        this.spinners.movePos(0, -0.05, 0);
        this.spinners.setMaterial(this.greenApp);

        this.addObjects(this.edges, this.spinners);

        // Spinners inner
        this.inner1 = new MyCilinder(scene, 8);
        this.inner2 = new MyCilinder(scene, 8);
        this.inner3 = new MyCilinder(scene, 8);

        this.inner1.setPos(Math.sin(angle1) * 2.5, 0, Math.cos(angle1) * 2.5);
        this.inner2.setPos(Math.sin(angle2) * 2.5, 0, Math.cos(angle2) * 2.5);
        this.inner3.setPos(Math.sin(angle3) * 2.5, 0, Math.cos(angle3) * 2.5);
        this.inners = new ObjectGroup(scene);
        this.inners.addObjects(this.spinner1, this.spinner2, this.spinner3, this.center);
        this.inners.setScale(0.6, 0.2, 0.6);
        this.inners.movePos(0, -0.05, 0);
        this.inners.setMaterial(this.blackApp);

        this.addObjects(this.edges, this.spinners, this.inners);

        this.lastTime = 0;
    }
    
    update(t) {
        let diff = t - this.lastTime;
        this.lastTime = t;

        this.inners.moveAngle(0, 0.004 * diff, 0);
        this.spinners.moveAngle(0, 0.004 * diff, 0);
        this.edges.moveAngle(0, 0.004 * diff, 0);
    }

}