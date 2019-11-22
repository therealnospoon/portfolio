<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

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
        return `transform: scale(${9 - t * 9});
						opacity: ${t * 0.9};`;
      }
    };
  }
</script>

<style type="text/scss">
  .section-wrapper {
    height: 100vh;
    background: #fff;
  }

  .header-bg {
    background-size: cover;
    background-position: center;
    height: 100vh;
  }

  .profile-card {
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 3px;
    padding: 4rem 0;
    max-width: 500px;
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
      height: 84px;
      width: 84px;
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
          transition:entrance={{ duration: 500 }}>
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
          <h4 class="mt-2">WEB DEVELOPER | DESIGNER</h4>
          <p class="profile-blurb">
            Hi there! I'm a developer with a background in UX design. I love
            creating beautiful products that achieve the unachieveable Let's
            work together!
          </p>
        </div>
      {/if}
    </div>
  </div>
</section>
