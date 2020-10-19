import skills from "../skills/skills";

const projects = [
  {
    title: "Tagpool",
    description:
      "An Instagram hashtag generator/management tool for iOS",
    challenge: "Tagpool was developed for iOS and is a tool that provides Instagram users an easy and convenient way to optimize hashtag utilization in their posts. This was my first time designing and building a mobile application myself and it was very satisfying to see my vision come together aesthetically and functionally. I used Xstate.js, a state management library, to architect as seamless a user-flow experience as possible. Through it all, I learned how powerful it is to manage states in a very logical, uni-directional stream while also avoiding potential user friction points.",
    technologies: "Svelte, Sass, Adobe Illustrator, Figma, Node, Cordova, Xstate, XCR",
    image1: "./images/tagpool_edited.jpg",
    image2: "./images/tagpool_mobile_screenshot.png",
    image3: "./images/tagpool_demo.gif",
    gifId: "gif5",
    siteUrl: "",
    isApp: true,
    workLink: false,
    githubUrl: "",
    stack: [skills.svelte, skills.sass, skills.illustrator, skills.figma, skills.npm, skills.cordova, skills.xstate]
  },
  {
    title: "Growing SQL Server (Microsoft)",
    description:
      "I helped create a production site for Microsoft that beautifully illustrates SQL Server's evolution throughout the years.",
    challenge:
      "This was a wonderfully designed experience that leveraged SVG capabilities and animation libraries to bring it to life. The challenging part of this project was choosing the best implemententation of the SVG drawing and the background animations while maintaining cross-browser compatibility and responsiveness. The primary developers on this site used the Scrollmagic library paired with Greensock animations to achieve this unique functionality. My role on this site was making sure the site was tested vigorously across IE, Edge and multiple mobile/tablet. Due to the nature of SVGs and animation libraries, testing for cross-browser compatibility and reponsiveness is extremely important. I was able to complete testing using various browsers as well as multiple testing devices that I had available to me.",
    technologies:
      "Vue.js, Scrollmagic, Greensock, Wordpress, Browserstack, Mobile/Tablet test devices",
    image1: "./images/growing-sql-site.jpg",
    image2: "./images/growing-sql-mobile.jpg",
    image3: "./images/growing-sql-server.gif",
    gifId: "gif1",
    siteUrl: "https://discover.microsoft.com/growing-sql-server/#/",
    workLink: false,
    isApp: false,
    stack: [skills.vue, skills.sass, skills.wordpress]
  },
  // {
  //   title: "DevOps Fundamentals (Microsoft)",
  //   description:
  //     "I built this for potential decision makers to explore the basic benefits and functionality of DevOps with Microsoft Azure.",
  //   challenge:
  //     "This was a fairly straightforward site save for the fact that the meat of the site, the media assets (videos) were hosted by a third-party company hence requiring some thinking around how to implement it as well as the architecture of the entire site. Harnessing the power of the Vue JS framework, I was able to utilize the benefits of it's component driven capabilites that resulted in a clean and functional site with a codebase that would allow any developer to jump into with ease. Additionally, making this site helped me to grasp the importance of structuring my code in a way that achieves high-performance as well as readability.",
  //   technologies: "Vue JS, Wordpress, Bootstrap, Vidyard",
  //   image1: "./images/devops-fundamentals-site.jpg",
  //   image2: "./images/devops-fundamentals-mobile.jpg",
  //   image3: "./images/devops-fundamentals.gif",
  //   gifId: "gif2",
  //   siteUrl: "https://discover.microsoft.com/devops-fundamentals-with-azure/#/",
  //   stack: [skills.vue, skills.sass, skills.wordpress]
  // },
  // {
  //   title: "Education Interactive Demos (Microsoft)",
  //   description:
  //     "I worked on cross-browser compatibility, responsiveness and cosmetic bug-fixes on these Microsoft 365 interactive demo sites.",
  //   challenge:
  //     "This project was handed off to my team to take across the finish line after primary development had taken place. These sites were built in Vue JS are interactive demos that showcase Microsoft 365 applications in specific contexts (such as the classroom) and displays how impactful it can be for improving workflow for teachers and students. My task was to fix the broken UI elements and to make sure they were cross-browser compatible. I accomplished this by utilizing various tools to optimize assets, tested across multiple browsers and devices made sure the experience achieved the quality that we considered ready for shipment to the client.",
  //   technologies:
  //     "Vue JS, Wordpress, Browserstack, Mobile/Tablet test devices, Adobe Illustrator",
  //   image1: "./images/education-demos-site.jpg",
  //   image2: "./images/education-demos-mobile.jpg",
  //   image3: "./images/education-demos.gif",
  //   gifId: "gif3",
  //   siteUrl:
  //     "https://discover.microsoft.com/digital-education-demo/#/personalize-learning",
  //   stack: [skills.vue, skills.sass, skills.wordpress, skills.illustrator]
  // },
  {
    title: "Self-Guided Demo (SAP Concur)",
    description:
      "I worked on localizing SAP Concur's online, self-guided walkthrough demo of their mobile app.",
    challenge:
      "For this project, the client tasked our team of developers to take the existing self-guided demo that had initially been created for American users and to give it the ability to reach their international customers. What this meant for us was taking the existing codebase and restructuring it so that it would be flexibile to take in all the languages required for this effort. My primary job was replacing existing hard-coded content into variables that would take in and display whatever localized language/content was called for in the build process of the project. Accomplishing this required setting up environment variables and a whole set of scripts to run for each locale depending on which one our team was working on. This was a truly unique project experience that taught me the value of always taking into consideration the fact that clients can change or add objectives to existing projects and to prepare for that at the start of the project is always beneficial.",
    technologies: "Vue.js, Browserstack, Mobile/Tablet test devices, Babel Edit",
    image1: "./images/concur-demo-site.jpg",
    image2: "./images/concur-demo-mobile.jpg",
    image3: "./images/concur-demo.gif",
    gifId: "gif4",
    siteUrl: "https://www.concur.fr/self-guided-demo-expense-fr-fr#/",
    isApp: false,
    githubUrl: "",
    workLink: true,
    stack: [skills.vue, skills.sass]
  },
  {
    title: "Red Twig Cafe",
    description:
      "A website for a local cafe roastery in Edmonds, WA",
    challenge: "This is a simple Vue.js project that allows users to view Red Twig's rotational menu, order merchandise and even order take/out and delivery. Part of our job in making this site was to make sure that it would be an easy experience for any outside or new developers to jump in and update as the cafe undergoes rotational menu items and merchandise. We decided that Vue's templating would help us achieve this well by componentizing as much of the site as possible and methodically structuring files and directories.",
    technologies: "Vue.js, Node, Sass",
    image1: "./images/redtwig-site.jpg",
    image2: "./images/redtwig-mobile.jpg",
    image3: null,
    gifId: "gif5",
    siteUrl: "https://www.redtwig.com",
    workLink: true,
    isApp: false,
    githubUrl: "",
    stack: [skills.vue, skills.sass, skills.node]
  }
];

export default projects;
