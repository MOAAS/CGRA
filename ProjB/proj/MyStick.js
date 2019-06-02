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
		this.x = x	//guardar a posicao do ramo para depois poder verificar colisoes
		this.z = z
		this.mainBranch = new MyCilinder(scene, 6); //parte principal do ramo
		this.mainBranch.translate(0, -0.5, 0)
		this.mainBranch.scale(0.2, 1.5, 0.2);
		this.mainBranch.rotate(Math.PI / 2, 1, 0, 0)

		this.secondaryBranch = new MyCilinder(scene,6)	//ramo secundario
		this.secondaryBranch.scale(0.09, 0.75, 0.09);
		this.secondaryBranch.rotate(Math.PI / 2, 1, 0, 0)
		this.secondaryBranch.rotate(-Math.PI / 4, 0, 1, 0)

		this.leaf = new MySphere(scene, 8, 15, 0.1)	//folha do ramo secundario
		this.leaf.scale(2, 0.3, 3)
		this.leaf.rotate(-Math.PI/4,0,1,0)
		this.leaf.translate(-0.7, 0, 0.7)

		this.angle = Math.random() * Math.PI //angulo no chao á sorte

		if(Math.random()>0.6) //apenas 40% dos ramos teem ramo secundario e folha
			this.addObjects(this.mainBranch,this.secondaryBranch,this.leaf)
		else this.addObjects(this.mainBranch) 

		this.state = 'grounded' //estado do ramo

		this.setPos(this.x, 4, this.z)
		this.setAngle(0, this.angle, 0)
	}

	update() {
		if (this.state == 'birded') { //apenas precisa de mudar de posicao se estiver no passaro
			this.setPos(this.bird.beakPos[0],this.bird.beakPos[1],this.bird.beakPos[2]) //posicao do bico do passaro
			this.setAngle(null, this.bird.birdAngle + Math.PI / 2, null) //angulo em y do passaro
		}
	}

	checkColision(bird) {
		if (this.state == 'grounded') { //o passaro so pode apanha-lo se estiver no chao
			this.bird = bird
			if (Math.abs(bird.pos[0] - this.x) < 2.5 && Math.abs(bird.pos[2] - this.z) < 2.5) { //verificar se esta perto
				this.state = 'birded' //se tiver, mudar o estado para birded
				return true
			}
		}
		return false
	}

	land() {
		this.state = 'nested' //mudar o estado para nested, para nao poder ser apanhado novamente
		this.setPos(this.bird.beakPos[0], 4.5, this.bird.beakPos[2]) //coloca-lo na posicao do bico do passaro
		this.setAngle(0, this.bird.birdAngle + Math.PI / 2, 0)
	}

	setBranchTexture(texture){ //textura dos ramos
		this.mainBranch.setTexture(texture)
		this.secondaryBranch.setTexture(texture)
	}
	setLeafTexture(texture){ //textura da folha
		this.leaf.setTexture(texture)
	}
}
