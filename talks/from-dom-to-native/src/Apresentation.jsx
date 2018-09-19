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
const rnBg = 'https://i.imgur.com/uq5th3R.png'
const wowBg = 'https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif'
const reactWebRenderImg = 'https://i.imgur.com/lKoWrT8.png'
const reactNativeRenderImg = 'https://i.imgur.com/gMS3GN1.png'
const clapsBg = 'https://media.giphy.com/media/F2WFyAfpfVfFe/giphy.gif'

const defaultTransition = { transition: ['slide', 'fade'] }

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
        <Appear>
          <Text padding='12' textColor={colors.primary}>- React (intro)</Text>
        </Appear>
        <Appear>
          <Text padding='12' textColor={colors.primary}>- Experiência de desenvolvimento</Text>
        </Appear>
        <Appear>
          <Text padding='12' textColor={colors.primary}>
            - Arquitetura
            <Text textColor={colors.grey} textSize='22' italic>
              React Web (DOM) e React Native
            </Text>
          </Text>
        </Appear>
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
                Cuida da UI Tree
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
    <Slide {...defaultTransition} bgColor={colors.green}>
      <Text padding='0 0 22px 0' textColor={colors.primary}>React-DOM</Text>
      <Appear>
        <Text padding='12' textColor={colors.primary} textSize='30'>Mono-repo no início</Text>
      </Appear>
    </Slide>
    <Slide {...defaultTransition} bgColor={colors.green}>
      <Heading size={1} caps fit textColor="primary" textFont='secondary'>
        Surge o React Native (2014)
      </Heading>
      <Appear>
        <Text padding='12' textColor={colors.primary} textSize='30' padding='32'>O React precisa saber sobre a renderização no DOM?</Text>
      </Appear>
      <Appear>
        <Text padding='12' textColor={colors.primary} textSize='30'>Ocorre a separação do repositório (react-dom)</Text>
      </Appear>
      <Appear>
        <Text padding='12' textColor={colors.primary} textSize='30'>Desacoplamento</Text>
      </Appear>
    </Slide>
    <Slide
      {...defaultTransition}
      bgColor={colors.primary}
      bgImage={webBg}
      bgDarken={0.9}
    >
      <Heading size={1} caps textColor="primary" textFont='secondary'>
        Umas coisas legais sobre a Web
      </Heading>
    </Slide>
    <Slide
      bgColor={colors.pink}
      {...defaultTransition}
      bgImage={browsersBg}
      bgDarken={0.2}
      align='flex-end flex-end'
    >
      <Heading size={2} caps textColor={colors.pink} textFont='secondary'>
        Baráusers
      </Heading>
    </Slide>
    <Slide  bgColor={colors.green}>
      <Text padding='12' textColor={colors.primary}>JS Engines</Text>
      <Appear>
        <Image src={jsEnginesImg} style={{ objectFit: 'contain' }} />
      </Appear>
    </Slide>
    <Slide {...defaultTransition} bgColor={colors.pink}>
      <Text textColor={colors.primary} padding='26' textFont='secondary'>Beleza mas o que as engines fazem?</Text>
      <Appear>
        <Text textColor={colors.primary} padding='26'>- Code parsing (to bytecode)</Text>
      </Appear>
      <Appear>
        <Text textColor={colors.primary}>- Optimization</Text>
      </Appear>
    </Slide>
    <Slide bgColor={colors.green} bgImage={rnBg} />
    <Slide {...defaultTransition} bgColor={colors.black}>
      <Heading size={4} caps lineHeight={1} textColor={colors.pink} textFont='secondary'>
        Trazer o que a web tem de melhor pro desenvolvimento nativo
      </Heading>
    </Slide>
    <Slide {...defaultTransition} bgColor={colors.black}>
      <Heading size={4} caps lineHeight={1} textColor={colors.pink} textFont='secondary'>
        FAQ
      </Heading>
      <Text textColor={colors.grey} padding='26' textSize='22'>Sem muito code pelo tempo :(</Text>
      <Text textAlign='left'>
        <Appear>
          <Text textColor={colors.primary} padding='26'>- No WebView (thanks god)</Text>
        </Appear>
        <Appear>
          <Text textColor={colors.primary} padding='26'>- No HTML</Text>
        </Appear>
        <Appear>
          <Text textColor={colors.primary} padding='26'>- No CSS (style but not cascading)</Text>
        </Appear>
      </Text>
    </Slide>
    <Slide {...defaultTransition} bgColor={colors.black}>
      <Heading size={4} lineHeight={1} textColor={colors.pink} textFont='secondary'>
        Pontos em comum
      </Heading>
      <Text textAlign='left'>
        <Appear>
          <Text textColor={colors.primary} padding='26'>- Same debugger (Chrome DevTools FTW)</Text>
        </Appear>
        <Appear>
          <Text textColor={colors.primary} padding='26'>- Flexbox {'<3'}</Text>
        </Appear>
        <Appear>
          <Text textColor={colors.primary} padding='26'>- Mesma filosofia (only React and JavaScript bro)</Text>
        </Appear>
        <Appear>
          <Text textColor={colors.primary} padding='26'>- State management libs (Ex: Mobx e Redux)</Text>
        </Appear>
      </Text>
    </Slide>
    <Slide {...defaultTransition} bgColor={colors.black}>
      <Heading size={4} lineHeight={1} textColor={colors.pink} textFont='secondary'>
        Pontos em incomum
      </Heading>
      <Text textAlign='left'>
        <Appear>
          <Text textColor={colors.primary} padding='26'>
            - Entender que se trata de outra plataforma
          </Text>
        </Appear>
        <Appear>
          <Text textColor={colors.primary} padding='26'>
            - Saber o básico dos softwares para desenvolvimento nativo (Android Studio e XCode)
          </Text>
        </Appear>
      </Text>
    </Slide>
    <Slide transition={['fade']} bgColor={colors.black}>
      <Image src={reactWebRenderImg} style={{ objectFit: 'contain' }} />
    </Slide>
    <Slide transition={['fade']} bgColor={colors.black}>
      <Image src={reactNativeRenderImg} style={{ objectFit: 'contain' }} />
    </Slide>
    <Slide {...defaultTransition} bgColor={colors.pink}>
      <Text textColor={colors.primary} padding='26'>
        Então você ta falando que é suave ir da Web pro nativo?
      </Text>
    </Slide>
    <Slide
      {...defaultTransition}
      bgColor={colors.primary}
      bgImage={wowBg}
    >
      <Heading size={4} caps lineHeight={1} textColor={colors.primary} textFont='secondary'>
        Sim
      </Heading>
    </Slide>
    <Slide
      transition={["slide"]}
      bgColor={colors.primary}
      bgImage={clapsBg}
      align='flex-end flex-end'
    >
      <Heading size={2} caps lineHeight={1} textColor={colors.primary} textFont='secondary'>
        Muito obrigado {'<3'}
      </Heading>
    </Slide>
  </Deck>
)

export default Apresentation
