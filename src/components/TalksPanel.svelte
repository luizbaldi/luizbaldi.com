<style>
  .panel {
    background-color: #0b0b0c87;
    color: #fafafa;
    font-size: 1.2em;
    width: 70%;
    padding: 40px;
    border-radius: 4px;
    z-index: 1;
    max-width: 440px;
  }

  .panel.talks {
    display: none;
    opacity: 0;
    max-width: 640px;
    max-height: 440px;
    overflow: auto;
  }

  .panel.talks p:first-of-type {
    padding-top: 0px;
  }

  .panel.talks .talk-item {
    padding: 12px 0;
  }

  .panel.talks .talk-item > i {
    display: block;
    font-size: 0.8em;
    color: #ffffffb3;
  }

  .panel.talks .talk-item > a {
    color: #fafafa;
  }

  .panel.talks .back-arrow {
    cursor: pointer;
    font-weight: lighter;
    font-size: 0.8em;
    display: block;
    padding-top: 20px;
    border-top: 1px solid #ffffffb3;
    margin-top: 12px;
    transition: color 0.2s ease-in;
  }

  .panel.talks .back-arrow:hover {
    color: #ffffffb3;
    border-top: 1px solid #ffffffb3;
  }

  @media (max-width: 768px) {
    .panel {
      width: 70%;
    }

    .panel.talks {
      width: 70%;
    }
  }
</style>

<div class="panel talks" id="talks">
  <p class="talk-item">
    <a href="http://luizbaldi.com/talks/react-internals/" target="_blank">
      React Internals - React Fiber and custom renderers
    </a>
    <i>@ Beagá JS - Jul/2019</i>
  </p>
  <p class="talk-item">
    <a
      href="http://luizbaldi.com/talks/react-hooks-and-ecosystem"
      target="_blank">
      Understanding React Hooks and it's Impact on the ecosystem
    </a>
    <i>@ The Developer's Conference - Jun/2019</i>
  </p>
  <p class="talk-item">
    <a
      href="http://luizbaldi.com/talks/react-hooks-and-ecosystem"
      target="_blank">
      Understanding React Hooks and it's Impact on the ecosystem
    </a>
    <i>@ Beagá JS - Apr/2019</i>
  </p>
  <p class="talk-item">
    <a href="http://luizbaldi.com/talks/react-internals/" target="_blank">
      React Internals - React Fiber and custom renderers
    </a>
    <i>@ Aniversário React JS | Meetup SmarttBot - May/2019</i>
  </p>
  <p class="talk-item">
    <a
      href="http://luizbaldi.com/talks/react-hooks-and-ecosystem"
      target="_blank">
      Understanding React Hooks and it's Impact on the ecosystem
    </a>
    <i>@ Meetup Week CI&T - Mar/2019</i>
  </p>
  <p class="talk-item">
    <a href="http://luizbaldi.com/talks/from-dom-to-native" target="_blank">
      React - From DOM to Native
    </a>
    <i>@ MeetUp App Makers - Sep/2018</i>
  </p>
  <p class="talk-item">
    State management in React
    <i>@ Framework System - Jul/2018</i>
  </p>
  <p class="talk-item">
    A React Native land tour
    <i>@ Meetup Front end BH - Jun/2018</i>
  </p>
  <span class="back-arrow" id="talks-back">&#60;~ back</span>
</div>
