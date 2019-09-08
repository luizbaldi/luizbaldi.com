import TweenMax from 'gsap/TweenMax'

const visibleProps = { opacity: 1, display: 'initial' }
const invisibleProps = { opacity: 0, display: 'none' }

const startAnimationListeners = () => {
  const talksLinkEl = document.getElementById('talks-link')
  const talksBackEl = document.getElementById('talks-back')

  talksLinkEl.addEventListener('click', openTalksPanel)
  talksBackEl.addEventListener('click', openBioPanel)
}

const openTalksPanel = () => {
  TweenMax.to('#bio', 0.8, invisibleProps)

  setTimeout(() => {
    TweenMax.to('#talks', 1, visibleProps)
  }, 800)
}

const openBioPanel = () => {
  TweenMax.to('#talks', 0.8, invisibleProps)

  setTimeout(() => {
    TweenMax.to('#bio', 1, visibleProps)
  }, 800)
}

export default startAnimationListeners
