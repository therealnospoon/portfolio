<style lang="scss">
  @import "../assets/styles/main.scss";
  @import url('https://fonts.googleapis.com/css?family=Lora:400,700|Playfair+Display:900&display=swap');

  :global(h3, h4, h5, p) {
    font-family: "Lora", serif;
    font-weight: 400 !important;
  }
  :global(h1, h2) {
    font-family: "Playfair Display", serif;
    font-weight: 900 !important;
    letter-spacing: .01em;
  }
  :global(h2) {
    font-size: 2.5rem !important;
    @media only screen and (min-width: 576px) {
      font-size: 3rem !important;
    }
  }
  :global(h3) {
    font-weight: 700 !important;
    font-size: 2.3rem !important;
    @media only screen and (min-width: 576px) {
      font-size: 2.8rem !important;
    }
  }
  :global(h4) {
    font-size: 2rem !important;
    @media only screen and (min-width: 576px) {
      font-size: 2.2rem !important;
    }
  }
  :global(p) {
    font-size: 1.1rem !important;
    @media only screen and (min-width: 576px) {
      font-size: 1.3rem !important;
    }
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

<script>
  import Header from "./_sections/header/Header.svelte";
  import Work from "./_sections/work/Work.svelte";
  import Skills from "./_sections/skills/Skills.svelte";
  import Contact from "./_sections/contact/Contact.svelte";
  import MainNav from "../components/MainNav/MainNav.svelte";
  import "scroll-behavior-polyfill";

  import { onMount } from "svelte";

  onMount(async () => {});

  let bgImage = "./images/portfolio_bg.jpg";

  function scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }
</script>
