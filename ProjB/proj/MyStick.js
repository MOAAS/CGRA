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
		this.cilinder = new MyCilinder(scene, 6);
		this.cilinder.translate(0, -0.5, 0)
		this.cilinder.scale(0.2, 1.5, 0.2);
		this.cilinder.rotate(Math.PI / 2, 1, 0, 0)

		this.angle = Math.random() * Math.PI
		//this.cilinder.rotate(this.angle, 0, 1, 0)

		//this.cilinder.translate(x, 4, z)
		//this.setPos(this.x,4,this.z)

		let material = new MyCGFappearance(this.scene, 0.7, 0.8, 0.6)
		material.setColor(70, 30, 30)
		this.cilinder.setMaterial(material)

		this.addObjects(this.cilinder)

		this.bird = bird
		this.state = 'grounded'

		this.setPos(this.x, 4, this.z)
		this.setAngle(0, this.angle, 0)
	}

	update() {
		if (this.state == 'birded') {
			this.setPos(this.bird.beakPos[0],this.bird.beakPos[1],this.bird.beakPos[2])
			this.setAngle(0, this.bird.birdAngle + Math.PI / 2, 0)
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
		this.setAngle(0, this.bird.birdAngle + Math.PI / 2, 0)
	}
}
