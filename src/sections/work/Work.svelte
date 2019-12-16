<script>
  import WorkCard from "../../components/WorkCard.svelte";
  import { onMount } from "svelte";
  import sal from "sal.js";
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
        "Creating a production site for Microsoft to beautifully illustrate SQL Server's evolution through the years",
      challenge:
        "This was a beautifully designed experience that leveraged SVG capabilities to bring it to life. The challenge piece was choosing the best implemententation of the SVG drawing and the background animations while maintaining cross-browser compatibility and responsiveness. We used the Scrollmagic library paired with Greensock and tested vigorously across IE, Edge and multiple mobile/tablet devices.",
      technologies: "Vue, Scrollmagic, Wordpress",
      imageUrl: "./images/growing-sql-site.png",
      siteUrl: "https://discover.microsoft.com/growing-sql-server/#/",
      framework: "Vue JS"
    },
    {
      title: "Microsoft - DevOps Fundamentals",
      description:
        "I built a website to help explain and explore the basic benefits and DevOps functionality of Microsoft Azure",
      challenge:
        "This was a relatively straightforward production that site save for the fact that the client wanted to embed media from a third-party host hence it required some thinking around how to implement it as well as the architecture of the entire site. The site helped teach me the importance of structuring in an effective way to keep code neat, performant and functional.",
      technologies: "Vue, Wordpress",
      imageUrl: "./images/devops-fundamentals-site.png",
      siteUrl: "https://discover.microsoft.com/devops-fundamentals-with-azure/#/",
      framework: "Vue JS"
    },
    {
      title: "Microsoft - Education Interactive Demos",
      description:
        "I worked on cross-browser compatibility, responsiveness and general polish on Microsoft 365 interactable demos that showcased it's apps in real world applications",
      challenge:
        "This was a particularly interesting project that embedded media from a third-party host which required a little bit more nuance then just dropping in a video tag. Also, in particula",
      technologies: "Vue, Scrollmagic, Wordpress",
      imageUrl: "./images/teams-education-site.png",
      siteUrl: "https://discover.microsoft.com/digital-education-demo/#/personalize-learning",
      framework: "Vue JS"
    },
    {
      title: "Red Twig Cafe",
      description:
        "I helped to build a redesigned retail/brochure website for a local cafe roastery in Edmonds, WA using Vue Js, a component driven Javascript framework",
      imageUrl: "./images/RedTwigPic.jpg",
      siteUrl: "https://www.redtwig.com",
      framework: "Vue JS"
    },
    {
      title: "Edmonds Segway Tours",
      description:
        "I built a single page scrolling website for a Segway tour company using Svelte, a lightweight JS library.",
      imageUrl: "./images/EdmondsSegwayPic.jpg",
      siteUrl: "https://www.edmondssegwaytours.com",
      framework: "Svelte JS"
    },
    {
      title: "Savannah Seattle",
      description:
        "I built a website for an exotic cat seller with forms functionality and a content management system for easy owner maintenance using HTML, SCSS and a templating library called Rivets.",
      imageUrl: "./images/SavannahSeattlePic.jpg",
      siteUrl: "https://www.savannahseattle.com",
      framework: "HTML,CSS, Rivets JS"
    }
  ];

  function handleSiteClick(event) {
    window.open(event.detail.url);
  }
</script>

<style>
  .section-wrapper {
    background-color: #1f86ca;
  }

  .section-title {
    color: white;
  }
</style>

<section>
  <div class="section-wrapper d-flex justify-content-center">
    <div class="container d-flex justify-content-center flex-column">
      <h4 class="section-title text-center my-5">Featured Work</h4>
      <div class="row mb-3">
        {#each projects as card, cardIndex}
          <div
            class="col-12 mb-5 d-flex justify-content-center"
            data-sal="slide-right"
            data-sal-easing="ease-out-sine"
            data-sal-duration="500">
            <WorkCard {...card} on:siteclick={handleSiteClick} />
          </div>
        {/each}
      </div>

    </div>

  </div>
</section>
