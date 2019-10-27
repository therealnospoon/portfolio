import App from './App.svelte';
import './assets/styles/bootstrap/bootstrap.scss';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

var app = new App({
	target: document.body
});

export default app;