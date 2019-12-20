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

<style type="text/scss">
  .section-wrapper {
    height: 110vh;
    background: #1f86ca;
    position: relative;
    z-index: 10;
    overflow: hidden;
    @media only screen and (max-width: 576px) {
      height: 120vh;
      .header-bg {
        height: 120vh;
      }
    }
  }

  .header-bg {
    background-size: cover;
    background-position: center center;
    // position: absolute;
    height: 110vh;
    // background-image: url("./images/portfolio_bg.jpg");
    background-color: #f8fafc;
  }
  // .parallax {
  //   position: sticky;
  // }

  .profile-card {
    background-color:#f8fafc;
    border-radius: 3px;
    padding: 4rem 0;
    max-width: 600px;
    flex-wrap:wrap;
    overflow-x: hidden;
    color: rgb(80, 80, 80);

    .pic-container {
      .lines {
        height: 1px;
        width: 200px;
        background: rgb(80, 80, 80);
        padding: 0;
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
    .contact-link,
    .resume-link {
      display: inline-block;
      border: none;
      padding: 0.5rem 1rem;
      margin: 1rem 0 0 0;
      width: 170px;
      text-decoration: none;
      background: #0069ed;
      color: #f8fafc;
      border-radius: 2px;
      font-size: 1rem;
      cursor: pointer;
      text-align: center;
      transition: background 250ms ease-in-out, transform 150ms ease;

      &:hover,
      &:focus {
        background: #0053ba;
      }
      &.resume-link {
        background: #f8fafc;
        color: #0069ed;

        p {
          position: relative;
          &:after {
            content: "";
            width: 0;
            height: 2px;
            background-color: #0069ed;
            position: absolute;
            top: 90%;
            left: 0;
            transition: width 250ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
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
  }
</style>


<section>
  <div class="section-wrapper">

    <div
      class="header-bg d-flex justify-content-center align-items-center parallax"
      id="keyart-0"
      data-speed="-50">
      {#if isLoaded}
        <div
          class="profile-card d-flex 
          align-items-center"
          id="keyart-1"
          data-speed="30"
          transition:fade={{ delay: 250, duration: 1500 }}>
          <div class="row pic-container">
            <div class="col-12 d-flex align-items-center">
              <div class="lines" />
              <img
                class="profile-pic"
                src={profilePic}
                alt="timkim-profile-picture" />
              <div class="lines" />
            </div>
          </div>
          <h1 class="mt-5">Hi, my name is Tim.</h1>
          <h4 class="mt-2">I am a UI developer from Seattle, WA. I strive to build clean and refreshing digital experiences.</h4>
          <!-- <p class="profile-blurb mt-2 px-3">
            Hello, 
          </p> -->

          <a href="mailto:timkimdesigns@gmail.com" class="contact-link">
            <p class="m-0">Get in touch</p>
          </a>

          <a href="./images/TK_Dev_Resume.pdf" download class="resume-link">
            <p class="m-0">Download Resume</p>
          </a>

        </div>
      {/if}
    </div>
    <!-- My interests include (but are
            not limited to): playing/listening to music, cooking and discovering
            new foods, building things with my hands, going on adventures with
            my wife, snowboarding...etc. -->
  </div>
</section>
