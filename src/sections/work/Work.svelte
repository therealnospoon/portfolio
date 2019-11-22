<script>
  import WorkCard from "../../components/WorkCard.svelte";

  const projects = [
    {
      title: "Edmonds Segway Tours",
      description: "A retail website for Edmonds Segway",
      imageUrl: `https://source.unsplash.com/random`
    },
    {
      title: "Savannah Seattle",
      description: "Online store for exotic cats",
      imageUrl: `https://source.unsplash.com/random`
    },
    {
      title: "Red Twig Cafe",
      description: "Website for a local coffee store",
      imageUrl: `https://source.unsplash.com/random`
    }
  ];
</script>

<style>
  .section-wrapper {
    height: 100vh;
    background-color: rgb(44, 44, 44);
  }

  .section-title {
    color: white;
  }
</style>

<section>
  <div class="section-wrapper d-flex justify-content-center">
    <div class="container d-flex justify-content-center flex-column">
      <h1 class="section-title">Recent Work</h1>
      <div class="row">
        {#each projects as card}
          <div class="col-12 col-md-6">
            <WorkCard {...card} />
          </div>
        {/each}
      </div>

    </div>

  </div>
</section>
