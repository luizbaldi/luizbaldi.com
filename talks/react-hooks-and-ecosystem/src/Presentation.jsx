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
  Fit,
  Code
} from 'spectacle'

/* gifs */
const narutoBg = 'https://media.giphy.com/media/ohT97gdpR40vK/giphy.gif'
const thanksBg = 'https://media.giphy.com/media/QNagS57sbUws8/giphy.gif'
const excitedBg = 'https://media.giphy.com/media/rVbAzUUSUC6dO/giphy.gif'
const thinkingBg = 'https://media.giphy.com/media/TPl5N4Ci49ZQY/giphy.gif'
const useWindowSizeVideo = 'https://www.useloom.com/share/4fb42d30080d46a99f3408bb418474a5'

/* images */
const statefulClassCounter = require('./assets/stateful-class-counter.png')
const statefulCounter = require('./assets/stateful-counter.png')
const statelessCounter = require('./assets/stateless-counter.png')
const reactInternalHooks = require('./assets/react-internal-hooks.png')
const statefulEffectCounter = require('./assets/stateful-effect-counter.png')
const useWindowSize = require('./assets/useWindowSize.png')
const useWindowSizeExample = require('./assets/useWindowSizeExample.png')

const defaultTransition = ['slide', 'fade']

const Presentation = () => (
  <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme} progress='none'>
    <Slide transition={['zoom']} bgColor={colors.primary}>
      <Heading size={1} fit caps lineHeight={1} textColor={colors.black}>
        Entendendo React Hooks
      </Heading>
      <Heading size={2} fit caps lineHeight={1} textColor={colors.black}>
        e seu impacto no ecossistema
      </Heading>
      <Text padding='24' textColor={colors.blue}>
        por Luiz Baldi
      </Text>
    </Slide>
    <Slide
      transition={defaultTransition}
      bgColor={colors.blue}
      bgImage={narutoBg}
      bgDarken={0.82}
    >
      <Text textColor={colors.primary} padding='28' textSize='2em'>
        Quem vos fala:
      </Text>
      <Text textColor={colors.grey} padding='12' textSize='2.8em'>
        Desenvolvedor frontend
      </Text>
      <Text textColor={colors.grey} padding='12' textSize='2.8em' bold>
        JavaScript {'<3'}
      </Text>
      <Text textColor={colors.grey} padding='12' textSize='1em'>
        Terminei Naruto Shippuden!
      </Text>
      <Text textColor={colors.grey} padding='12' textSize='1em'>
        <i>Remote at @Divisio</i>
      </Text>
    </Slide>
    <Slide transition={defaultTransition}>
      <Text textColor={colors.black} textSize='1em' margin='30px'>
        conceitos importantes
      </Text>
      <Appear>
        <div>
          <Text>stateful components</Text>
          <Text textColor={colors.pink} textSize='1em' margin='30px'>
            x
          </Text>
          <Text>stateless components</Text>
          <Appear>
            <div>
              <Text textColor={colors.pink} textSize='1em' margin='30px'>
                x
              </Text>
              <Code>functional</Code>
            </div>
          </Appear>
        </div>
      </Appear>
    </Slide>
    <Slide>
      <Text>vamos pensar de forma simples...</Text>
      <Text>um componente de contador</Text>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.black}>
      <Text textColor={colors.grey} textSize='1em' margin='30px'>
        class based component
      </Text>
      <Appear>
        <Image src={statefulClassCounter} style={{ objectFit: 'contain', maxHeight: '75vh' }} />
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.black}>
      <Text textColor={colors.grey} textSize='1em' margin='30px'>
        functional counter (stateless)
      </Text>
      <Appear>
        <Image src={statelessCounter} style={{ objectFit: 'contain' }} />
      </Appear>
    </Slide>
    <Slide
      transition={defaultTransition}
      bgImage={excitedBg}
    />
    <Slide transition={defaultTransition} bgColor={colors.black}>
      <Text textColor={colors.grey} textSize='1em' margin='30px'>
        stateful functional component
      </Text>
      <Image src={statefulCounter} style={{ objectFit: 'contain' }} />
      <Appear>
        <Text textColor={colors.grey} textSize='1em' margin='30px'>
          <i>(no classes)</i>
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.black}>
      <Text textColor={colors.grey} textSize='1em' margin='30px'>
        e hooks vai MUITO além do estado...
      </Text>
      <Appear>
        <Image src={reactInternalHooks} style={{ objectFit: 'contain' }} />
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.green}>
      <Text textColor={colors.primary}>
        agora podemos usar as features do React em functional components!!!
      </Text>
      <Text textColor={colors.grey} textSize='1em' margin='30px'>
        só isso, é sério.
      </Text>
    </Slide>

    <Slide
      transition={defaultTransition}
      bgColor={colors.pink}
    >
      <Text textColor={colors.grey} textSize='1.5em'>e sim, existem motivos</Text>
      <Appear>
        <div>
          <Text margin='40px 0 0 0' textColor={colors.primary}>
            uma alternativa para os stateful components
          </Text>
          <Text textSize='1em' textColor={colors.grey} margin='12px 0 0 0'>
            <i>atualmente só temos <strong>*classes*</strong></i>
          </Text>
        </div>
      </Appear>
      <Appear>
        <div>
          <Text margin='40px 0 0 0' textColor={colors.primary}>
            simplificar a lógica de componentes complexos
          </Text>
          <Text textSize='1em' textColor={colors.grey} margin='12px 0 0 0'>
            (confia)
          </Text>
        </div>
      </Appear>
    </Slide>
    <Slide
      transition={defaultTransition}
      bgColor={colors.pink}
    >
      <Text margin='40px' textColor={colors.primary} fit>
        sim, é uma feature deveras <i>audaciosa</i>
      </Text>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.blue}>
      <Text textColor={colors.primary} textSize='1em' margin='30px'>
        coisas legais
      </Text>
      <Appear>
        <div>
          <Text margin='40px 0 0 0' textColor={colors.primary}>
            simplifica padrões complexos como HOC’s e render props
          </Text>
          <Text textSize='1em' textColor={colors.primary} margin='12px 0 0 0'>
            <i>hooks não criam “falsas hierarquias” na árvore</i>
          </Text>
        </div>
      </Appear>
      <Appear>
        <div>
          <Text margin='40px 0 0 0' textColor={colors.primary}>
            flexibilidade
          </Text>
          <Text textSize='1em' textColor={colors.primary} margin='12px 0 0 0'>
            <i>combinações</i>
          </Text>
        </div>
      </Appear>
      <Appear>
        <Text margin='40px 0 0 0' textColor={colors.primary}>
          ciclos de vida modularizados
        </Text>
      </Appear>
      <Appear>
        <Text margin='40px 0 0 0' textColor={colors.primary}>
          funciona em qualquer plataforma (renderer agnostic)
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.grey}>
      <Text textColor={colors.pink} textSize='1em' margin='30px'>
        coisas não legais :(
      </Text>
      <Appear>
        <Text margin='40px 0 0 0' textColor={colors.pink}>
          sintaxe estranha no início
        </Text>
      </Appear>
      <Appear>
        <Text textSize='1em' textColor={colors.pink} margin='18px 0 0 0'>
          acostumem-se com o <i>use</i> que vai vir pra todo lado!
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.blue}>
      <Text textColor={colors.grey} textSize='1em' margin='30px'>
        basic hooks
      </Text>
      <Appear>
        <Text textColor={colors.primary} margin='30px'>
          useState (geral já sabe heheh)
        </Text>
      </Appear>
      <Appear>
        <Text textColor={colors.primary} margin='30px'>
          useEffect -> simplifica os métodos do ciclo de vida
        </Text>
      </Appear>
      <Appear>
        <Text textColor={colors.primary} margin='30px'>
          useContext -> mais uma forma de usar Context (sem render props)
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition}>
      <Text margin='30px' textSize='1.5em'>useEffect</Text>
      <Appear>
        <Text fit textColor={colors.pink}>
          simplifica os métodos de ciclo de vida
        </Text>
      </Appear>
      <Appear>
        <Text fit textColor={colors.pink} margin='32px'>
          componentDidMount + componentDidUpdate + componentWillMount
        </Text>
      </Appear>
      <Appear>
        <Text fit textColor={colors.pink}>
          um único hook, mais simplicidade
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.black}>
      <Image src={statefulEffectCounter} style={{ objectFit: 'contain' }} />
    </Slide>
    <Slide transition={defaultTransition}>
      <Text textColor={colors.black} textSize='1em' margin='30px'>
        pontos muito interessantess
      </Text>
      <Appear>
        <Text textColor={colors.pink} margin='30px'>
          controle dos métodos de ciclo de vida através do segundo parâmetro
        </Text>
      </Appear>
      <Appear>
        <Text textColor={colors.pink}>
          <i><strong>modularização</strong></i> dos métodos de ciclo de vida
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.pink}>
      <Text textColor={colors.primary} fit>
        um dos pontos mais importantes sobre hooks:
      </Text>
      <Text textColor={colors.primary} margin='40px'>
        podemos criar nossos próprios hooks!!
      </Text>
      <Text textColor={colors.grey} textSize='1em'>
        são os chamados <i>"custom hooks"</i>
      </Text>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.black}>
      <Image src={useWindowSize} style={{ objectFit: 'contain', maxHeight: '80vh' }} />
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.black}>
      <Image src={useWindowSizeExample} style={{ objectFit: 'contain', maxHeight: '80vh' }} />
    </Slide>
    <Slide
      transition={defaultTransition}
      bgImage={thinkingBg}
    />
    <Slide transition={defaultTransition} bgColor={colors.blue}>
      <Text textColor={colors.primary}>beleza mas... e as libs de manipulação de estado?</Text>
      <Appear>
        <div>
          <Text textSize='1em' textColor={colors.grey} margin='30px 0 0 0'>
            <i>demorei pra car$!@#$ pra aprender Redux e tu vem com essa?</i>
          </Text>
          <Text textSize='1em' textColor={colors.grey} margin='40px 0 0 0'>
            <i>...mas mobx é tão daora</i>
          </Text>
        </div>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.green}>
      <Text textColor={colors.primary}>cada caso é um caso, simples assim :)</Text>
      <Appear>
        <Text textSize='1em' textColor={colors.grey} margin='12px 0 0 0'>
          <i>ninguém é obrigado a sair migrando tudo pra hooks</i>
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.pink}>
      <Text textSize='1em' textColor={colors.grey}>importante ressaltar</Text>
      <Appear>
        <Text textSize='1.5em' textColor={colors.primary} margin='40px 0 0 0'>
          não refatorem o código inteiro para hooks (calma)
        </Text>
      </Appear>
      <Appear>
        <div>
          <Text textSize='1.5em' textColor={colors.primary} margin='40px 0 0 0'>
            hooks são totalmente opcionais
          </Text>
          <Text textSize='1.2em' textColor={colors.grey} margin='18px 0 0 0'>
            <i>no breaking changes</i>
          </Text>
        </div>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.blue}>
      <Text textColor={colors.primary}>
        <strong>
          a comunidade simplesmente vem{' '}
          <span style={{ color: colors.pink, backgroundColor: '#7cd3ff' }}> amando </span>
          {' '}Hooks
        </strong>
      </Text>
      <Appear>
        <Text textSize='1em' margin='40px' textColor={colors.primary}>
          então... usem e tirem suas próprias conclusões!
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.blue}>
      <Text textColor={colors.primary}>
        <strong>
          e sim, estamos vivendo um período de grande transformaçào e evolução no React :)
        </strong>
      </Text>
    </Slide>
    <Slide
      transition={defaultTransition}
      bgColor={colors.primary}
      bgImage={thanksBg}
      align='flex-end flex-end'
    >
      <Heading size={4} lineHeight={1} textColor={colors.primary} margin='0 0 40px 0'>
        thanks {'<3'}
      </Heading>
    </Slide>
  </Deck>
)

export default Presentation


