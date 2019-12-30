<script>
  import Header from "./sections/header/Header.svelte";
  import Work from "./sections/work/Work.svelte";
  import Skills from "./sections/skills/Skills.svelte";
  import Contact from "./sections/contact/Contact.svelte";
  import MainNav from "./components/MainNav.svelte";
  import "scroll-behavior-polyfill";

  import { onMount } from "svelte";

  onMount(async () => {});

  let bgImage = "./images/portfolio_bg.jpg";

  function scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }
</script>

<style type="text/scss">
  @import "assets/styles/base/variables";
  @import "assets/styles/base/mixins";
  @import url("https://fonts.googleapis.com/css?family=DM+Serif+Display|Libre+Baskerville:700|Lora:400,700|Merriweather:400,700,900|Montserrat:300,400,500|Nunito+Sans:400,800,900|Playfair+Display:400,700,900&display=swap");

  :global(h1, h2) {
    font-family: "Libre Baskerville", serif;
    font-weight: 700 !important;
  }
  :global(h3, h4, h5, p) {
    font-family: "Nunito Sans", sans-serif;
    font-weight: 400 !important;
  }
  // :global(h4) {
  //   font-family: "Montserrat", sans-serif;
  //   font-weight: 500 !important;
  // }
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
