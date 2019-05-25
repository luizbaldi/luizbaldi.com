export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export const getRandomValues = () => {
  const { backgroundColor, particlesColor } = randomGenerator.colors()
  const particlesValue = randomGenerator.particlesValue()
  const sizeValue = randomGenerator.sizeValue()

  return { backgroundColor, particlesColor, particlesValue, sizeValue }
}

export const randomGenerator = {
  particlesValue() {
    return getRandomInt(30, 80)
  },

  colors() {
    const matchingColors = [
      {
        backgroundColor: '#b15b77',
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
        backgroundColor: '#3a6f6f',
        particlesColor: '#ffffff'
      },
      {
        backgroundColor: '#171717',
        particlesColor: '#fafafa'
      }
    ]

    return matchingColors[getRandomInt(0, matchingColors.length - 1)]
  },

  sizeValue() {
    return getRandomInt(2, 8)
  }
}
