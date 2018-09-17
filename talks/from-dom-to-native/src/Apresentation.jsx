import React, { Fragment } from 'react'
import { theme, colors } from './config/theme'

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
} from "spectacle"

/* images */
import reactImg from './assets/react.png'
import domTreeImg from './assets/dom-tree.gif'

const Apresentation = () => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
    <Slide transition={["zoom"]} bgColor={colors.primary} >
      <Heading size={1} fit caps lineHeight={1} textColor={colors.black}>
        React - Do DOM ao Native
      </Heading>
      <Text padding="24" textColor={colors.blue}>
        Por Luiz Baldi
      </Text>
    </Slide>
    <Slide
      transition={["slide"]}
      bgColor={colors.blue}
      bgImage='https://media.giphy.com/media/ohT97gdpR40vK/giphy.gif'
      bgDarken={0.82}
    >
      <Text textColor={colors.primary} padding="28" textSize='26'>Este que vos fala:</Text>
      <Text textColor={colors.grey} padding="12" textSize='34'>Front-end engineer</Text>
      <Text textColor={colors.grey} padding="12" textSize='34'>@MaxMilhas</Text>
      <Text textColor={colors.grey} padding="12" textSize='34' bold>JavaScript {'<3'}</Text>
    </Slide>
    <Slide transition={["slide"]} bgColor={colors.pink}>
      <Text padding="0 0 40px 0" textColor={colors.grey} textSize={28} italic>Overview</Text>
      <List>
        <ListItem padding='12' textColor={colors.primary}>React (intro)</ListItem>
        <ListItem padding='12' textColor={colors.primary}>React Web (DOM)</ListItem>
        <ListItem padding='12' textColor={colors.primary}>React Native (Mobile)</ListItem>
        <ListItem padding='12' textColor={colors.primary}>Mindset</ListItem>
      </List>
    </Slide>
    <Slide transition={["slide"]} bgColor={colors.primary}>
      <Layout>
        <Fit>
          <div style={{ width: '350px' }}>
            <Text textColor={colors.blue} padding="22" textSize='34'>O <i>jovem</i> React</Text>
            <Image src={reactImg} height={240} style={{ objectFit: 'contain' }} />
          </div>
        </Fit>
        <Appear>
          <span style={{ borderLeft: '2px solid black', margin: '42px' }}></span>
        </Appear>
        <Fill>
          <List margin='22px 32px'>
            <Appear>
              <Text padding='16' textColor={colors.black} textAlign='center'>
                UI Tree
                <Text textSize='16' textColor={colors.grey} textAlign='center'>(somente)</Text>
              </Text>
            </Appear>
            <Appear>
              <Text padding='16' textColor={colors.pink} textAlign='center' italic>Renderer-agnostic</Text>
            </Appear>
          </List>
        </Fill>
      </Layout>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor={colors.green}>
      <Text padding='0 0 22px 0' textColor={colors.primary}>React-DOM</Text>
      <Appear>
        <Text padding='12' textColor={colors.primary} textSize='30'>No início do React...</Text>
      </Appear>
      <Appear>
        <Text padding='12' textColor={colors.primary} textSize='30'>Separação do repositório <i>(react-dom)</i></Text>
      </Appear>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor='white'>
      <img src={domTreeImg}/>
      <Text textSize='20' textColor={colors.grey} padding='30'>
        Eu sei que todo mundo tá cansado dessa imagem mas...
      </Text>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor={colors.green}>
      <Text padding='0 0 22px 0' textColor={colors.primary}>Web: Ambiente de desenvolvimento</Text>
      <Appear>
        <Text padding='12' textColor={colors.primary} textSize='30'>Browser</Text>
      </Appear>
      <Appear>
        <Text padding='12' textColor={colors.primary} textSize='30'>Engine (máquina virtual)</Text>
      </Appear>
    </Slide>
    <Slide
      transition={["slide"]}
      bgColor={colors.primary}
      bgImage="https://media.giphy.com/media/fv4tD2kW1PSgg/giphy.gif"
      align='flex-end flex-end'
    >
      <Text textColor={colors.pink} textSize={26} padding={22}>{'<3'}</Text>
    </Slide>
  </Deck>
)

export default Apresentation
