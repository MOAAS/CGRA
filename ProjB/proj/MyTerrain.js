class MyTerrain extends CGFobject {
    constructor(scene, side, texture, mapTexture, gradient) {
        super(scene);
        this.plane = new Plane(scene, 32);
        this.side = side;
        this.terrainTex = texture;
        this.terrainMap = mapTexture;
        this.gradient = gradient;

        this.appearance = new MyCGFappearance(this.scene, 0.3, 0.7, 0, 120);
        this.appearance.setTexture(texture);


    }

    display() {
        this.terrainMap.bind(1);
        this.gradient.bind(2);
        this.appearance.apply();

        // ativa o shader do terreno
        this.scene.setActiveShader(this.scene.terrainShader);        
        
        this.scene.pushMatrix();
        this.scene.scale(this.side, 1, this.side);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.plane.display();
        this.scene.popMatrix();

        // volta a por o shader normal
        this.scene.setActiveShader(this.scene.defaultShader);
    }
}
