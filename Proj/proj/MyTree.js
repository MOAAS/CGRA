class MyTree extends ObjectGroup {
    constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture) {
        super(scene);

        this.trunkMaterial = new MyCGFappearance(scene, 0.25, 1, 0, 10)
        this.treeTopMaterial = new MyCGFappearance(scene, 0.4, 0.7, 0.8, 10)

        this.trunk = new MyCilinder(scene, 8);
        this.trunk.scale(trunkRadius, trunkHeight, trunkRadius);
        this.trunk.setTexture(trunkTexture);
        this.trunk.setMaterial(this.trunkMaterial)

        this.treeTop = new MyCone(scene, 8);
        this.treeTop.scale(treeTopRadius, treeTopHeight, treeTopRadius);
        this.treeTop.translate(0, trunkHeight, 0);
        this.treeTop.setTexture(treeTopTexture);
        this.treeTop.setMaterial(this.treeTopMaterial)

        this.addObjects(this.trunk, this.treeTop);
    }
}

class MyTreeGroupPatch extends ObjectGroup {
    constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture) {
        super(scene);

        var minDistBetweenTrees = Math.max(trunkRadius * 2, treeTopRadius * 2) * 1.5;

        this.tree1 = new MyTree(scene, trunkHeight * getRandNum(0.9, 1.2), trunkRadius * getRandNum(0.9, 1.1), treeTopHeight * getRandNum(1, 1.5), treeTopRadius * getRandNum(0.9, 1.1), trunkTexture, treeTopTexture);
        this.tree2 = new MyTree(scene, trunkHeight * getRandNum(0.9, 1.2), trunkRadius * getRandNum(0.9, 1.1), treeTopHeight * getRandNum(1, 1.5), treeTopRadius * getRandNum(0.9, 1.1), trunkTexture, treeTopTexture);
        this.tree3 = new MyTree(scene, trunkHeight * getRandNum(0.9, 1.2), trunkRadius * getRandNum(0.9, 1.1), treeTopHeight * getRandNum(1, 1.5), treeTopRadius * getRandNum(0.9, 1.1), trunkTexture, treeTopTexture);
        this.tree4 = new MyTree(scene, trunkHeight * getRandNum(0.9, 1.2), trunkRadius * getRandNum(0.9, 1.1), treeTopHeight * getRandNum(1, 1.5), treeTopRadius * getRandNum(0.9, 1.1), trunkTexture, treeTopTexture);
        this.tree5 = new MyTree(scene, trunkHeight * getRandNum(0.9, 1.2), trunkRadius * getRandNum(0.9, 1.1), treeTopHeight * getRandNum(1, 1.5), treeTopRadius * getRandNum(0.9, 1.1), trunkTexture, treeTopTexture);
        this.tree6 = new MyTree(scene, trunkHeight * getRandNum(0.9, 1.2), trunkRadius * getRandNum(0.9, 1.1), treeTopHeight * getRandNum(1, 1.5), treeTopRadius * getRandNum(0.9, 1.1), trunkTexture, treeTopTexture);
        this.tree7 = new MyTree(scene, trunkHeight * getRandNum(0.9, 1.2), trunkRadius * getRandNum(0.9, 1.1), treeTopHeight * getRandNum(1, 1.5), treeTopRadius * getRandNum(0.9, 1.1), trunkTexture, treeTopTexture);
        this.tree8 = new MyTree(scene, trunkHeight * getRandNum(0.9, 1.2), trunkRadius * getRandNum(0.9, 1.1), treeTopHeight * getRandNum(1, 1.5), treeTopRadius * getRandNum(0.9, 1.1), trunkTexture, treeTopTexture);
        this.tree9 = new MyTree(scene, trunkHeight * getRandNum(0.9, 1.2), trunkRadius * getRandNum(0.9, 1.1), treeTopHeight * getRandNum(1, 1.5), treeTopRadius * getRandNum(0.9, 1.1), trunkTexture, treeTopTexture);

        this.addObjects(this.tree1,this.tree2, this.tree3, this.tree4, this.tree5, this.tree6, this.tree7, this.tree8, this.tree9)

        for (var i = 0; i < this.objects.length; i++) {
            var xDisp = minDistBetweenTrees * (Math.floor(i % 3) + getRandNum(-0.1, 0.1));
            var zDisp = minDistBetweenTrees * (Math.floor(i / 3) + getRandNum(-0.1, 0.1));
            this.objects[i].translate(xDisp, 0, zDisp);
        }
    }
}
class MyTreeRowPatch extends ObjectGroup {
    constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture) {
        super(scene);

        var minDistBetweenTrees = Math.max(trunkRadius * 2, treeTopRadius * 2) * 1.25;

        this.tree1 = new MyTree(scene, trunkHeight * getRandNum(0.9, 1.2), trunkRadius * getRandNum(0.9, 1.1), treeTopHeight * getRandNum(1, 1.5), treeTopRadius * getRandNum(0.9, 1.1), trunkTexture, treeTopTexture);
        this.tree2 = new MyTree(scene, trunkHeight * getRandNum(0.9, 1.2), trunkRadius * getRandNum(0.9, 1.1), treeTopHeight * getRandNum(1, 1.5), treeTopRadius * getRandNum(0.9, 1.1), trunkTexture, treeTopTexture);
        this.tree3 = new MyTree(scene, trunkHeight * getRandNum(0.9, 1.2), trunkRadius * getRandNum(0.9, 1.1), treeTopHeight * getRandNum(1, 1.5), treeTopRadius * getRandNum(0.9, 1.1), trunkTexture, treeTopTexture);
        this.tree4 = new MyTree(scene, trunkHeight * getRandNum(0.9, 1.2), trunkRadius * getRandNum(0.9, 1.1), treeTopHeight * getRandNum(1, 1.5), treeTopRadius * getRandNum(0.9, 1.1), trunkTexture, treeTopTexture);
        this.tree5 = new MyTree(scene, trunkHeight * getRandNum(0.9, 1.2), trunkRadius * getRandNum(0.9, 1.1), treeTopHeight * getRandNum(1, 1.5), treeTopRadius * getRandNum(0.9, 1.1), trunkTexture, treeTopTexture);
        this.tree6 = new MyTree(scene, trunkHeight * getRandNum(0.9, 1.2), trunkRadius * getRandNum(0.9, 1.1), treeTopHeight * getRandNum(1, 1.5), treeTopRadius * getRandNum(0.9, 1.1), trunkTexture, treeTopTexture);

        this.addObjects(this.tree1,this.tree2, this.tree3, this.tree4, this.tree5, this.tree6)

        var patchLength = 0;
        for (var i = 0; i < this.objects.length; i++) {
            var xDisp = minDistBetweenTrees * getRandNum(1, 1.2);
            var zDisp = minDistBetweenTrees * getRandNum(-0.2, 0.2);
            this.objects[i].translate(patchLength + xDisp, 0, zDisp);
            patchLength += xDisp;
        }
    }
}

function getRandNum(min, max) {
    return Math.random() * (max - min) + min;
}
