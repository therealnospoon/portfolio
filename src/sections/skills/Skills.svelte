<script>
  import { onMount } from "svelte";
  import sal from "sal.js";
  import skills from "./skills";
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
    skills.three
  ];
  // const designerTools = [
  //   "Figma",
  //   "Adobe Illustrator",
  //   "Sketch",
  //   "Invision",
  //   "Adobe Photoshop"
  // ];
</script>

<style type="text/scss">
  .section-wrapper {
    background-color: #f8fafc;
    color: #454f5b;
  }
  .skills-box {
    display: flex;
    justify-content: space-around;
    flex-wrap:wrap;
    align-items: center;
    text-align: center;
    margin: 3rem;

    // .skill-row {
    //   justify-content: center;
    // }

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

<section>
  <div class="section-wrapper">
    <div class="skills-container container">
      <div class="row justify-content-center align-items-center">
        <div class="col-12 d-flex flex-column align-items-center">
          <h4>Skills</h4>
        </div>
        <div
          class="skills-box d-flex align-items-center col-12"
          >

          <!-- <p>
                As a developer, I write clean, organized and performant code
              </p> -->
          <!-- <h5 class="mt-4">Development tools:</h5> -->
          <!-- <ul> -->
          {#each developerTools as tool, devToolIndex}
            <div
              class="skill-badge mt-3"
              data-sal="slide-right"
              data-sal-easing="ease-in-out-quad"
              data-sal-duration="250"
              data-sal-delay={50 * devToolIndex}>
              <span class="skill-icon">
                <img src={tool.image} />
              </span>
              <p class="mt-1">{tool.name}</p>
            </div>
          {/each}
          <!-- </ul> -->

          <!-- <div
              class="skill-column col-12 col-md-6 d-flex flex-column
              align-items-center"
              data-sal="fade"
              data-sal-easing="ease-in-out-quad"
              data-sal-duration="500">
              <i class="fas fa-pencil-ruler fa-2x mb-4" />
              <h4 class="mb-3">Designer</h4>
              <p>
                As a designer, I create simple, beautiful, and powerful designs
              </p>
              <h5 class="mt-4">Design tools:</h5>
              <ul>
                {#each designerTools as tool, desToolIndex}
                  <li
                    class="mt-3"
                    data-sal="fade"
                    data-sal-easing="ease-in-out-quad"
                    data-sal-duration="500"
                    data-sal-delay={100 * desToolIndex}>
                    <p>{tool}</p>
                  </li>
                {/each}
              </ul>
            </div> -->

        </div>
      </div>
    </div>

  </div>
</section>
