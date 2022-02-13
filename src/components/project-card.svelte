<style>
    .tech-name {
        display: inline;
    }
    .slide {
        width: 100%;
        opacity: 1;
    }

    .slideshow {
        position: relative;
        height: 30vh;
        width: 100%;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        transition: background 2000ms ease-in-out;
    }

</style>
<div class="container rounded p-5">
    <div class="row">
        <div 
            class="col-12 d-flex justify-content-center mb-5"
            data-sal="slide-up"
            data-sal-easing="ease-out-back"
            data-sal-duration="500"
        >
            {#if image.slideshow.length}
                <div
                    class="slideshow"
                    style:background-image="url({image.slideshow[currentSlide]})"
                    data-sal="slide-up"
                    data-sal-easing="ease-out-back"
                    data-sal-duration="500"
                >
                </div>
            {:else if image.animated}
                <img 
                    class="slide rounded" 
                    src={showAnimation ? image.animated : image.static}
                    data-sal="slide-up"
                    data-sal-easing="ease-out-back"
                    data-sal-duration="500"
                    
                />
            {:else}
                <img 
                    class="slide rounded"
                    src={image.static}
                    data-sal="slide-up"
                    data-sal-easing="ease-out-back"
                    data-sal-duration="500"
                    
                />
            {/if}
        </div>
        <div class="col-12">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <div class="col-12">
            <h4>About</h4>
            <p>{challenge}</p>
        </div>
        <div class="col-12">
            <h4>Technologies</h4>
            {#each stack as tech, i}
                <p class="tech-name">{
                i === stack.length - 1 ? skills[tech].name : `${skills[tech].name}, `
                }</p>
            {/each}
        </div>
    </div>
</div>
<script>
import { onMount } from "svelte";
import skills from "$data/skills.json";
import sal from "sal.js";
import "sal.js/dist/sal.css";

export let title = "";
export let description = "";
export let challenge = "";
export let stack = [];
export let image = {};

let currentSlide = 0;
let showAnimation = true;

const handleSwapAnimation = () => (showAnimation = true);

onMount(() => {
    if(image.slideshow.length > 0) {
        setInterval(() => (currentSlide = currentSlide < image.slideshow.length - 1 ? currentSlide + 1 : 0), 3000);
    }
    sal({
      threshold: .75,
      once: true
    });

})
</script>