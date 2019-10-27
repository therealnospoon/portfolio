<script>
import Header from './sections/Header.svelte';
import Splitting from "splitting";

import { onMount } from 'svelte';

onMount(async () => {
	Splitting();	
});

</script>

<style type="text/scss" scoped>
	@import 'assets/styles/base/variables';
	@import 'assets/styles/base/mixins';
</style>

<div>
	<Header/>
</div>