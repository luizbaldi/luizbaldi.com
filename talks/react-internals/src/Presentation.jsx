import React from 'react'
import { theme, colors } from './style-guide'

/* spectacle components */
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Image,
  Layout,
  Fill,
  Fit
} from 'spectacle'

/* images */
const narutoBg = 'https://media.giphy.com/media/ohT97gdpR40vK/giphy.gif'
const clapsBg = 'https://media.giphy.com/media/F2WFyAfpfVfFe/giphy.gif'

const defaultTransition = ['slide', 'fade']

const Presentation = () => (
  <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
    <Slide transition={['zoom']} bgColor={colors.primary}>
      <Heading size={1} fit caps lineHeight={1} textColor={colors.black}>
        Your amazing talk title here!
      </Heading>
      <Text padding='24' textColor={colors.blue}>
        by -
        <i> your name here</i>
      </Text>
    </Slide>
    <Slide
      transition={defaultTransition}
      bgColor={colors.blue}
      bgImage={narutoBg}
      bgDarken={0.82}
    >
      <Text textColor={colors.primary} padding='28' textSize='2em'>
        Who's talking:
      </Text>
      <Text textColor={colors.grey} padding='12' textSize='2.8em'>
        Front-end engineer
      </Text>
      <Text textColor={colors.grey} padding='12' textSize='2.8em' bold>
        JavaScript {'<3'}
      </Text>
    </Slide>
    <Slide
      transition={['slide']}
      bgColor={colors.primary}
      bgImage={clapsBg}
      align='flex-end flex-end'
    >
      <Heading size={2} caps lineHeight={1} textColor={colors.primary} textFont='secondary'>
        Thanks {'<3'}
      </Heading>
    </Slide>
  </Deck>
)

export default Presentation
