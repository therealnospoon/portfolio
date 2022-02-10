<style lang="scss">

.section-wrapper {
    height: 100%;
    color: var(--color-text-primary);
    @media only screen and (min-width: 1280px) {
    height: 75vh;
    }
}
.skills-box {
    display: grid;
    grid-template-rows: repeat(10, 1fr);
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
    margin: 3rem;
    @media only screen and (min-width: 475px) {
        grid-template-rows: repeat(7, 1fr);
    grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (min-width: 768px) {
        grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(5, 1fr);
    }
    @media only screen and (min-width: 1000px) {
        grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(6, 1fr);
    }

    .skill-badge {
    margin: 1rem;
    }

    .skill-icon {
    img {
        width: auto;
        max-height: 55px;
    }
    }
}
</style>
  

<div class="section-wrapper">
    <div class="skills-container container">
    <div class="row justify-content-center align-items-center">
        <div class="col-12 d-flex flex-column align-items-center">
        <h2>Skills</h2>
        </div>
        <div
        class="skills-box col-12"
        >

        
        {#each developerTools as tool, devToolIndex}
            <div
            class="skill-badge mt-3"
            data-sal="slide-right"
            data-sal-easing="ease-in-out-quad"
            data-sal-duration="250"
            data-sal-delay={devToolIndex * 50}>
            <span class="skill-icon">
                <img src={tool.image} />
            </span>
            <p class="mt-1">{tool.name}</p>
            </div>
        {/each}
        

        </div>
    </div>
    </div>

</div>

  <script>
    import { onMount } from "svelte";
    import sal from "sal.js";
    import skills from "$data/skills.json";
    import "sal.js/dist/sal.css";
  
    onMount(async () => {
      sal({
        threshold: 1,
        once: true
      });
    });
  
    const developerTools = [
      skills.bash,
      skills.bootstrap,
      skills.css,
      skills.git,
      skills.gulp,
      skills.html,
      skills.jquery,
      skills.js,
      skills.react,
      skills.rollup,
      skills.sass,
      skills.svelte,
      skills.vue,
      skills.webpack,
      skills.wordpress,
      skills.npm,
      skills.photoshop,
      skills.figma,
      skills.illustrator,
      skills.node,
      skills.cordova,
    ];
  </script>