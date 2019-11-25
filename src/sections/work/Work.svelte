<script>
  import WorkCard from "../../components/WorkCard.svelte";

  const projects = [
    {
      title: "Edmonds Segway Tours",
      description: "A retail website for Edmonds Segway",
      imageUrl: './images/EdmondsSegwayPic.jpg',
      siteUrl: 'https://www.edmondssegwaytours.com'
    },
    {
      title: "Savannah Seattle",
      description: "Online store for exotic cats",
      imageUrl: './images/SavannahSeattlePic.jpg',
      siteUrl: 'https://www.savannahseattle.com'
    },
    {
      title: "Red Twig Cafe",
      description: "Website for a local coffee store",
      imageUrl: './images/RedTwigPic.jpg',
      siteUrl: 'https://www.redtwig.com'
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
      <div class="row mb-3">
        {#each projects as card}
          <div class="col-12 col-md-4 mb-3 d-flex justify-content-center">
            <WorkCard {...card} on:siteclick={handleSiteClick}/>
          </div>
        {/each}
      </div>

    </div>

  </div>
</section>
