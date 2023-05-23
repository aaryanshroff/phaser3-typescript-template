import Phaser from "phaser"

const config: Phaser.Types.Core.GameConfig = {
  scale: {
    mode: Phaser.Scale.ScaleModes.RESIZE,
    parent: 'app',
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

export default new Phaser.Game(config)

