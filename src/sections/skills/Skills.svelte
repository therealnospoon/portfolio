<script>
  import { onMount } from "svelte";
  import sal from "sal.js";
  import "sal.js/dist/sal.css";

  onMount(async () => {
    sal({
      threshold: 1,
      once: true
    });
  });

  const developerTools = [
    "HTML, CSS/SCSS, JS",
    "Vue, React, Redux, Svelte",
    "Node, VS Code",
    "Firebase, Stripe",
    "Gulp, Webpack, Rollup"
  ];
  const designerTools = [
    "Figma",
    "Adobe Illustrator",
    "Sketch",
    "Invision",
    "Adobe Photoshop"
  ];
</script>

<style type="text/scss">
  .section-wrapper {
    background-color: #1f86ca;
  }
  .skills-box {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    .skill-row {
      justify-content: center;
    }

    .skill-column {
      text-align: center;
      max-width: 320px;
      margin: 3rem;
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        li {
          margin-top: 1rem;
        }
      }
    }
  }
</style>

<section>
  <div class="section-wrapper">
    <div class="skills-container container">
      <div class="row justify-content-center align-items-center">
        <h4 class="text-white pt-5">Skills</h4>
        <div class="skills-box col-12">
          <div class="row skill-row w-100">
            <div
              class="skill-column col-12 col-md-6 d-flex flex-column
              align-items-center"
              data-sal="fade"
              data-sal-easing="ease-in-out-quad"
              data-sal-duration="500"
            >
              <i
                class="fas fa-code fa-2x mb-4"
              />
              <h4
                class="mb-3"
              >
                Developer
              </h4>
              <p>
                As a developer, I write clean, organized and performant code
              </p>
              <h5 class="mt-4">
                Development tools:
              </h5>
              <ul>
                {#each developerTools as tool, devToolIndex}
                  <li
                    class="mt-3"
                    data-sal="fade"
                    data-sal-easing="ease-in-out-quad"
                    data-sal-duration="500"
                    data-sal-delay={100 * devToolIndex}>
                    {tool}
                  </li>
                {/each}
              </ul>
            </div>
            <div
              class="skill-column col-12 col-md-6 d-flex flex-column
              align-items-center"
              data-sal="fade"
              data-sal-easing="ease-in-out-quad"
              data-sal-duration="500"
            >
              <i
                class="fas fa-pencil-ruler fa-2x mb-4"
              />
              <h4
                class="mb-3"
              >
                Designer
              </h4>
              <p>
                As a designer, I create simple, beautiful, and powerful designs
              </p>
              <h5 class="mt-4">
                Design tools:
              </h5>
              <ul>
                {#each designerTools as tool, desToolIndex}
                  <li
                    class="mt-3"
                    data-sal="fade"
                    data-sal-easing="ease-in-out-quad"
                    data-sal-duration="500"
                    data-sal-delay={100 * desToolIndex}>
                    {tool}
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
