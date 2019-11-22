<script>
  import Header from "./sections/header/Header.svelte";
  import Work from "./sections/work/Work.svelte";
  import Skills from "./sections/skills/Skills.svelte"

  import { onMount } from "svelte";

  onMount(async () => {});
</script>

<style type="text/scss">
  @import "assets/styles/base/variables";
  @import "assets/styles/base/mixins";


  :global(h1, h2, h3, h4, h5, p) {
      font-family: 'Red Hat Display', sans-serif;
      font-weight: 400;
  }
 
</style>

<div>
  <Header />
  <Skills />
  <Work />

</div>
