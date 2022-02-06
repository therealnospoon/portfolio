<style lang="scss">
@import "../../../assets/styles/main.scss";
  section {
    background: $background;
  }

  .top-btn, .top-btn:hover {
    display: inline-block;
    text-decoration: none;
    color: $cta;
    text-align: center;
    p {
      font-family: "Playfair Display", serif;
      font-weight: 900;
      font-size: 2rem !important;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        top: 83%;
        left: 0;
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
      text-decoration: none;
      p {
        &:after {
          width: 100%;
        }
      }
    }
  }
  .email-link {
    display: inline-block;
    text-decoration: none;
    color: $cta;
    text-align: center;
    p {
      font-family: "Playfair Display", serif;
      font-weight: 900;
      font-size: 2rem !important;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        top: 83%;
        left: 0;
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
      animation-name: levitate;
      animation-duration: 1500ms;
      animation-iteration-count: infinite;
      animation-timing-function: cubic-bezier(.63, .12, .33, 1.1);
    }
    @keyframes levitate {
      from {
        transform: translate(0, 0px);
      }
      15% {
        transform: translate(0, -10px);
      }
      30% {
        transform: translate(0, -0px);
      }
      to {
        transform: translate(0, -0px);
      }
    }
  }
</style>

<section id="#contact">
  <div class="container">
    <div class="row">
      <div class="col-12 d-flex justify-content-center my-3">
        <a href="#top" class="top-btn" on:click={backToTop}>
          <p class="m-0">Back To Top</p>
        </a>
      </div>
    </div>
    <div class="row">
      <div
        class="col-12 mt-4 mb-5 email-row d-flex justify-content-center
        align-items-center">
        <a
          href="mailto:timkimdesigns@gmail.com"
          class="email-link d-flex align-items-center mx-4 mb-3"
        >
          <Icon name="email" size="large" color="primary" />
        </a>
        <a
          href="https://www.linkedin.com/in/tkdev/"
          target="_blank"
          class="email-link d-flex align-items-center mx-4 mb-3">
          <Icon name="linkedin" size="large" color="primary" />
        </a>
      </div>
    </div>
  </div>
</section>

<script>
  import { createEventDispatcher } from "svelte";
  import Icon from "/src/components/icon/icon.svelte"
  const dispatch = createEventDispatcher();

  function backToTop() {
    dispatch("gototop");
  }
</script>