<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  	import { quartOut } from 'svelte/easing';


  let bgImage = "./images/portfolio_bg.jpg";
  let profilePic = "./images/profile_pic.jpg";
  let visible = false;

  onMount(async () => {
    visible = true;
  });

  function entrance(node, { duration }) {
    return {
      duration,
      css: t => {
        const eased = quartOut(t);
        return `transform: scale(${9 - eased * 8});
						opacity: ${t * 0.9};`;
      }
    };
  }
</script>

<style type="text/scss">

  .section-wrapper {
    height: 100vh;
    background: #fff;
    overflow: hidden;
  }

  .header-bg {
    background-size: cover;
    background-position: center;
    height: 100vh;
  }

  .profile-card {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 3px;
    padding: 4rem 0;
    max-width: 500px;
    margin: 0 1rem;
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
    .contact-link {
      display: inline-block;
      border: none;
      padding: .5rem 2rem;
      margin: 2rem 0 0 0;
      text-decoration: none;
      background: #0069ed;
      color: #ffffff;
      font-family: sans-serif;
      font-size: 1rem;
      cursor: pointer;
      text-align: center;
      transition: background 250ms ease-in-out, 
                  transform 150ms ease;

        &:hover, &:focus {
        background: #0053ba;
        }

        // &:focus {
        //     outline: 1px solid #fff;
        //     outline-offset: -4px;
        // }

        &:active {
            transform: scale(0.99);
        }
      }

  }
</style>

<section>
  <div class="section-wrapper">
    <div
      class="header-bg d-flex justify-content-center align-items-center"
      style="background-image: url('{bgImage}')">
      {#if visible}
        <div
          class="profile-card d-flex flex-column justify-content-center
          align-items-center"
          transition:entrance={{ duration: 1500 }}>
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
          <h1 class="mt-5">Tim Kim</h1>
          <h4 class="mt-2">DEVELOPER | DESIGNER</h4>
          <p class="profile-blurb text-center mt-2">
            Hi there! I'm a developer with a background in design. <br> Take a look at my work below and let's chat!
          </p>
          <a href="" class="contact-link"><p class="m-0">Get in touch</p></a>
        </div>
      {/if}
    </div>
  </div>
</section>
