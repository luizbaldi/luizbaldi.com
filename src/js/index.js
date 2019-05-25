import 'particles.js'

import { init as initParticles } from './particles'
import { init as initTyped } from './typed'

window.onload = () => {
  initParticles()
  initTyped()
}
