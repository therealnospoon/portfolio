{#if readyToShow}
<div transition:fade>
  <section>
    <Intro />
  </section>
  <section>
    <Skills />
  </section>
  <section>
    <Projects />
  </section>
  <section>
    <Footer />
  </section>
</div>
{/if}

<script>
export const prerender = true;
import { onMount } from "svelte";
import { fade } from "svelte/transition";
    
import Intro from "./_sections/intro.svelte";
import Skills from "./_sections/skills.svelte";
import Projects from "./_sections/projects.svelte";
import Footer from "./_sections/footer.svelte";

let readyToShow = false;

//to trigger svelte transitions, components need to be shown after mount
onMount(() => readyToShow = true);
</script>