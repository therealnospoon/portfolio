<script>
  import WorkCard from "../../components/WorkCard.svelte";
  import { onMount } from "svelte";
  import sal from "sal.js";
  import skills from "../skills/skills";
  import "sal.js/dist/sal.css";

  onMount(async () => {
    sal({
      threshold: 0.2,
      once: true
    });
  });

  const projects = [
    {
      title: "Microsoft - Growing SQL Server",
      description:
        "I helped create a production site for Microsoft that beautifully illustrates SQL Server's evolution through the years",
      challenge:
        "This was a wonderfully designed experience that leveraged SVG capabilities and animation libraries to bring it to life. The challenging part of this project was choosing the best implemententation of the SVG drawing and the background animations while maintaining cross-browser compatibility and responsiveness. The primary developers on this site used the Scrollmagic library paired with Greensock animations to achieve this unique functionality. My role on this site was making sure the site was tested vigorously across IE, Edge and multiple mobile/tablet. Due to the nature of SVGs and animation libraries, testing for cross-browser compatibility and reponsiveness is extremely important. I was able to complete testing using various browsers as well as multiple testing devices that I had available to me.",
      technologies:
        "Vue, Scrollmagic, Greensock, Wordpress, Browserstack, Mobile/Tablet test devices",
      image1: "./images/growing-sql-site.png",
      image2: "./images/growing-sql-site-mobile.png",
      image3: "./images/growing-sql-server.gif",
      gifId: "gif1",
      siteUrl: "https://discover.microsoft.com/growing-sql-server/#/",
      stack: [skills.vue, skills.sass, skills.wordpress]
    },
    {
      title: "Microsoft - DevOps Fundamentals",
      description:
        "I created a website for potential decision makers to explore the basic benefits and DevOps functionality of Microsoft Azure",
      challenge:
        "This was a fairly straightforward site save for the fact that the client wanted to embed media from a third-party host hence requiring some thinking around how to implement it as well as the architecture of the entire site. Building this site helped me to grasp the importance of structuring in an effective way to keep code performant and functional but also to have the ability to integrate with other technologies.",
      technologies: "Vue, Wordpress, Bootstrap, Vidyard",
      image1: "./images/devops-fundamentals-site.png",
      image2: "./images/devops-fundamentals-mobile.png",
      image3: "./images/devops-fundamentals.gif",
      gifId: "gif2",
      siteUrl:
        "https://discover.microsoft.com/devops-fundamentals-with-azure/#/",
      stack: [skills.vue, skills.sass, skills.wordpress]
    },
    {
      title: "Microsoft - Education Interactive Demos",
      description:
        "I worked on cross-browser compatibility, responsiveness and general polish on Microsoft 365 interactable demos that showcased it's powerful impact in the realm of education",
      challenge:
        "This project was primarily developed by another team and was handed off to my team to take across the finish line. The project was foundationally built in the Vue.js framework and is an interactive demo that showcases Microsoft 365 applications in specific contexts such as the classroom and displays how impactful it can be for teachers and students. My task was to fix the broken UI elements through testing across browsers, optimize assets as much as I can and to make sure the experience was ready to ship for our client. I accomplished this through testing via different browsers and devices of varying screen size, communicating with our design team to obtain higher quality/optimized assets and vigorous testing.",
      technologies:
        "Vue, Wordpress, Vuex, Browserstack, Mobile/Tablet test devices",
      image1: "./images/education-demos-site.png",
      image2: "./images/education-demos-mobile.png",
      image3: "./images/education-demos.gif",
      gifId: "gif3",
      siteUrl:
        "https://discover.microsoft.com/digital-education-demo/#/personalize-learning",
      stack: [skills.vue, skills.sass, skills.wordpress]
    },
    {
      title: "SAP Concur - Self-Guided Demo",
      description:
        "I helped in the localization effort of Concur's online self-guided walkthrough demo of their application",
      challenge:
        "This project was primarily developed by another team and was handed off to my team to take across the finish line. The project was foundationally built in the Vue.js framework and is an interactive demo that showcases Microsoft 365 applications in specific contexts such as the classroom and displays how impactful it can be for teachers and students. My task was to fix the broken UI elements through testing across browsers, optimize assets as much as I can and to make sure the experience was ready to ship for our client. I accomplished this through testing via different browsers and devices of varying screen size, communicating with our design team to obtain higher quality/optimized assets and vigorous testing.",
      technologies:
        "Vue, Browserstack, Mobile/Tablet test devices",
      image1: "./images/concur-demo-site.png",
      image2: "./images/concur-demo-mobile.png",
      image3: "./images/concur-demo.gif",
      gifId: "gif4",
      siteUrl:
        "https://www.concur.fr/self-guided-demo-expense-fr-fr#/",
      stack: [skills.vue, skills.sass]
    },
    // {
    //   title: "Red Twig Cafe",
    //   description:
    //     "I helped to build a redesigned website for a local cafe roastery in Edmonds, WA using Vue.js, a component driven Javascript framework",
    //   image1: "./images/RedTwigPic.jpg",
    //   image2: "./images/growing-sql-site-mobile.png",
    //   image3: "./images/growing-sql-server.gif",
    //   gifId: "gif4",
    //   siteUrl: "https://www.redtwig.com",
    //   stack: [skills.vue, skills.sass]
    // },
    // {
    //   title: "Edmonds Segway Tours",
    //   description:
    //     "I built a website for a Segway tour company using Svelte, a very lightweight JS library that compiles to simple JavaScript.",
    //   image1: "./images/EdmondsSegwayPic.jpg",
    //   image2: "./images/growing-sql-site-mobile.png",
    //   image3: "./images/growing-sql-server.gif",
    //   gifId: "gif5",
    //   siteUrl: "https://www.edmondssegwaytours.com",
    //   stack: [skills.svelte, skills.sass]
    // }
  ];

  function handleGifClick(e) {
    const thisGif = document.getElementById(e.detail.gifId);
    thisGif.classList.toggle("gifPlaying");
  }
</script>

<style>
  .section-wrapper {
    background-color: #f8fafc;
  }

  .section-title {
    color: #454f5b;
  }
</style>

<section id="work">
  <div class="section-wrapper d-flex justify-content-center">
    <div class="container d-flex justify-content-center flex-column">
      <h2 class="section-title text-center my-5">Featured Work</h2>
      <div class="row mb-3">
        {#each projects as card, cardIndex}
          <div class="col-12 mb-5 d-flex justify-content-center">
            <WorkCard {...card} on:gifclick={handleGifClick} />
          </div>
        {/each}
      </div>

    </div>

  </div>
</section>
