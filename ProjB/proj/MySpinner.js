class MySpinner extends ObjectGroup {
    constructor(scene, x, y, z) {
        super(scene);

        // cria appearances (verde e preto)
        this.greenApp = new MyCGFappearance(scene, 0.2, 0.6, 0.8, 10);
        this.greenApp.setColor(15, 255, 15);
        this.blackApp = new MyCGFappearance(scene, 0.2, 0.6, 0.8, 10);
        this.blackApp.setColor(0, 0, 0);


        // Roda do centro
        this.center = new MyCilinder(scene, 12);
        this.center.scale(0.65, 0.3, 0.66);
        this.center.translate(0, -0.15, 0);
        this.center.setMaterial(this.greenApp)

        // cria as ligacoes (connections)
        this.edge1 = new MyUnitCube(scene);
        this.edge2 = new MyUnitCube(scene);
        this.edge3 = new MyUnitCube(scene);        
        this.edges = new ObjectGroup(scene);
        this.edges.addObjects(this.edge1, this.edge2, this.edge3);
        this.edges.setMaterial(this.greenApp);
        this.edges.scale(0.75, 0.2, 1.5);

        // posiciona e roda-os
        let angle1 = 0;
        let angle2 = 2 * Math.PI / 3;
        let angle3 = 4 * Math.PI / 3;

        this.edge1.rotate(angle1, 0, 1, 0);
        this.edge2.rotate(angle2, 0, 1, 0);
        this.edge3.rotate(angle3, 0, 1, 0);

        this.edge1.translate(Math.sin(angle1) * 0.75, 0, Math.cos(angle1) * 0.7);
        this.edge2.translate(Math.sin(angle2) * 0.75, 0, Math.cos(angle2) * 0.7);
        this.edge3.translate(Math.sin(angle3) * 0.75, 0, Math.cos(angle3) * 0.7);

        // cria os 3 circulos a volta
        this.spinner1 = new MyCilinder(scene, 12);
        this.spinner2 = new MyCilinder(scene, 12);
        this.spinner3 = new MyCilinder(scene, 12);
        this.spinners = new ObjectGroup(scene);
        this.spinners.addObjects(this.spinner1, this.spinner2, this.spinner3);

        this.spinners.scale(0.8, 0.1, 0.8);
        this.spinner1.translate(Math.sin(angle1) * 1.5, 0, Math.cos(angle1) * 1.5);
        this.spinner2.translate(Math.sin(angle2) * 1.5, 0, Math.cos(angle2) * 1.5);
        this.spinner3.translate(Math.sin(angle3) * 1.5, 0, Math.cos(angle3) * 1.5);
        this.spinners.translate(0, -0.05, 0);
        this.spinners.setMaterial(this.greenApp);

        this.addObjects(this.edges, this.spinners);

        // Spinners inner
        this.inner1 = new MyCilinder(scene, 12);
        this.inner2 = new MyCilinder(scene, 12);
        this.inner3 = new MyCilinder(scene, 12);
        this.inners = new ObjectGroup(scene);
        this.inners.addObjects(this.inner1, this.inner2, this.inner3);

        this.inners.scale(0.5, 0.2, 0.5);
        this.inner1.translate(Math.sin(angle1) * 1.5, 0, Math.cos(angle1) *  1.5);
        this.inner2.translate(Math.sin(angle2) * 1.5, 0, Math.cos(angle2) *  1.5);
        this.inner3.translate(Math.sin(angle3) * 1.5, 0, Math.cos(angle3) *  1.5);
        this.inners.translate(0, -0.05, 0);
        this.inners.setMaterial(this.blackApp);

        this.addObjects(this.center, this.edges, this.spinners, this.inners);

        // guarda tempo do ultimo update
        this.lastTime = 0;

        // guarda altura atual e maxima
        this.spinnerX = x;
        this.spinnerY = y;
        this.spinnerZ = z;
        this.minHeight = 4;
        this.maxHeight = 10;

        // guarda velocidades de rotacao e limites
        this.rotSpeed = 4;
        this.minLiftRotSpeed = 8;
        this.minRotSpeed = 2;
        this.maxRotSpeed = 12;
    }
    
    update(t, person) {
        let diff = t - this.lastTime;
        this.lastTime = t;

        if (this.rotSpeed >= this.minLiftRotSpeed)
            this.spinnerY = Math.min(this.spinnerY + (this.rotSpeed - this.minLiftRotSpeed) / 100.0, this.maxHeight);
        else this.spinnerY = Math.max(this.spinnerY + (this.rotSpeed -this.minLiftRotSpeed) / 100.0, this.minHeight);

        this.moveAngle(0, this.rotSpeed * diff / 1000.0, 0);
        this.setPos(this.spinnerX, this.spinnerY, this.spinnerZ);

        person.moveAngle(0, this.rotSpeed * diff / 1000.0, 0);
        person.setPos(this.spinnerX, this.spinnerY + 0.2, this.spinnerZ);
    }

    lift() {
        this.rotSpeed = Math.min(this.rotSpeed + 0.2, this.maxRotSpeed);
    }

    descend() {
        this.rotSpeed = Math.max(this.rotSpeed - 0.2, this.minRotSpeed);
    }

    front() {
        this.spinnerX -= this.rotSpeed / 15.0;
    }

    back() {
        this.spinnerX += this.rotSpeed / 15.0;
    }

    left() {
        this.spinnerZ += this.rotSpeed / 15.0;
    }

    right() {
        this.spinnerZ -= this.rotSpeed / 15.0;
    }
}