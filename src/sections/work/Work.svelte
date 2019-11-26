<script>
  import WorkCard from "../../components/WorkCard.svelte";
  import { onMount } from "svelte";
  import sal from "sal.js";
  import "sal.js/dist/sal.css";

  onMount(async () => {
    sal({
      threshold: 0.25,
      once: true
    });
  });

  const projects = [
    {
      title: "Edmonds Segway Tours",
      description: "A retail website for Edmonds Segway",
      imageUrl: "./images/EdmondsSegwayPic.jpg",
      siteUrl: "https://www.edmondssegwaytours.com",
      framework: "Svelte JS"
    },
    {
      title: "Savannah Seattle",
      description: "Online store for exotic cats",
      imageUrl: "./images/SavannahSeattlePic.jpg",
      siteUrl: "https://www.savannahseattle.com",
      framework: "HTML,CSS, Rivets JS"
    },
    {
      title: "Red Twig Cafe",
      description: "Website for a local coffee store",
      imageUrl: "./images/RedTwigPic.jpg",
      siteUrl: "https://www.redtwig.com",
      framework: "Vue JS"
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
      <h4 class="section-title text-center my-5">My Work</h4>
      <div class="row mb-3" data-sal="slide-right"
            data-sal-easing="ease-in-out-sine"
            data-sal-duration="500">
        {#each projects as card}
          <div
            class="col-12 col-md-6 mb-3 d-flex justify-content-center"
          >
            <WorkCard {...card} on:siteclick={handleSiteClick} />
          </div>
        {/each}
      </div>

    </div>

  </div>
</section>
