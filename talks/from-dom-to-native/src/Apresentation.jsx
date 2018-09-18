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
const reactImg = 'https://i.imgur.com/F5rPWQz.png'
const domTreeImg = 'https://i.imgur.com/Wg7ukCZ.gif'
const webBg = 'https://i.imgur.com/fPmGIAc.jpg'
const browsersBg = 'https://i.imgur.com/ASQf6wv.jpg'
const jsEnginesImg = 'https://i.imgur.com/ZFdznV1.png'
const narutoBg = 'https://media.giphy.com/media/ohT97gdpR40vK/giphy.gif'

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
      bgImage={narutoBg}
      bgDarken={0.82}
    >
      <Text textColor={colors.primary} padding="28" textSize='26'>Este que vos fala:</Text>
      <Text textColor={colors.grey} padding="12" textSize='34'>Front-end engineer</Text>
      <Text textColor={colors.grey} padding="12" textSize='34'>@MaxMilhas</Text>
      <Text textColor={colors.grey} padding="12" textSize='34' bold>JavaScript {'<3'}</Text>
    </Slide>
    <Slide transition={["slide"]} bgColor={colors.pink}>
      <Text padding="0 0 40px 0" textColor={colors.grey} textSize={28} italic>Overview</Text>
      <Text textAlign='left'>
        <Text padding='12' textColor={colors.primary}>- React (intro)</Text>
        <Text padding='12' textColor={colors.primary}>
          - Arquitetura e experiência de desenvolvimento
          <Text textColor={colors.grey} textSize='22' italic>
            React Web (DOM) e React Native
          </Text>
        </Text>
        {/* <Text padding='12' textColor={colors.primary}>Mindset</Text> */}
        <Text padding='12' textColor={colors.primary} italic>- To infinity, and beyond 🚀</Text>
      </Text>
    </Slide>
    <Slide transition={["slide"]} bgColor={colors.primary}>
      <Layout>
        <Fit>
          <div style={{ width: '380px', marginTop: 22 }}>
            <Text textColor={colors.blue} padding="22" textSize='34'>
              O <i>jovem</i> React...
            </Text>
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
                Cuida da UI
                <Text textSize='20' textColor={colors.grey} textAlign='center'>(somente)</Text>
              </Text>
            </Appear>
            <Appear>
              <Text padding='16' textColor={colors.blakc} textAlign='center' italic>
                CBA
                <Text textSize='20' textColor={colors.grey} textAlign='center'>(Component-based architecture)</Text>
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
        <Text padding='12' textColor={colors.primary} textSize='30'>Mono-repo no início</Text>
      </Appear>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor={colors.green}>
      <Heading size={1} caps fit textColor="primary">
        Separação do repositório
      </Heading>
      <Text padding='0 0 22px 0' textColor={colors.primary} italic>(react-dom)</Text>
    </Slide>
    <Slide
      bgColor={colors.primary}
      bgImage={webBg}
      bgDarken={0.9}
      transition={['slide', 'fade']}
    >
      <Heading size={1} caps fit textColor="primary" textFont='secondary'>
        Web
      </Heading>
      <Text padding='0 0 22px 0' textColor={colors.primary} italic>Ambiente de desenvolvimento</Text>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor='white'>
      <img src={domTreeImg} />
      <Text textSize='20' textColor={colors.grey} padding='30'>
        Eu sei que todo mundo tá cansado dessa imagem mas...
      </Text>
    </Slide>
    <Slide
      bgColor={colors.pink}
      transition={['slide', 'fade']}
      bgImage={browsersBg}
      bgDarken={0.2}
      align='flex-end flex-end'
    >
      <Heading size={2} caps textColor={colors.pink} textFont='secondary'>
        Baráusers
      </Heading>
    </Slide>
    <Slide transition={['slide', 'fade']} bgColor={colors.green}>
      <Text padding='12' textColor={colors.primary} textSize='30'>JS Engine</Text>
      <Appear>
        <Image src={jsEnginesImg} style={{ objectFit: 'contain' }} />
      </Appear>
    </Slide>
    <Slide
      transition={["slide"]}
      bgColor={colors.primary}
      align='flex-end flex-end'
    >
      <Text textColor={colors.pink} textSize={26} padding={22}>{'<3'}</Text>
    </Slide>
  </Deck>
)

export default Apresentation
