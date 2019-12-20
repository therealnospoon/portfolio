<script>

</script>

<style type="text/scss">
  .nav-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;

    .contact-link,
    .resume-link {
      display: inline-block;
      border: none;
      padding: 0.5rem 1rem;
      margin: 1rem;
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
  <div class="container">
    <div class="row">
      <div class="col-12 nav-container">
        <a href="mailto:timkimdesigns@gmail.com" class="contact-link">
          <p class="m-0">Contact</p>
        </a>

        <a href="./images/TK_Dev_Resume.pdf" download class="resume-link">
          <p class="m-0">Download Resume</p>
        </a>
      </div>
    </div>
  </div>
</section>
