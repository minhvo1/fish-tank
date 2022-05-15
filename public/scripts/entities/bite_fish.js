class BiteFish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/bitefish.png';
    this.type = 1;
  }

  updateOneTick() {
    super.updateOneTick();
    let targets = this.tank.getProximateDenizens(this.position, 80);
    console.log(targets);
    for (let fish of targets) {
      if (fish.type === 0) {
        fish.kill();
      }
    }
  }
}
