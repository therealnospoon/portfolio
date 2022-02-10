<style lang="scss">

  .section-wrapper {
    background-color: $background;
    // background-color: var(--color-background);
  }

  .section-title {
    color: $primary;
  }
</style>

<section id="work">
  <div class="section-wrapper d-flex justify-content-center">
    <div class="container d-flex justify-content-center flex-column">
      <h2 class="section-title text-center my-5">Recent Work</h2>
      <div class="row mb-3">
        {#each projects as card, cardIndex}
          <div class="col-12 mb-5 d-flex justify-content-center">
            <WorkCard {...card} on:gifclick={handleGifClick} />
          </div>
        {/each}
      </div>

    </div>

  </div>
</section>

<script>
  import WorkCard from "../../../components/WorkCard/WorkCard.svelte";
  import { onMount } from "svelte";
  import sal from "sal.js";
  import projects from "./work.js";
  import "sal.js/dist/sal.css";

  onMount(async () => {
    sal({
      threshold: 0.2,
      once: true
    });
  });

  function handleGifClick(e) {
    const thisGif = document.getElementById(e.detail.gifId);
    thisGif.classList.toggle("gifPlaying");
  }
</script>
