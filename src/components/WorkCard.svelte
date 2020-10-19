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
  export let isApp;
  export let stack;
  export let githubUrl;
  export let workLink;

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
  @import "../assets/styles/base/_variables.scss";

  :global(.gifPlaying) {
    opacity: 1 !important;
    z-index: 4 !important;
  }
  .card-container-desktop {
    display: flex;
    align-items: center;
    color: $primary;
    padding: 0 0.5rem;
    @media only screen and (min-width: 1200px) {
      max-width: 60vw;
    }
    img {
      width: 100%;
      border-radius: 4px;
    }
    .image-container {
      border-radius: 4px;
      align-items: center;
      .site-image-container {
        position: relative;
        margin: -5rem -2rem 2rem 0;
        cursor: pointer;
        @media only screen and (max-width: 576px) {
          margin: -5rem 0 2rem 0;
        }
        &:hover,
        &:focus {
          z-index: 4;
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
          content: "\f04b";
          font-family: FontAwesome;
          font-size: 75px;
          color: #fff;
          opacity: 0;
          transition: opacity 250ms ease-out;
        }
        &:hover:after {
          opacity: 1;
        }
        .click-message {
          position: absolute;
          pointer-events: none;
          top: 100%;
          left: 0;
          @media only screen and (min-width: 576px) {
            left: 50%;
            transform: translateX(-50%);
          }
          p {
            font-family: "Playfair Display", serif;
            font-weight: 900 !important;
            font-size: 1rem !important;
            letter-spacing: 0.02em;
            color: $cta;
          }
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
        &.no-gif {
          pointer-events: none;
          .click-message {
            display: none;
          }
        }
      }
      .mobile-image-container {
        margin: 0 0 -6rem -3rem;
        border-radius: 10px;
        z-index: 3;
        opacity: 1;
        transition: opacity 250ms ease-in;
        @media only screen and (max-width: 768px) {
          margin: 0 0 0 -3rem;
        }
        img {
          box-shadow: -5px 8px 21px -6px rgba(0, 0, 0, 0.75);
          border-radius: 10px;
        }
      }
    }
    .title {
      position: relative;
    }
    .site-btn {
      display: inline-block;
      margin-top: 1rem;
      text-decoration: none;
      color: $cta;
      text-align: left;
      p {
        font-family: "Playfair Display", serif;
        font-weight: 900;
        font-size: 2rem !important;
        position: relative;
        &:after {
          content: "";
          position: absolute;
          top: 80%;
          left: 1%;
          height: 30%;
          background: $linkhover;
          width: 100%;
          transition: width 250ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
          @media only screen and (min-width: 576px) {
            width: 0;
          }
        }
      }
      &:hover,
      &:focus {
        p {
          &:after {
            width: 100%;
          }
        }
      }
    }
  }
</style>

<section class="my-5">
  <div class="card-container-desktop my-4">
    <div class="row">

      <div class="col-12 image-container d-flex justify-content-center">

        <div
          class="site-image-container {image3 === null ? 'no-gif' : ''}"
          on:click={handleGif}
          data-sal="slide-up"
          data-sal-easing="ease-out-back"
          data-sal-duration="250">
          <img
            src={image1}
            class="site-image"
            alt="site image for {title}"
            data-sal="slide-up"
            data-sal-easing="ease-out-back"
            data-sal-duration="500"
            data-sal-delay="100" />
          <div
            class="click-message mt-2"
            data-sal="fade-in"
            data-sal-easing="ease-out-back"
            data-sal-duration="500"
            data-sal-delay="400">
            <p>Click image for preview</p>
          </div>

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
            data-sal-easing="ease-out-back"
            data-sal-duration="250"
            data-sal-delay="250" />
        </div>

      </div>
      <div class="col-12 d-flex align-items-center">

        <div class="content-container">
            <h3 class="title mt-4">{title}</h3>
            <p class="description">{description}</p>
            <h4 class="mt-4">About</h4>
            <p class="about">{challenge}</p>
            <h4>Technologies</h4>
            <p class="technologies">{technologies}</p>
            <div class="row">
                <div class="col-12">
                    {#if workLink}
                    <a href={siteUrl} target="_blank" class="site-btn">
                        {#if isApp}
                        <p class="m-0">View App</p>
                        {:else}
                        <p class="m-0">Visit Site</p>
                        {/if}
                    </a>
                    {/if}
                </div>
                {#if githubUrl}
                <div class="col-12">
                    <a href={githubUrl} target="_blank" class="site-btn">
                        <p class="m-0">Github</p>
                    </a>
                </div>
                {/if}
            </div>   
        </div>
      </div>
    </div>
  </div>
</section>
