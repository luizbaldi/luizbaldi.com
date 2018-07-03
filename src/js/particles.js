const appParticles = {
  getDefaultOptions() {
    return {
      retina_detect: true,
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 1,
            "color": "#fafafa"
          },
          "polygon": {
            "nb_sides": 4
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.4,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 10,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 2,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 15,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 110,
          "color": "#fafafa",
          "opacity": 0.6,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 4,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      }
    }
  },

  init() {
    const options = this.getDefaultOptions()

    this.getParticlesEl().style.backgroundColor = 'darkslategray'

    const particlesInstance = particlesJS('particles', options)
  },

  generate({ backgroundColor, particlesColor }, particlesValue, sizeValue) {
    const options = this.getDefaultOptions()

    options.particles.number.value = particlesValue
    options.particles.color.value = particlesColor
    options.particles.size.value = sizeValue

    particlesJS('particles', options)

    /* Background color */
    this.getParticlesEl().style.backgroundColor = backgroundColor
  },

  getParticlesEl() {
    return document.getElementById('particles')
  }
}