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
          <h2 class="mt-5">Tim Kim</h2>
          <h4 class="mt-2">WEB DEVELOPER | DESIGNER</h4>
          <p class="profile-blurb text-center mt-2">
            Hi there! I'm a developer with a background in design. <br> Take a look at my work below and let's chat!
          </p>
        </div>
      {/if}
    </div>
  </div>
</section>
