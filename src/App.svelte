<script>
  import Header from "./sections/header/Header.svelte";
  import Work from "./sections/work/Work.svelte";
  import Skills from "./sections/skills/Skills.svelte";
  import Contact from "./sections/contact/Contact.svelte";
  import MainNav from "./components/MainNav.svelte";
  import "scroll-behavior-polyfill";

  import { onMount } from "svelte";

  onMount(async () => {
   
  });

  let bgImage = "./images/portfolio_bg.jpg";

  function scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }
</script>

<style type="text/scss">
  @import "assets/styles/base/variables";
  @import "assets/styles/base/mixins";
  @import url('https://fonts.googleapis.com/css?family=DM+Serif+Display|Playfair+Display:400,700,900&display=swap');

  :global(h1, h2, h3, h4, h5, p) {
    font-family: 'DM Serif Display', serif;
    font-weight: 400;
    letter-spacing: .03em;
  }
  :global(html, body) {
    scroll-behavior: smooth;
    position: relative;
  }

</style>

<div>
  
    <MainNav />
    <Header />
    <Skills />
    <Work />
    <Contact on:gototop={scrollToTop} />

</div>
