<script>
  import Header from "./sections/header/Header.svelte";
  import Work from "./sections/work/work.svelte";

  import { onMount } from "svelte";

  onMount(async () => {});
</script>

<style type="text/scss" scoped>
  @import "assets/styles/base/variables";
  @import "assets/styles/base/mixins";
</style>

<div>
  <Header />
  <Work />

</div>
