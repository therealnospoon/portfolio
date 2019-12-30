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
  export let gifId;
  export let siteUrl;
  export let stack;

  function siteOpening() {
    dispatch("siteclick", {
      url: siteUrl
    });
  }

 

  function handleGif() {
   dispatch("gifclick", {
     gifId: gifId
   });
  }
</script>

<style type="text/scss">
:global(.gifPlaying) {
    opacity: 1 !important;
    z-index: 4 !important;
    & ~ .mobile-image-container {
      opacity: 0;
    }
}
  .card-container-desktop {
    display: flex;
    align-items: center;
    min-height: 70vh;
    color: #454f5b;
    padding: 0 0.5rem;
    img {
      width: 100%;
      border-radius: 4px;
    }
    .image-container {
      border-radius: 4px;
      align-items: center;
       min-height: 70vh;
      @media only screen and (max-width: 768px) {
        min-height: 58vh;
        align-items: flex-end;
      }
      @media only screen and (max-width: 576px) {
        min-height: 440px;
        align-items: flex-end;
      }
      @media only screen and (max-width: 475px) {
        min-height: 380px;
      }
      @media only screen and (max-width: 425px) {
        min-height: 320px;
      }
      @media only screen and (max-width: 375px) {
        min-height: 285px;
      }
      .site-image-container {
        position: relative;
        margin: -5rem -2rem 5rem 0;
        cursor: pointer;
        @media only screen and (max-width: 576px) {
          margin: -5rem 0 2rem 0;
        }
        &:after {
          border-radius: 4px;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          content: "\f01d";
          font-family: FontAwesome;
          font-size: 75px;
          color: #fff;
          opacity: 0;
          transition: opacity 250ms ease-in;
        }
        &:hover:after {
          opacity: 1;
        }
        .site-image {
          z-index: 2;
        }
        .site-gif {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          opacity: 0;
          z-index: 1;
          transition: opacity 250ms ease-in 250ms;
          cursor: pointer;
        }
      }
      .mobile-image-container {
        margin: 0 0 -2rem -3rem;
        z-index: 3;
        transition: opacity 250ms ease-in;
        @media only screen and (max-width: 768px) {
          margin: 0 0 0 -3rem;
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
  <div class="card-container-desktop my-4">
    <div class="row">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <h3 class="title mb-4">{title}</h3>
      </div>
      <div
        class="col-12 col-md-6 image-container d-flex justify-content-center">

        <div class="site-image-container" on:click={handleGif}>
          <img
            src={image1}
            class="site-image"
            alt="site image for {title}"
            data-sal="slide-up"
            data-sal-easing="ease-out-sine"
            data-sal-duration="250" />

          <img
            src={image3}
            class="site-gif"
            id={gifId}
            alt="site gif for {title}" />
        </div>
        <div class="mobile-image-container">
          <img
            class="mobile-image"
            src={image2}
            alt="site image for {title}"
            data-sal="slide-up"
            data-sal-easing="ease-out-sine"
            data-sal-duration="250"
            data-sal-delay="250" />
        </div>

      </div>
      <div class="col-12 col-md-6 d-flex align-items-center">

        <div class="content-container">
          <h4>Overview</h4>
          <p class="description">{description}</p>
          <h4>Challenge</h4>
          <p class="challenge">{challenge}</p>
          <h4>Technologies</h4>
          <p class="technologies">{technologies}</p>
          <a href={siteUrl} target="_blank" class="site-btn">
            <p class="m-0">Visit Site</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
