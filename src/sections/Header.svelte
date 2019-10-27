<script>
	let name = 'Lucas';
</script>

<style type="text/scss">
	@import '../assets/styles/base/variables';
	@import '../assets/styles/base/mixins';
	
	// :global(.char) {
	// 	color: red;
	// }

	.header-wrapper {
		background: rgb(8, 206, 179);
		height: 100vh;
		color: #ffffff;
	}
	
	.main-statement {
		height: 100%;

		:global(.char) {
			opacity: 0;
			animation: slide-down 2s forwards;
			animation-delay: calc(.5s + (.1s * var(--char-index)));

			@keyframes slide-down {
				from {
					transform: translateY(-125%);
					opacity: 0;
				}
				to {
					transform: translateY(0);
					opacity: 1;
				}
			}
			// transform: translateY(125%);
			// transition: 100ms ease-in;
			// transition-delay: calc(.5s + (.1s * var(--char-index)));
			// &.active {
			// 	opacity: 1;
			// 	transform: translateY(0);
			// }
			
		}
	}
		
</style>
<section>
	<div class="header-wrapper">
		<div class="main-statement d-flex justify-content-center align-items-center">
			<h1 class="statement" data-splitting="">Create Your Own Doors</h1>
		</div>
	</div>
</section>