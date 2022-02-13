<svelte:window bind:innerWidth/>

<div bind:this={intersector}>
    <slot></slot>
</div>

<script>
import { onMount, createEventDispatcher } from "svelte";
import { browser } from '$app/env';

let intersector;
let innerWidth;

const dispatch = createEventDispatcher();

if(browser) {
    const observer = new IntersectionObserver((events) => {
        const [ event ] = events;
        
        dispatch('event', event);
    });
    
    onMount(() => {
        if(innerWidth < 576) {
            observer.unobserve(intersector)
        } else {
            observer.observe(intersector)
        }
    });
}
</script>