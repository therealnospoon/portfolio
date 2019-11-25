<script>
  import Header from "./sections/header/Header.svelte";
  import Work from "./sections/work/Work.svelte";
  import Skills from "./sections/skills/Skills.svelte"
  import Contact from "./sections/contact/Contact.svelte";
  import smoothscroll from "smoothscroll-polyfill";

  import { onMount } from "svelte";

  onMount(async () => {
    smoothscroll.polyfill();
  });

  let bgImage = "./images/portfolio_bg.jpg";



  function scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }



</script>

<style type="text/scss">
  @import "assets/styles/base/variables";
  @import "assets/styles/base/mixins";


  :global(h1, h2, h3, h4, h5, p) {
      font-family: 'Red Hat Display', sans-serif;
      font-weight: 400;
  }
  :global(html, body) {
    scroll-behavior: smooth;
  }
 
</style>

<div>
  <Header />
  <Skills />
  <Work />
  <Contact on:gototop={scrollToTop}/>
</div>
