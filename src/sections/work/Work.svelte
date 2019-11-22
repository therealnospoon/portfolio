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
    background-color: rgb(44, 44, 44);
  }

  .section-title {
    color: white;
  }
</style>

<section>
  <div class="section-wrapper d-flex justify-content-center">
    <div class="container d-flex justify-content-center flex-column">
      <h2 class="section-title text-center my-5">My Work</h2>
      <div class="row">
        {#each projects as card}
          <div class="col-12 col-md-6">
            <WorkCard {...card} on:siteclick={handleSiteClick}/>
          </div>
        {/each}
      </div>

    </div>

  </div>
</section>
