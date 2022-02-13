import { writable } from "svelte/store";

const showHamburger = writable(false);

const isMenuOpen = writable(false);

export {
    showHamburger,
    isMenuOpen
};