<script>
  import TweenMax from "gsap/TweenMax";

  import githubIcon from "../img/github.png";
  import linkedinIcon from "../img/linkedin.png";
  import twitterIcon from "../img/twitter.png";
  import youtubeIcon from "../img/youtube.png";
  import instagramIcon from "../img/instagram.png";
  import spotifyIcon from "../img/spotify.png";
  import soundcloudIcon from "../img/soundcloud.png";

  import Divider from "./Divider.svelte";

  import { visibleProps, invisibleProps } from "../js/gsap-utils.js";

  function openTalksPanel() {
    TweenMax.to("#bio", 0.8, invisibleProps);

    setTimeout(() => {
      TweenMax.to("#talks", 1, visibleProps);
    }, 800);
  }
</script>

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

  .panel .talks-label {
    padding: 14px;
    text-align: center;
  }

  .panel .talks-label .underlined {
    cursor: pointer;
    padding-bottom: 2px;
    border-bottom: 1px solid #fafafa;
  }

  .panel .talks-label a {
    text-decoration: none;
    color: #fafafa;
  }

  .panel .title > p {
    font-size: 0.8em;
    padding-top: 20px;
    line-height: 22px;
  }

  .panel .title :last-child {
    padding: 28px 0;
  }

  .panel .subtitle {
    padding-bottom: 28px;
    line-height: 30px;
    font-size: 0.9em;
  }

  .panel .footer {
    font-size: 0.8em;
  }

  .panel .footer > span {
    display: block;
    opacity: 0.7;
    font-size: small;
    margin-bottom: 6px;
    text-align: center;
  }

  .panel .footer .contact .images {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: wrap;
  }

  .panel .footer .contact .images img {
    width: 40px;
    margin: 8px;
  }

  .panel .footer .message {
    border-top: 1px solid #fafafa78;
    padding-top: 20px;
    display: flex;
    flex: 1;
    margin-top: 12px;
    align-items: center;
  }

  .panel .footer .message .typed {
    display: inline-block;
    margin-bottom: 2px;
  }

  .panel .footer .message .typed > i {
    font-size: 0.7em;
  }

  .panel .footer .message .typed > p {
    margin-top: 4px;
  }

  @media (max-width: 768px) {
    .panel {
      width: 70%;
    }

    .panel .footer .message {
      display: none;
    }
  }
</style>

<div class="panel" id="bio">
  <strong>hi, i'm luiz baldi :)</strong>
  <div class="title">
    <p>
      <i>calm songs, coffe, beer and code.</i>
    </p>
    <p class="divider">~</p>
  </div>
  <p class="subtitle">
    also, frontend engineer, React and React Native specialist, building web and
    mobile solutions.
  </p>
  <footer class="footer">
    <span>you can find me at:</span>
    <div class="contact">
      <div class="images">
        <a href="https://github.com/luizbaldi" target="_blank">
          <img src={githubIcon} alt="Github icon" />
        </a>
        <a href="https://br.linkedin.com/in/luizbaldi" target="_blank">
          <img src={linkedinIcon} alt="Linkedin icon" />
        </a>
        <a href="https://twitter.com/baldilp" target="_blank">
          <img src={twitterIcon} alt="Twitter icon" />
        </a>
        <a href="https://www.youtube.com/user/lpBaldi" target="_blank">
          <img src={youtubeIcon} alt="Youtube icon" />
        </a>
        <a href="https://www.instagram.com/baldilp" target="_blank">
          <img src={instagramIcon} alt="Instagram icon" />
        </a>
        <a
          href="https://open.spotify.com/user/luizbaldi?si=rGNGJOgnRhqyaR2THj_XjQ"
          target="_blank">
          <img src={spotifyIcon} alt="Spotify icon" />
        </a>
        <a href="https://soundcloud.com/luizbaldi" target="_blank">
          <img src={soundcloudIcon} alt="SoundCloud icon" />
        </a>
      </div>
    </div>
    <div class="talks-label" on:click={openTalksPanel}>
      <span id="talks-link" class="underlined">talks</span>
    </div>
    <div class="talks-label">
      <span class="underlined">
        <a
          href="https://www.verypossible.com/people/luiz-baldi"
          target="__blank">
          <i>more professional bio</i>
        </a>
      </span>
    </div>
    <div class="message">
      <span class="typed" />
    </div>
  </footer>
</div>
