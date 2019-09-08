import 'particles.js'

import { init as initParticles } from './particles'
import { init as initTyped } from './typed'
import startAnimationListeners from './animation'

window.onload = () => {
  initParticles()
  initTyped()
  startAnimationListeners()
}
