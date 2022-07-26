import Phaser from 'phaser';

class PlayScene extends Phaser.Scene {

  constructor(config) {
    super('Play Scene');
    this.config = config;

    this.bird = null;
  }

  preload() {
    this.load.image('bird', 'assets/bird.png');
    this.load.image('pipe', 'assets/pipe.png');
  }

  create() {
    this.add.image(0, 0, 'sky').setOrigin(0);
    this.bird = this.physics.add.image(this.config.startPosition.x, this.config.startPosition.y, 'bird').setOrigin(0);
    this.bird.body.gravity.y = 400;
  }

  update() {
      
  }
}

export default PlayScene;