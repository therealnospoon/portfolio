<script>
  import smoothscroll from "smoothscroll-polyfill";

  import { onMount } from "svelte";

  onMount(async () => {
    smoothscroll.polyfill();
  });

  function scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }


</script>

<style type="text/scss">
  section {
    background: #1f86ca;
    color: #fff;
  }

  .top-btn,
  .email-link {
    text-decoration: none;
    color: #ffffff;
    position: relative;
    &:after {
      content: "";
      width: 0;
      height: 2px;
      background-color: #fff;
      position: absolute;
      top: 99.9%;
      left: 0;
      transition: all 250ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    &:hover {
      &:after {
        width: 100%;
      }
    }
  }

  .email-row {
    display: flex;
    justify-content: flex-end;
    @media only screen and (max-width: 576px) {
      justify-content: center;
    }
  }
</style>

<section id="#contact">
  <div class="container">
    <div class="row">
      <div class="col-12 d-flex justify-content-center my-3">
        <a href="" class="top-btn" on:click={scrollToTop}>
          <h5 class="m-0">Back To Top</h5>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mb-3 email-row">
        <a
          href="mailto:timkimdesigns@gmail.com"
          class="email-link d-flex align-items-center">
          <i class="far fa-envelope mr-2 mt-1" />
          <p class="m-0">timkimdesigns@gmail.com</p>
        </a>
      </div>
    </div>
  </div>
</section>
