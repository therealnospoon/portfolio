<script>

</script>

<style type="text/scss">
  section {
    background: #142f3a;
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
      @media only screen and (max-width: 576px) {
        width: 100%;
      }
    }
    &:hover {
      &:after {
        width: 100%;
      }
    }
  }
</style>

<section id="#contact">
  <div class="container">
    <div class="row">
      <div class="col-12 d-flex justify-content-center my-3">
        <a href="#top" class="top-btn">
          <h5 class="m-0">Back To Top</h5>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex justify-content-end mb-3">
        <a href="mailto:timkimdesigns@gmail.com" class="email-link d-flex align-items-center">
          <i class="far fa-envelope mr-2" />
          <p class="m-0">timkimdesigns@gmail.com</p>
        </a>
      </div>
    </div>
  </div>
</section>
