<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  import sal from "sal.js";
  import "sal.js/dist/sal.css";

  onMount(async () => {
    sal({
      threshold: 0.2,
      once: true
    });
  });
  const dispatch = createEventDispatcher();

  export let title;
  export let description;
  export let challenge;
  export let technologies;
  export let image1;
  export let image2;
  export let image3;
  export let siteUrl;
  export let stack;

  function siteOpening() {
    dispatch("siteclick", {
      url: siteUrl
    });
  }
</script>

<style type="text/scss">
  .card-container-desktop {
    display: flex;
    align-items: center;
    min-height: 700px;
    color: #454f5b;
    padding: 0 0.5rem;
    img {
      width: 100%;
      border-radius: 4px;
    }
    .image-container {
      min-height: 370px;
      border-radius: 4px;
      .site-image {
        margin: -5rem -2rem 5rem 0;
        cursor: pointer;
        @media only screen and (max-width: 576px) {
          margin: -5rem -2rem 1rem 0;
        }
      }

      .mobile-image {
        margin: 0 5rem 0 -3rem;
        max-width: 180px;
        @media only screen and (max-width: 576px) {
          margin: 0 0rem 0 -3rem;
          max-width: 120px;
        }
      }
    }
    .framework-label {
      opacity: 1;
    }
    .title {
      position: relative;
    }
    .site-btn {
      display: inline-block;
      padding: 0.5rem 1rem;
      margin: 1rem 0 0 0;
      width: 170px;
      text-decoration: none;
      border-radius: 2px;
      font-size: 1rem;
      background: #0069ed;
      color: #f8fafc;
      text-align: center;
      transition: background 250ms ease-in-out;
      &:hover,
      &:focus {
        background: #0053ba;
      }
    }
    // @media only screen and (min-width: 576px) {
    //   display: flex;
    // }
  }
</style>

<section>
  <div class="card-container-desktop">
    <div class="row">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <h4 class="title mb-5">{title}</h4>
      </div>
      <div
        class="col-12 col-md-6 image-container d-flex justify-content-center
        align-items-center">

        <img
          src={image1}
          class="site-image"
          alt="site image for {title}"
          data-sal="slide-up"
          data-sal-easing="ease-out-sine"
          data-sal-duration="250" />

        <img
          class="mobile-image"
          src={image2}
          alt="site image for {title}"
          data-sal="slide-up"
          data-sal-easing="ease-out-sine"
          data-sal-duration="250"
          data-sal-delay="250" />

      </div>
      <div class="col-12 col-md-6">

        <div class="content-container">

          <p class="description">
            OVERVIEW
            <br />
            {description}
          </p>
          <p class="challenge">
            CHALLENGE
            <br />
            {challenge}
          </p>
          <p class="technologies">
            TECHNOLOGIES
            <br />
            {technologies}
          </p>
          <a href={siteUrl} target="_blank" class="site-btn">
            <p class="m-0">Visit Site</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
