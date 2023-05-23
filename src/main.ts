import Phaser from "phaser"

// import scenes here
import Game from './scenes/Game'

const config: Phaser.Types.Core.GameConfig = {
  scale: {
    mode: Phaser.Scale.ScaleModes.RESIZE,
    parent: 'app',
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [Game]
}

export default new Phaser.Game(config)

