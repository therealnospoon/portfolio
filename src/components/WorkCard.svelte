<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let title;
  export let description;
  export let imageUrl;
  export let siteUrl;

  function siteOpening() {
    dispatch("siteclick", {
      url: siteUrl
    });
  }
</script>

<style type="text/scss">
  .card-container {
    width: 400px;
    transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
    img {
      width: 100%;
    }
    .title {
      position: relative;
      display: inline;
      margin: 1rem 0;
      color: #fff;

      &:after {
        content: "";
        width: 0;
        height: 2px;
        background-color: #fff;
        position: absolute;
        top: 99.9%;
        left: 0;
        transition: all 250ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
        @media only screen and (max-width: 576px) {
          width: 100%;
        }
      }
    }
    .description {
      color: transparent;
      transition: color 500ms ease-in;
      @media only screen and (max-width: 576px) {
        color: #fff;
      }
    }
    &:hover {
      transform: translateY(-10px);
      cursor: pointer;
      .title {
        &:after {
          width: 100%;
        }
      }
      .description {
        color: #fff;
      }
    }
  }
</style>

<section>
  <div class="card-container container" on:click={siteOpening}>
    <div class="row">
      <div class="col-12 image-container">
        <img src={imageUrl} alt="site image for {title}" />
      </div>
    </div>
    <div class="row">
      <div class="col-12 mt-2">
        <h5 class="title">{title}</h5>
      </div>
    </div>
    <div class="row">
      <div class="col mt-2">
        <p class="description">{description}</p>
      </div>
    </div>
  </div>
</section>
