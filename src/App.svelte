<script>
	let name = 'Lucas';
</script>

<style type="text/scss" scoped>
	@import './assets/styles/base/variables';
	@import './assets/styles/base/mixins';
	
		h1 {
			&.testing {

				color: $primary;
				@include media-breakpoint-up (md) {
					color: green;
				}
			}
		}
	
		
</style>
<section>
	<h1 class="testing">Hello {name}!</h1>
</section>