/**
 * MyRectangle
 * @constructor
 * @param scene - Reference to MyScene object
 * @param x - Scale of rectangle in X
 * @param y - Scale of rectangle in Y
 */
class MyStick extends ObjectGroup {
	constructor(scene, x, z, bird) {
		super(scene);
		this.x = x
		this.z = z
		this.mainBranch = new MyCilinder(scene, 6);
		this.mainBranch.translate(0, -0.5, 0)
		this.mainBranch.scale(0.2, 1.5, 0.2);
		this.mainBranch.rotate(Math.PI / 2, 1, 0, 0)

		this.secondaryBranch = new MyCilinder(scene,6)
		this.secondaryBranch.scale(0.09, 0.75, 0.09);
		this.secondaryBranch.rotate(Math.PI / 2, 1, 0, 0)
		this.secondaryBranch.rotate(-Math.PI / 4, 0, 1, 0)

		this.leaf = new MySphere(scene, 8, 15, 0.1)
		this.leaf.scale(2, 0.3, 3)
		this.leaf.rotate(-Math.PI/4,0,1,0)
		this.leaf.translate(-0.7, 0, 0.7)

		this.angle = Math.random() * Math.PI

		if(Math.random()>0.6)
			this.addObjects(this.mainBranch,this.secondaryBranch,this.leaf)
		else this.addObjects(this.mainBranch)

		this.bird = bird
		this.state = 'grounded'

		this.setPos(this.x, 4, this.z)
		this.setAngle(0, this.angle, 0)
	}

	update() {
		if (this.state == 'birded') {
			this.setPos(this.bird.beakPos[0],this.bird.beakPos[1],this.bird.beakPos[2])
			this.setAngle(null, this.bird.birdAngle + Math.PI / 2, null)
		}
	}

	checkColision(bird) {
		if (this.state == 'grounded') {
			this.bird = bird
			if (Math.abs(bird.pos[0] - this.x) < 2.5 && Math.abs(bird.pos[2] - this.z) < 2.5) {
				this.state = 'birded'
				return true
			}
		}
		return false
	}

	land() {
		this.state = 'nested'
		this.setPos(this.bird.beakPos[0], 4.5, this.bird.beakPos[2])
		this.setAngle(0, this.bird.birdAngle + Math.PI / 2, 0)
	}

	setBranchTexture(texture){
		this.mainBranch.setTexture(texture)
		this.secondaryBranch.setTexture(texture)
	}
	setLeafTexture(texture){
		this.leaf.setTexture(texture)
	}
}
