<script>
  import "sal.js/dist/sal.css";

  let menuOpen = false;

  function handleHamburger() {
    const menu = document.getElementById("full-menu");
    const inputCheck = document.getElementById("checkbox");
    const bluecircle = document.getElementById("bluecircle");
    if (menuOpen) {
      inputCheck.checked = false;
      menuOpen = false;

      bluecircle.style.transform = "translateY(-100%)";
      menu.style.opacity = 0;
      menu.style.pointerEvents = "none";
    } else {
      inputCheck.checked = true;
      menuOpen = true;
      menu.style.opacity = 1;
      menu.style.pointerEvents = "all";
      bluecircle.style.transform = "translateY(-47%)";
    }
    console.log(menuOpen);
  }
</script>

<style type="text/scss">
  .nav-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    overflow: hidden;

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

  .full-menu {
    position: fixed;
    opacity: 0;
    pointer-events: none;
    transition: opacity 250ms ease-in 100ms;
    height: 100vh;
    width: 100vw;
    background-color: #0069ed;
    color: #f8fafc;
    z-index: 3;
    .menu-contact,
    .menu-resume {
      display: inline-block;
      border: none;
      padding: 0.5rem 1rem;
      margin: 1rem;
      // width: 170px;
      text-decoration: none;
      color: #f8fafc;
      border-radius: 2px;
      font-size: 1rem;
      cursor: pointer;
      text-align: center;
      transition: background 250ms ease-in-out, transform 150ms ease;
      p {
        position: relative;
        &:after {
          content: "";
          width: 0;
          height: 2px;
          background-color: #f8fafc;
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

  .hamburger {
    display: block;
    border: none;
    text-decoration: none;
    background: none;
    cursor: pointer;
    position: relative;
    -webkit-user-select: none;
    user-select: none;

    &:focus {
      outline: none;
    }
    input {
      display: block;
      width: 40px;
      height: 32px;
      position: absolute;
      top: -7px;
      left: -5px;

      cursor: pointer;

      opacity: 0;
      z-index: 2;

      -webkit-touch-callout: none;
      &:checked ~ span {
        opacity: 1;

        transform: rotate(-45deg) translate(0, -1px);
        background: #f8fafc;
      }
      &:checked ~ span:nth-last-child(2) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }
      &:checked ~ span:nth-last-child(3) {
        transform: rotate(45deg) translate(1px, -1px);
      }
    }
    span {
      display: block;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      position: relative;

      background: #0069ed;
      border-radius: 3px;

      z-index: 1;

      transform-origin: 4px 0px;

      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
      &:first-child {
        transform-origin: 0% 0%;
      }
      &:nth-last-child(2) {
        transform-origin: 0% 100%;
      }
    }
  }
  .blue-circle {
    width: 410vw;
    height: 410vh;
    border-radius: 30%;
    position: fixed;
    background-color: #0069ed;
    transform: translateY(-100%);
    transition: transform 400ms ease-in-out;
  }
</style>

<section>
  <div class="nav-container">
    <a href="mailto:timkimdesigns@gmail.com" class="contact-link">
      <p class="m-0">Contact</p>
    </a>
    <a href="./images/TK_Dev_Resume.pdf" download class="resume-link">
      <p class="m-0">Download Resume</p>
    </a>
    <button class="hamburger" type="button" on:click={handleHamburger}>
      <input type="checkbox" id="checkbox" />
      <span />
      <span />
      <span />
    </button>
  </div>
  <div
    class="full-menu d-flex flex-column justify-content-center
    align-items-center"
    id="full-menu">
    <a href="mailto:timkimdesigns@gmail.com" class="menu-contact">
      <p class="m-0">Contact</p>
    </a>
    <a href="./images/TK_Dev_Resume.pdf" download class="menu-resume">
      <p class="m-0">Download Resume</p>
    </a>
  </div>
  <div class="blue-circle" id="bluecircle" />

</section>
