<style lang="scss">
    .nav {
        position: fixed;
        width: 100%;
        top: 1rem;
        right: 0;
        z-index: 6;
        @media only screen and (min-width: 576px) {
            transition: right 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .button {
            margin: 1rem 1rem 0 0;
        }
        &.showHamburger {
            right: -24rem;

            .contact-link,
            .resume-link,
            .work-link {
                opacity: 0;
                pointer-events: none;
            }
            .hamburger {
                right: 27rem;
                transform: rotate(0deg);
                opacity: 1 ;
            }
        }  
    }
    .hamburger {
        display: block;
        opacity: 0;
        right: -50px;
        border: none;
        text-decoration: none;
        background: none;
        cursor: pointer;
        position: relative;
        transform: rotate(180deg);
        top: .25rem;
        @media only screen and (min-width: 576px) {
            top: 0;
            transition: right 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
            transform 500ms ease-in-out, opacity 250ms linear;
        }

        .hamburger-box {
            display: block;
            position: absolute;
            cursor: pointer;
            z-index: 2;

            @media only screen and (min-width: 576px) {
                top: -7px;
            left: -5px;
            }

            &.fullmenu {
                .span3 {
                    opacity: 1;
    
                    transform: rotate(-45deg) translate(5px, -3px);
                    background: var(--color-background);
                }
                .span2 {
                    opacity: 0;
                    transform: rotate(0deg) scale(0.2, 0.2);
                 }
                .span1 {
                    transform: rotate(45deg) translate(4px, -2px);
                    background: var(--color-background);
                }
            }
        }
       
        span {
            display: block;
            width: 33px;
            height: 6px;
            margin-bottom: 4px;
            position: relative;
            background: var(--color-primary);
            border-radius: 1.5px;
            z-index: 5;
            transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
            background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
            &:first-child {
                transform-origin: top left;
            }
            &:nth-last-child(2) {
                transform-origin: center right;
            }
            &:nth-last-child(3) {
                transform-origin: bottom left;
            }
        }
    }


    .full-menu {
        position: fixed;
        opacity: 1;
        pointer-events: all;
        transition: opacity 250ms ease-in 100ms;
        height: 105vh;
        width: 100vw;
        background-color: var(--color-primary);
        color: var(--color-background);
        z-index: 5;
        @media only screen and (min-width: 576px) {
        height: 100vh;
        }
        .menu-contact,
        .menu-resume,
        .menu-work,
        .menu-top {
            display: inline-block;
            border: none;
            padding: 0.5rem 1rem;
            margin: 1rem;
            text-decoration: none;
            color: var(--color-background);
            border-radius: 2px;
            text-align: center;
            cursor: pointer;
            font-size: 2.5rem !important;
            font-family: "Playfair Display", serif;
            font-weight: 900;
            letter-spacing: .01em;
            background: transparent;
            @media only screen and (min-width: 576px) {
            font-size: 4rem !important;
            }
        }
    }
    .blue-circle {
        --blue-scale: 0;
        width: 100vw;
        height: 100vh;
        border-radius: 50%;
        position: fixed;
        top: 0;
        right: 0;
        background-color: var(--color-primary);
        transform: translate(50%, -50%) scale(var(--blue-scale));
        transition: transform 400ms ease-in-out;
        transform-origin: top center;

        &.active {
            --blue-scale: 6;
        }
    }

</style>

<svelte:window bind:innerWidth />

<IntersectionObserver on:event={intersectionHandler} >
<nav 
class="nav d-flex justify-content-end align-items-center"
class:showHamburger={$showHamburger}
>
    <div class="desktop d-none d-md-flex">
        <a href="#work" class="button button-underline work-link">
            Recent Work
        </a>
        <a href="mailto:timkimdesigns@gmail.com" class="button button-outline contact-link">
            Contact
        </a>
        <a href="./images/TK_Dev_Resume.pdf" download class="button button-outline resume-link">
            Download Resume
        </a>
    </div>
    <div class="mobile">
        <button 
            class="hamburger" 
            on:click={toggleMenu}
        >
        <div class="hamburger-box" class:fullmenu={menuOpen}>
            <span class="span1" />
            <span class="span2" />
            <span class="span3"/>
        </div>
        </button>
    </div>
</nav>

{#if menuOpen}
    <!-- Full page hamburger view -->
    <div
        class="full-menu d-flex flex-column justify-content-center
        align-items-center"
        transition:fly={{
            y:100,
            delay : 50,
            duration: 500,
            easing : quintInOut,
        }}
    >
        <a
            href="mailto:timkimdesigns@gmail.com"
            class="button menu-contact"
            on:click={toggleMenu}
        >
            Contact
        </a>
        <a
            href="./images/TK_Dev_Resume.pdf"
            download
            class="button menu-resume"
            on:click={toggleMenu}
        >
            Download Resume
        </a>
        <a
            href="#work"
            class="button menu-work"
            on:click={toggleMenu}
        >
            Recent Work
        </a>
        <a
            href="#top"
            class="button menu-top"
            on:click={toggleMenu}
        >
            Back To Top
        </a>
    </div>
{/if}

<div
    class="blue-circle"
    class:active={menuOpen}
/>
</IntersectionObserver>


<script>
import IntersectionObserver from "$components/intersection-observer.svelte";
import { showHamburger } from "/src/components/navStore.js";
import { quintInOut } from "svelte/easing";
import { fly } from "svelte/transition";
import { onMount } from "svelte";

let menuOpen = false;
let innerWidth;

const toggleMenu = () => { 
    menuOpen = !menuOpen
    
    if (menuOpen) {
        document.body.style.overflowY = "hidden";
    } else {
        document.body.style.overflowY = "scroll";
    }

};

const intersectionHandler = ({ detail }) => $showHamburger = !detail.isIntersecting;

onMount(() => {
    if (innerWidth < 576) {
        $showHamburger = true;
    }
})
</script>

