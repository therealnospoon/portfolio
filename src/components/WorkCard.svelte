<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let title;
  export let description;
  export let challenge;
  export let technologies;
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
    display: flex;
    align-items: center;
    min-height: 700px;
    color: #454f5b;
    padding: 0 0.5rem;
    img {
      width: 100%;
      border-radius: 4px;
    }
    .image-container {
      overflow: hidden;
      border-radius: 4px;
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
  // .card-container-mobile {
  //   background-color: #fff;
  //   border-radius: 4px;
  //   color: #353535;
  //   box-shadow: 1px 2px 5px 2px #05336b9d;
  //   img {
  //     width: 100%;
  //     border-radius: 4px 4px 0 0;
  //   }
  //   .site-btn {
  //     display: inline-block;
  //     padding: 0.5rem 1rem;
  //     margin: 1rem 0 0 0;
  //     width: 170px;
  //     text-decoration: none;
  //     border-radius: 2px;
  //     font-size: 1rem;
  //     background: #0069ed;
  //     color: #fff;
  //     text-align: center;
  //   }

  //   .title {
  //     position: relative;
  //     display: inline;
  //     margin: 1rem 0;
  //   }

  //   @media only screen and (min-width: 576px) {
  //     display: none;
  //   }
  // }
</style>

<section>
  <div class="card-container-desktop">
    <div class="row">
     
      <div class="col-12 col-md-6 image-container">
        <img src={imageUrl} alt="site image for {title}" />
        <h5 class="framework-label mt-1">Built with {framework}</h5>
      </div>
      <div class="col-12 col-md-6">

        <div class="content-container">
        <h4 class="title">{title}</h4>
          <p class="description">
            OVERVIEW
            <br />
            {description}
          </p>
          <p class="challenge">
            CHALLENGE
            <br />
            {challenge}
          </p>
          <p class="technologies">
            TECHNOLOGIES
            <br />
            {technologies}
          </p>
          <a href={siteUrl} target="_blank" class="site-btn">
            <p class="m-0">Visit Site</p>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- mobile version of the card-->
  <!-- <div class="card-container-mobile">
    <div class="row image-container">
      <div class="col-12">
        <img src={imageUrl} alt="site image for {title}" />
      </div>
    </div>
    <div class="row px-4 pt-3">
      <div class="col-12 mt-2">
        <h4>{title}</h4>
        <p class="title">{description}</p>
      </div>
    </div>
    <div class="row mt-2 framework-label px-4">
      <div class="col-12">
        <p class="description">(Built with {framework})</p>
      </div>
      <div class="col-12 pb-4 d-flex justify-content-center">
        <a href={siteUrl} target="_blank" class="site-btn">
          <p class="m-0">Visit Site</p>
        </a>
      </div>
    </div>
  </div> -->
</section>
