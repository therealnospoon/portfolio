<script>
  import { onMount } from "svelte";
  import sal from "sal.js";
  import "sal.js/dist/sal.css";

  onMount(async () => {
    sal({
      threshold: 1,
      once: false
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
        <div class="skills-box col-12">
          <div class="row skill-row w-100">
            <div
              class="skill-column col-12 col-md-6 d-flex flex-column
              align-items-center">
              <i
                class="fas fa-code fa-2x mb-4"
                data-sal="slide-up"
                data-sal-easing="ease-out-back" />
              <h4
                class="mb-3"
                data-sal="slide-up"
                data-sal-easing="ease-out-back">
                Developer
              </h4>
              <p data-sal="slide-up" data-sal-easing="ease-out-back">
                Clean | Performant | Reusable
              </p>
              <h5 data-sal="slide-up" data-sal-easing="ease-out-back">
                My developer tools:
              </h5>
              <ul>
                {#each developerTools as tool, devToolIndex}
                  <li
                    class="mt-3"
                    data-sal="slide-up"
                    data-sal-easing="ease-out-back"
                    data-sal-delay={100 * devToolIndex}>
                    {tool}
                  </li>
                {/each}
              </ul>
            </div>
            <div
              class="skill-column col-12 col-md-6 d-flex flex-column
              align-items-center">
              <i
                class="fas fa-pencil-ruler fa-2x mb-4"
                data-sal="slide-up"
                data-sal-easing="ease-out-back" />
              <h4
                class="mb-3"
                data-sal="slide-up"
                data-sal-easing="ease-out-back">
                Designer
              </h4>
              <p data-sal="slide-up" data-sal-easing="ease-out-back">
                Beautiful | Friendly | Logical
              </p>
              <h5 data-sal="slide-up" data-sal-easing="ease-out-back">
                My design tools:
              </h5>
              <ul>
                {#each designerTools as tool, desToolIndex}
                  <li
                    class="mt-3"
                    data-sal="slide-up"
                    data-sal-easing="ease-out-back"
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
