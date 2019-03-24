class MyCGFappearance extends CGFappearance {
    constructor(scene, amb, diff, spec, shininess) {
        super(scene);
        this.setAmbient(amb , amb , amb , 1.0);
        this.setDiffuse(diff , diff , diff , 1.0);
        this.setSpecular(spec , spec , spec , 1.0);
		this.setShininess(shininess);
    }
}