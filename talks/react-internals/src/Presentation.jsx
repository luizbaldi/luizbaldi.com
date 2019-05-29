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
import narutoBg from './assets/narutoBg.gif';
import finalBg from './assets/finalBg.gif';
import mindBlowing from './assets/mindBlowing.gif';
import plotting from './assets/plotting.gif';
import conductor from './assets/conductor.gif';
import universe from './assets/universe.gif';

/* internal images */
const reactFiber = require('./assets/react-fiber.png')
const virtualDom = require('./assets/v-dom.png')
const commonReconciler = require('./assets/common-reconciler.png')
const reactNativeWindows = require('./assets/react-native-windows.png')
const reactBlessed = require('./assets/react-blessed.gif')
const react360 = require('./assets/react-360.png')
const reactPdf = require('./assets/react-pdf.png')
const reactTv = require('./assets/react-tv.png')
const virtualDomMeme = require('./assets/virtual-dom-meme.jpg')
const stackReconciliation = require('./assets/stack-reconciliation.png')
const fiberReconciliation = require('./assets/fiber-reconciliation.png')

const defaultTransition = ['slide', 'fade']

console.log('Fiber example: http://bit.ly/fiber-triangles')

const Presentation = () => (
  <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme} bgColor={colors.black} progress='none'>
    <Slide transition={['zoom']} bgColor={colors.white}>
      <Heading size={1} fit caps lineHeight={1} textColor={colors.black}>
        React internals
      </Heading>
      <Heading size={2} fit caps lineHeight={1} textColor={colors.black}>
        <i>fiber & custom renderers</i>
      </Heading>
      <Text padding='24' textColor={colors.blue}>
        por Baldi
      </Text>
    </Slide>
    <Slide
      transition={defaultTransition}
      bgColor={colors.blue}
      bgImage={narutoBg}
      bgDarken={0.82}
    >
      <Text textColor={colors.white} padding='28' textSize='1.5em'>
        Quem vos fala né
      </Text>
      <Appear>
        <Text textColor={colors.grey} padding='12' textSize='3em'>
          Desenvolvedor frontend
        </Text>
      </Appear>
      <Appear>
        <Text textColor={colors.grey} padding='12' textSize='3em' bold>
          JavaScript {'<3'}
        </Text>
      </Appear>
      <Appear>
        <Text textColor={colors.grey} padding='12' textSize='1.5em'>
          também curto umas breja e um lo-fi
        </Text>
      </Appear>
      <Appear>
        <Text textColor={colors.grey} padding='22' textSize='1.5em'>
          <i>remote at @Divisio</i>
        </Text>
      </Appear>
      <Appear>
        <Text textColor={colors.grey} padding='22' textSize='1.5em'>
          <i>@baldilp</i>
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.indigo}>
      <Text textColor={colors.white} padding='20' textSize='2em'>
        e hoje vamos refletir sobre como o React funciona <strong>internamente</strong> 😮
      </Text>
      <Appear>
        <Text textColor={colors.white} padding='20' textSize='1.5em'>
          <i>abordando o que é relevante</i>
        </Text>
      </Appear>
      <Appear>
        <Text textColor={colors.white} padding='20' textSize='1em'>
          <i>e sim, eu empolgo durante as talks</i>
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <Text textColor={colors.white} padding='20' textSize='2em'>
        o React saiu em 2013 e popularizou <strong>muito</strong> rápido
      </Text>
      <Appear>
        <div>
          <Text textColor={colors.white} padding='20px 0 0 0' textSize='1.5em'>
            - arquitetura baseada em componentes!
          </Text>
          <Text textColor={colors.white} textSize='1em' padding='0 0 20px 0'>
            <i>(desbancando os top players da época)</i>
          </Text>
        </div>
      </Appear>
      <Appear>
        <div>
          <Text textColor={colors.white} padding='20px 0 0 0' textSize='1.5em'>
            - virtual DOM <span role="img">🔥</span>
          </Text>
          <Text textColor={colors.white} textSize='1em' padding='0 0 20px 0'>
            <i>(operar no DOM é pesado)</i>
          </Text>
        </div>
      </Appear>
      <Appear>
        <Text textColor={colors.white} padding='20' textSize='1.5em'>
          - <strong>flexbilidade</strong>!
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor='#20232a'>
      <Text textColor={colors.white} padding='20' textSize='2em'>
        na versão 16 rola uma grande reescrita no <i>core</i>
      </Text>
      <Appear>
        <Text textColor={colors.white} padding='20' textSize='1.2em'>
          <i>Fiber é simplesmente o nome dessa reescrita</i>
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor='#20232a'>
      <Image
        src={reactFiber}
        style={{ objectFit: 'contain' }}
      />
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <Text textColor={colors.pearl} padding='20' textSize="1.5em">
        e qual foi a motivação por trás do Fiber?
      </Text>
      <Appear>
        <Text textColor={colors.pearl} padding='20' textSize="3em">
          PERFORMANCE! 🔥
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <Text textColor={colors.orange} padding='20' textSize='2em'>
        introduz um novo algoritmo de reconciliation
        <p><i>(ou diffing)</i></p>
      </Text>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <div style={{ display: 'inline-flex' }}>
        <Image
          src={virtualDom}
          style={{ objectFit: 'contain', borderRadius: 12 }}
        />
        <div style={{ marginLeft: 60 }}>
          <Appear>
            <Text textColor={colors.pearl} padding='20' textSize="1.5em">
              o virtual dom é uma representação do DOM utilizando um objeto na memória
            </Text>
          </Appear>
          <Appear>
            <Text textColor={colors.pearl} padding='20' textSize="1.2em">
              por isso “virtual” (<i>durp</i>)
            </Text>
          </Appear>
        </div>
      </div>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <Text textColor={colors.pearl} padding='20' textSize="1.5em">
        o interessante é que o DOM em si é uma abstração
      </Text>
      <Appear>
        <Image
          src={virtualDomMeme}
          style={{ objectFit: 'contain', borderRadius: 12, width: '70%' }}
        />
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.pearl}>
      <Text textColor={colors.darkBlue} padding='20' textSize="2em">
        então o react meio que <i>“tinha isso antes”</i>
      </Text>
      <Appear>
        <Text textColor={colors.darkBlue} padding='20' textSize="1.5em">
          sim, é importante deixar isso claro
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue} bgImage={conductor} bgDarken={0.5}>
      <Text textColor={colors.pearl} padding='20' textSize="2em">
        eu gosto de ver o Fiber como um grande orquestrador
      </Text>
      <Appear>
        <Text textColor={colors.pearl} padding='20' textSize="1.3em">
          ele organiza nossa querida e única thread
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.pink}>
      <Text textColor={colors.pearl} padding='20' textSize="2em">
        beleza, mas o que é esse algoritmo? 🤔
      </Text>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.orange}>
      <Text textColor={colors.darkBlue} padding='20' textSize="1.5em">
        se baseia em dois princípios:
      </Text>
      <Appear>
        <Text textColor={colors.darkBlue} padding='20 0 0 0' textSize="2em">
          assume que componentes de diferentes tipos vão gerar árvores diferentes
        </Text>
      </Appear>
      <Appear>
        <Text textColor={colors.darkBlue} padding='0 0 20 0' textSize="1.2em">
          tomar cuidado com isso
        </Text>
      </Appear>
      <Appear>
        <Text textColor={colors.darkBlue} padding='30' textSize="2em">
          o <Code>diffing</Code> em listas é performado através da prop <Code>key</Code>
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.orange}>
      <Text textColor={colors.darkBlue} padding='20' textSize='1.5em'>
        pra ficar claro, ele é simplesmente a implementação do <Code>virtual-dom</Code>
      </Text>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <Text textColor={colors.pearl} padding='20' textSize='1.5em'>
        antes o processo de render era síncrono
      </Text>
      <Text textColor={colors.pearl} padding='0 0 20px 0' textSize="1.2em">
        <i>não se podia interromper um update longo</i>
      </Text>
      <Appear>
        <div>
          <Text textColor={colors.pearl} padding='20' textSize='1.5em'>
            após o fiber, temos as <i>“unidades de trabalho”</i>
          </Text>
          <Text textColor={colors.pearl} padding='0 0 20px 0' textSize="1.2em">
            <i>(cada nó na sua árvore)</i>
          </Text>
        </div>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <Text textColor={colors.pearl} padding='20' textSize='2em'>
        renderização assíncrona
      </Text>
      <Appear>
        <Text textColor={colors.pearl} padding='20' textSize='1.5em'>
          o processo de render gira em torno de <i>prioridades</i>
        </Text>
      </Appear>
      <Appear>
        <div>
          <Text textColor={colors.pearl} padding='20px 0 0 0' textSize='1.5em'>
            é possivel pausar, continuar e reiniciar o trabalho em um componente
          </Text>
          <Text textColor={colors.pearl} textSize='1em' padding='0 0 20px 0'>
            <i>(unidade de trabalho resultado de um update)</i>
          </Text>
        </div>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <Text textColor={colors.pearl} padding='0 0 20px 0' textSize='1.5em'>
        stack reconciliation:
      </Text>
      <Image
        src={stackReconciliation}
        style={{ objectFit: 'contain', borderRadius: 12, width: '100%' }}
      />
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <Text textColor={colors.pearl} padding='0 0 20px 0' textSize='1.5em'>
        fiber reconciliation:
      </Text>
      <Image
        src={fiberReconciliation}
        style={{ objectFit: 'contain', borderRadius: 12, width: '100%' }}
      />
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.green}>
      <Text textColor={colors.white} padding='20' textSize='2em'>
        e isso tem um grande impacto!
      </Text>
      <Appear>
        <Text textColor={colors.white} padding='20px 0 0 0' textSize="1.2em">
          indiretamente fomos afetados "sem saber", isso é muito interessante
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.green}>
      <Text textColor={colors.white} padding='20px 0 0 0' textSize='2em'>
        lembram quando depreciaram alguns ciclos de vida?
      </Text>
      <Appear>
        <Text textColor={colors.white} padding='20px 0 0 0' fit>
          <i> componentWillMount, componentWillUpdate, componentWillReceiveProps</i>
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.indigo}>
      <Text textColor={colors.white} padding='20' textSize='2em'>
        eles podem ser disparados mais de uma vez
      </Text>
      <Text textColor={colors.white} padding='20' textSize='1.5em'>
        antes do componente ser renderizado de fato <i>(loucura bicho)</i>
      </Text>
      <Appear>
        <Text textColor={colors.white} padding='20' textSize='1.2em'>
          <i>ps: componentDidMount</i> e <i>componentDidUpdate</i> são chamados somente uma vez
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.blue}>
      <Text textColor={colors.white} padding='20' textSize='2em'>
        é bonito ver as coisas fazendo sentido 👾
      </Text>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <Text textColor={colors.pearl} padding='20' textSize="1.5em">
        importante ressaltar:
      </Text>
      <Text textColor={colors.pearl} padding='20' textSize="1.5em">
        <strong><p>isso são detalhes de implementação</p></strong>
      </Text>
      <Appear>
        <Text textColor={colors.pearl} padding='20' textSize="1.2em">
          o react oferece uma api declarativa <i>(e maravilhosa)</i> e não precisamos nos preocupar com o que vai mudar nos re-renders 😎
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <Text textColor={colors.pink} padding='20' textSize='2em'>
        o legal é que o conceito de “virtual dom” se aplica a vários cenários
      </Text>
      <Appear>
        <Text textColor={colors.pink} padding='20' textSize='1.5em'>
          o algoritmo de reconciliation pode lidar com qualquer árvore, concordam? 🤔
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.orange}>
      <Text textColor={colors.darkBlue} padding='20' textSize='2em'>
        quando o react saiu, o <i>react</i> e o <i>react-dom</i> eram "juntos"
      </Text>
      <Appear>
        <Text textColor={colors.darkBlue} padding='20' textSize='1.5em'>
          no início ele era usado na Web lá tranquilão e tal
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.orange}>
      <Text textColor={colors.darkBlue} padding='20' textSize='1.5em'>
        em 2015 o Facebook lançou uma parada que foi <strong>muito</strong> impactante:
      </Text>
      <Appear>
        <Text textColor={colors.darkBlue} padding='20' textSize='2em'>
          o React Native 💙
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.indigo}>
      <Text textColor={colors.pearl} padding='20' textSize='2em'>
        e o interessante é que o algoritmo de Reconciliation era o mesmo 😮
      </Text>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <Image
        src={commonReconciler}
        style={{ objectFit: 'contain', borderRadius: 8, width: '100%' }}
      />
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <Text textColor={colors.pearl} padding='20' textSize='1.5em'>
        mas pera...
      </Text>
      <Appear>
        <Text textColor={colors.pearl} padding='20' textSize='2em'>
          o React Native saiu em Março de 2015, e o Fiber aconteceu em Abril de 2017 🤔
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <Text textColor={colors.pearl} padding='20' textSize='1.5em'>
        antes:
      </Text>
      <Code textColor={colors.orange}>
        react-dom/lib/ReactFiberReconciler
      </Code>
      <Appear>
        <Text textColor={colors.pearl} padding='20' textSize='1.5em'>
          <i>o react native importava o react-dom, isso não faz muito sentido</i>
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue} bgImage={plotting} bgDarken={0.80}>
      <Text textColor={colors.pearl} padding='20' textSize='1.5em'>
        agora:
      </Text>
      <Code textColor={colors.orange}>
        react-reconciler
      </Code>
      <Appear>
        <Text textColor={colors.pearl} padding='20' textSize='1.5em'>
          temos a separação da lib, e isso abre portas pra uma coisa <strong>MUITO</strong> interessante
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <Text textColor={colors.orange} padding='20' textSize='2em'>
        o fiber introduziu uma distinção entre o renderer e o reconciler de forma mais clara!
      </Text>
      <Appear>
        <Text textColor={colors.orange} padding='20' textSize='1.5em'>
          <i>virtual-dom é um nome muito infeliz</i>
        </Text>
      </Appear>
    </Slide>
    <Slide
      transition={defaultTransition}
      bgColor={colors.orange}
      bgImage={mindBlowing}
      bgDarken={0.82}
    >
      <Text textColor={colors.white} padding='20' textSize='3em'>
        <strong>CUSTOM RENDERERS!</strong>
      </Text>
      <Appear>
        <Text textColor={colors.pearl} padding='20' textSize='1.5em'>
          o react é <strong><i>renderer agnostic</i></strong>
        </Text>
      </Appear>
      <Appear>
        <Text textColor={colors.pearl} padding='20' textSize='1.5em'>
          isso permite que o React seja utilizado em diversas plataformas
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.pink}>
      <Text textColor={colors.pearl} padding='20' textSize='2em'>
        pra vocês terem ideia, esses são algumas formas de utilizar o react hoje
      </Text>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <Code textColor={colors.pearl} textSize='1.5em'>
        react-native-windows
      </Code>
      <Image
        src={reactNativeWindows}
        style={{ objectFit: 'contain', borderRadius: 8, marginTop: 30 }}
      />
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <Code textColor={colors.pearl} textSize='1.5em'>
        react-blessed
      </Code>
      <Image
        src={reactBlessed}
        style={{ objectFit: 'contain', borderRadius: 8, marginTop: 30 }}
      />
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <Code textColor={colors.pearl} textSize='1.5em'>
        react-pdf
      </Code>
      <Image
        src={reactPdf}
        style={{ objectFit: 'contain', borderRadius: 8, marginTop: 30, width: '70%' }}
      />
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <Code textColor={colors.pearl} textSize='1.5em'>
        react-tv
      </Code>
      <Image
        src={reactTv}
        style={{ objectFit: 'contain', borderRadius: 8, marginTop: 30 }}
      />
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <Code textColor={colors.pearl} textSize='1.5em'>
        react-360
      </Code>
      <Image
        src={react360}
        style={{ objectFit: 'contain', borderRadius: 8, marginTop: 30 }}
      />
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <Text textColor={colors.pearl} padding='20' textSize='1.5em'>
        react na p*** toda basicamente
      </Text>
    </Slide>
    <Slide
      transition={defaultTransition}
      bgColor={colors.blue}
      bgImage={universe}
      bgDarken={0.82}
    >
      <Text textColor={colors.pearl} padding='20' textSize='2em'>
        existe um universo gigantesco de possibilidades
      </Text>
      <Appear>
        <Text textColor={colors.pearl} padding='20' textSize='1.5em'>
          não descartem possibilidades
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.indigo}>
      <Text textColor={colors.pearl} padding='20' textSize='2em'>
        o react está <strong>muito</strong> além de uma lib pra fazer web sítios
      </Text>
      <Appear>
        <Text textColor={colors.pearl} padding='20' textSize='1.5em'>
          e seu ecossistema é simplesmente sensacional 🚀
        </Text>
      </Appear>
    </Slide>
    <Slide
      transition={['slide']}
      bgColor={colors.white}
      bgImage={finalBg}
      align='flex-end flex-end'
      bgDarken={0.50}
    >
      <Text textSize="4em" textColor={colors.pearl} margin="60" >
        <strong>OBRIGADO {'<3'}</strong>
      </Text>
    </Slide>
  </Deck>
)

export default Presentation
