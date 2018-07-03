const randomize = () => {
  const color = randomGenerator.colors()
  const particlesValue = randomGenerator.particlesValue()
  const sizeValue = randomGenerator.sizeValue()

  appParticles.generate(color, particlesValue, sizeValue)
}

const randomGenerator = {
  particlesValue() {
    return getRandomInt(30, 150)
  },

  colors() {
    const matchingColors = [
      {
        backgroundColor: 'palevioletred',
        particlesColor: '#ffefd5'
      },
      {
        backgroundColor: '#28587B',
        particlesColor: '#7F7CAF'
      },
      {
        backgroundColor: '#2E294E',
        particlesColor: '#C5D86D'
      },
      {
        backgroundColor: '#fafafa',
        particlesColor: '#000000'
      }
    ]

    return matchingColors[getRandomInt(0, matchingColors.length - 1)]
  },

  sizeValue() {
    return getRandomInt(2, 12)
  }
}

