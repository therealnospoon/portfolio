<div bind:this={intersector}>
    <slot></slot>
</div>

<script>
import { onMount, createEventDispatcher } from "svelte";
import { browser } from '$app/env';

let intersector;

const dispatch = createEventDispatcher();

if(browser) {
    const observer = new IntersectionObserver((events) => {
        const [ event ] = events;
        
        dispatch('event', event);
    });
    
    onMount(() => observer.observe(intersector));
}
</script>