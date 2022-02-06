<style lang="scss">
@import "../../../assets/styles/main.scss";
  h5 {
    font-size: 1.3rem;
    line-height: 1.2;
    @media only screen and (min-width: 576px) {
      font-size: 1.7rem;
    }
  }
  .section-wrapper {
    height: 110vh;
    z-index: 10;
    overflow: hidden;
  }

  .header-bg {
    background-size: cover;
    background-position: center center;
    height: 110vh;
    background-color: $background;
  }

  .profile-card {
    background-color: $background;
    border-radius: 3px;
    max-width: 300px;
    flex-wrap: wrap;
    color: $primary;
    @media only screen and (min-width: 400px) {
      max-width: 380px;
    }
    @media only screen and (min-width: 576px) {
      max-width: 620px;
    }
    .main-phrase {
      font-size: 3rem;
      @media only screen and (min-width: 576px) {
        font-size: 5rem;
      }
    }

    .profile-pic {
      height: 100px;
      width: 100px;
      border-radius: 50%;
      margin: 0 1rem;
    }
    .profile-blurb {
      max-width: 400px;
    }

    .work-link {
      text-decoration: none;
      appearance: none;
      h5 {
        font-family: "Playfair Display", serif;
        font-weight: 900;
        position: relative;
        color: $cta;
        font-size: 2rem;
        &:after {
          content: "";
          position: absolute;
          top: 85%;
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
        h5 {
          &:after {
            width: 100%;
          }
        }
      }
    }
  }
</style>

<section>
  <div class="section-wrapper">

    <div
      class="header-bg d-flex justify-content-center align-items-center"
      id="keyart-0"
      data-speed="-50">
      {#if isLoaded}
        <div
          class="profile-card d-flex align-items-center justify-content-center
          container"
          id="keyart-1"
          data-speed="30"
          transition:fade={{ duration: 500 }}>
          <div class="row w-100">
            <div class="col-12 d-flex justify-content-center">
              <img class="profile-pic" src={profilePic} />
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h1 class="main-phrase mt-5 mb-4">Hi, I'm Tim</h1>
              <h5 class="mt-2">
                I'm a UI developer from Seattle, WA. I strive to make sites that are so fresh and so clean
                <br />
                <br />
                See my
                <a href="#work" class="work-link">
                  <h5 class="m-0 d-inline">Recent Work</h5>
                </a>
              </h5>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>

<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { quartOut } from "svelte/easing";

  let bgImage = "./images/portfolio_bg.jpg";
  let profilePic = "./images/profile_pic.jpg";
  let bgLoaded = false;
  let isLoaded = false;

  onMount(async () => {
    await checkBgStatus();
    toggleBgLoaded();
    // initParallax();
  });

  function initParallax() {
    if (window.screen.width >= 768) {
      window.addEventListener("scroll", event => {
        let top = window.pageYOffset;

        const layers = document.getElementsByClassName("parallax");
        let layer, speed, yPos;
        for (let i = 0; i < layers.length; i++) {
          layer = layers[i];
          speed = layer.getAttribute("data-speed");
          yPos = -((top * speed) / 100);
          layer.setAttribute(
            "style",
            "transform: translate3d(0px, " + yPos + "px, 0px)"
          );
        }
      });
    } else {
      return;
    }
  }

  function checkBgStatus() {
    const headerBg = document.querySelector(".header-bg");
    bgLoaded = headerBg ? true : false;
  }

  function toggleBgLoaded() {
    if (bgLoaded) {
      isLoaded = true;
    }
  }
</script>