<script>
  import WorkCard from "../../components/WorkCard.svelte";
  import { onMount } from "svelte";
  import sal from "sal.js";
  import "sal.js/dist/sal.css";

  onMount(async () => {
    sal({
      threshold: 0.2,
      once: true
    });
  });

  const projects = [
    {
      title: "Red Twig Cafe",
      description: "I helped to build a redesigned retail/brochure website for a local cafe roastery in Edmonds, WA using Vue Js, a component driven Javascript framework",
      imageUrl: "./images/RedTwigPic.jpg",
      siteUrl: "https://www.redtwig.com",
      framework: "Vue JS"
    },
    {
      title: "Edmonds Segway Tours",
      description: "I built a single page scrolling website for a Segway tour company using Svelte, a lightweight JS library.",
      imageUrl: "./images/EdmondsSegwayPic.jpg",
      siteUrl: "https://www.edmondssegwaytours.com",
      framework: "Svelte JS"
    },
    {
      title: "Savannah Seattle",
      description: "I built a website for an exotic cat seller with forms functionality and a content management system for easy owner maintenance using HTML, SCSS and a templating library called Rivets.",
      imageUrl: "./images/SavannahSeattlePic.jpg",
      siteUrl: "https://www.savannahseattle.com",
      framework: "HTML,CSS, Rivets JS"
    }
  ];

  function handleSiteClick(event) {
    window.open(event.detail.url);
  }

  
</script>

<style>
  .section-wrapper {
    background-color: #1f86ca;
  }

  .section-title {
    color: white;
  }
</style>

<section>
  <div class="section-wrapper d-flex justify-content-center">
    <div class="container d-flex justify-content-center flex-column">
      <h4 class="section-title text-center my-5">Work</h4>
      <div class="row mb-3" data-sal="slide-right"
            data-sal-easing="ease-in-out-sine"
            data-sal-duration="500">
        {#each projects as card, cardIndex}
          <div
            class="col-12 mb-3 d-flex justify-content-center"
            data-sal="slide-right"
            data-sal-easing="ease-in-out-sine"
            data-sal-duration="250"
            data-sal-delay={100 * cardIndex}
          >
            <WorkCard {...card} on:siteclick={handleSiteClick} />
          </div>
        {/each}
      </div>

    </div>

  </div>
</section>
