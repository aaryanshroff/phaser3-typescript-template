import Phaser from "phaser"
import Game from './scenes/Game'

const config: Phaser.Types.Core.GameConfig = {
  scale: {
    mode: Phaser.Scale.ScaleModes.RESIZE, // The game canvas will be resized to match that of the parent container
    parent: 'app', // The ID, or DOM node ID, of the DOM element into which the canvas created by the renderer will be injected
    autoCenter: Phaser.Scale.CENTER_BOTH // The canvas will be horizontally and vertically centered within its parent
  },
  scene: [Game] // The scene to start with
}

export default new Phaser.Game(config)

