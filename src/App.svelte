<script>
  import "particles.js";
  import { onMount } from "svelte";

  import { init as initParticles } from "./js/particles";
  import { init as initTyped } from "./js/typed";

  import Particles from "./components/Particles.svelte";
  import BioPanel from "./components/BioPanel.svelte";
  import TalksPanel from "./components/TalksPanel.svelte";

  onMount(() => {
    initParticles();
    initTyped();
  });
</script>

<style>
  .background {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="background">
  <Particles />
  <BioPanel />
  <TalksPanel />
</div>
