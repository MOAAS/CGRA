class MyRing extends ObjectGroup {
    constructor(scene, x, y, z, width, angle) {
        super(scene);
        /*
        this.minX = x - width / 2 + width / 20;
        this.minY = y - width / 2 + width / 20;
        this.minZ = z - 0.5;

        this.maxX = x + width / 2 - width / 20;
        this.maxY = y + width / 2 - width / 20;
        this.maxZ = z + 0.5;
        */

       this.minX = x - (width / 2 + width / 20) * Math.sin(angle);
       this.minY = y - width / 2 + width / 20;
       this.minZ = z - (width / 2 + width / 20) * Math.cos(angle);

       this.maxX = x + (width / 2 + width / 20) * Math.sin(angle);
       this.maxY = y + width / 2 - width / 20;
       this.maxZ = z + (width / 2 + width / 20) * Math.cos(angle);


        this.angle = angle;

        // cria os cantos
        this.topLeft = new MySphere(scene, 8, 8, width / 6);
        this.topRight = new MySphere(scene, 8, 8, width / 6);
        this.botLeft = new MySphere(scene, 8, 8, width / 6);
        this.botRight = new MySphere(scene, 8, 8, width / 6);
        this.spheres = new ObjectGroup(scene);
        this.spheres.addObjects(this.topLeft, this.topRight, this.botLeft, this.botRight);

        // Coloca os cantos nos cantos
        this.topLeft.translate(-width / 2, width / 2, 0)
        this.topRight.translate(width / 2, width / 2, 0)
        this.botLeft.translate(-width / 2, -width / 2, 0)
        this.botRight.translate(width / 2, -width / 2, 0)
        
        // Cria os lados
        this.top = new MyCilinder(scene, 8);
        this.bot = new MyCilinder(scene, 8);
        this.left = new MyCilinder(scene, 8);
        this.right = new MyCilinder(scene, 8);
        this.cilinders = new ObjectGroup(scene);
        this.cilinders.addObjects(this.top, this.bot, this.left, this.right);

        // reduz o tamanho dos cilindros e centra-os
        this.cilinders.translate(0, -0.5, 0);
        this.cilinders.scale(width / 10, width, width / 10);

        // Forma um quadrado de cilindros (lado = width), rodando e movendo os objetos
        this.top.rotate(Math.PI / 2, 0, 0, 1);
        this.bot.rotate(Math.PI / 2, 0, 0, 1);
        this.top.translate(0, width / 2.0, 0); 
        this.bot.translate(0, - width / 2.0, 0);
        this.left.translate(- width / 2.0, 0, 0);
        this.right.translate(width / 2.0, 0, 0);

        
        this.addObjects(this.spheres, this.cilinders);
        this.rotate(angle, 0, 1, 0);
        this.translate(x, y, z);

        // Creates a yellow material and applies it
        let yellowApp = new MyCGFappearance(scene, 0.6, 0.8, 0.6, 10);
        yellowApp.setColor(190, 230, 20);
        let blackApp = new MyCGFappearance(scene, 0.8, 0.8, 0, 10);
        blackApp.setColor(10, 10, 10);

        this.cilinders.setMaterial(yellowApp);
        this.spheres.setMaterial(blackApp);
    }

    isInside(x, y, z) {
        return x >= this.minX && y >= this.minY && z >= this.minZ && x <= this.maxX && y <= this.maxY && z <= this.maxZ;// && Math.abs(Math.atan2(x, z) - this.angle) <= Math.PI / 2;
    }
}