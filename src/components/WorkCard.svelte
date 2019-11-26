<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let title;
  export let description;
  export let imageUrl;
  export let siteUrl;
  export let framework;

  function siteOpening() {
    dispatch("siteclick", {
      url: siteUrl
    });
  }
</script>

<style type="text/scss">
  .card-container-desktop {
    display: none;
    transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
    padding: 0 0.5rem;
    img {
      width: 100%;
      border-radius: 4px;
      transition: transform 100ms ease-in-out, opacity 100ms ease-in-out;
    }
    .image-container {
      position: relative;
      padding: 0;
      overflow: hidden;
      border-radius: 4px;
      .content-container {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(16, 59, 199, 0.6);
        border-radius: 4px;
        opacity: 0;
        transition: opacity 250ms ease-in-out;
      }
    }
    .framework-label {
      color: #fff;
      opacity: 0;
      transition: opacity 250ms ease-in-out;
    }
    .title {
      position: relative;
      display: inline;
      margin: 1rem 0;
      color: #fff;
    }
    .description {
      color: transparent;
      transition: color 500ms ease-in;
    }
    .site-btn {
      display: inline-block;
      padding: 0.5rem 1rem;
      margin: 1rem 0 0 0;
      width: 170px;
      text-decoration: none;
      border-radius: 2px;
      font-size: 1rem;
      background: #fff;
      color: #0069ed;
      border: 1px #0069ed solid;
      text-align: center;
      transition: background 250ms ease-in-out, transform 150ms ease;
      &:hover,
      &:focus {
        background: #0069ed;
        color: #fff;
      }
      &:active {
        transform: scale(0.99);
      }
    }
    &:hover {
      transform: translateY(-10px);
      cursor: pointer;
      img {
        transform: scale(1.15);
        opacity: 0;
      }
      .framework-label {
        opacity: 1;
      }
      .description {
        color: #fff;
      }
      .content-container {
        opacity: 1;
      }
    }
    @media only screen and (min-width: 576px) {
      display: block;
    }
  }
  .card-container-mobile {
    background-color: #353535;
    border-radius: 4px;
    padding: 1rem 0.5rem;
    color: #fff;
    box-shadow: 1px 3px 5px 2px #05336b9d;
    img {
      width: 100%;
    }
    .image-container {
      position: relative;
      padding: 0;
      overflow: hidden;
      
    }
  
    .title {
      position: relative;
      display: inline;
      margin: 1rem 0;
    }
   
    @media only screen and (min-width: 576px) {
      display: none;
    }
  }
</style>

<section>
  <div class="card-container-desktop" on:click={siteOpening}>
    <div class="row">
      <div class="col-12 image-container">
        <img src={imageUrl} alt="site image for {title}" />
        <div class="content-container">
          <h4 class="title">{title}</h4>
          <p class="description px-5">{description}</p>
          <a href={siteUrl} target="_blank" class="site-btn">
            <p class="m-0">Visit Site</p>
          </a>
        </div>
      </div>
    </div>
    <div class="row framework-label">
      <div class="col-12 px-0 pt-1">
        <h5>Built with {framework}</h5>
      </div>
    </div>
  </div>


  <div class="card-container-mobile" on:click={siteOpening}>
    <div class="row px-3">
    <div class="row framework-label">
      <div class="col-12">
        <h4>{title}</h4>
      </div>
    </div>
      <div class="col-12 image-container">
        <img src={imageUrl} alt="site image for {title}" />
      </div>
    </div>
    <div class="row px-3">
      <div class="col-12 mt-2 px-0">
        <p class="title">{description}</p>
      </div>
    </div>
    <div class="row px-3">
      <div class="col px-0">
        <p class="description"> (Built with {framework})</p>
      </div>
    </div>
  </div>
</section>
