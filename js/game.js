import MainScene from './scene.js'

const config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'game-canvas',
    scene: [],
    backgroundColor: '#0000',
    pixelArt: true
}

new Phaser.Game(config);