class MyRing extends ObjectGroup {
    constructor(scene, x, y, z, width) { // width = 8?
        super(scene);
        this.minX = x - width / 2;
        this.minY = y - width / 2;
        this.minZ = z - width / 10;

        this.maxX = this.minX + width;
        this.maxY = this.minY + width;
        this.maxZ = this.minZ + width;

        this.top = new MyCilinder(scene, 8);
        this.bot = new MyCilinder(scene, 8);
        this.left = new MyCilinder(scene, 8);
        this.right = new MyCilinder(scene, 8);

        // reduz o tamanho dos cilindros e centra-os
        this.addObjects(this.top, this.bot, this.left, this.right);
        this.translate(0, -0.5, 0);
        this.scale(width / 8, width, width / 8);

        // Forma um quadrado de cilindros (lado = width), rodando e movendo os objetos
        this.top.rotate(Math.PI / 2, 0, 0, 1);
        this.bot.rotate(Math.PI / 2, 0, 0, 1);
        this.top.translate(0, width / 2.0, 0); 
        this.bot.translate(0, - width / 2.0, 0);
        this.left.translate(- width / 2.0, 0, 0);
        this.right.translate(width / 2.0, 0, 0);

        this.translate(x, y, z);
    }

    isInside(x, y, z) {
        return x >= this.minX && y >= this.minY && z >= this.minZ && x <= this.maxX && y <= this.maxY && z <= this.maxZ;
    }
}