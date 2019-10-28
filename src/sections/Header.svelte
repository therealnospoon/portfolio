<script>
	let name = 'Lucas';

	function addOpenSesame() {
		const allChars = document.querySelectorAll('.char');
		for (let i = 0; i < allChars.length; i++) {
			allChars[i].classList.toggle('open-sesame');
		}
	}
</script>

<style type="text/scss">
	@import '../assets/styles/base/variables';
	@import '../assets/styles/base/mixins';

	.header-wrapper {
		background: #ffffff;
		height: 100vh;
		color: #000000;
	}
	
	.main-statement {
		height: 100%;

		:global(.char) {
			opacity: 0;
			perspective: 400px;
			transform-style: preserve-3d;
			animation: slide-down 500ms forwards cubic-bezier(0, 1.18, .82, 1.02);
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

			transition: transform 0.8s cubic-bezier(.5,0,0,.9);
			//transition-duration: calc( 0.06s * calc( var(--char-total) ) );
			transition-delay: calc( 0.1s * (1 - var(--distance-percent)) );
			color: transparent;

			&:before,
			&:after {
			visibility: visible;
			}

			&:before { 
			color: rgb(104, 104, 104); 
			opacity: 0.85;
			transform: translateY(0%) rotateX(45deg) scale(1,0);
			//transform: translateY(0%) rotateX(0deg) scale(1,1);
			transform-origin: center 80%;
			}
			&:after { color: #000; }
		}
		:global(.open-sesame) {
			&:before {
			transform: translateY(0%) rotateX(55deg) scale(0.8);
			transform: translateY(0%) rotateX(55deg) scale(0.8, calc( 0.4 + (0.4 * ( 1 - var(--distance-percent))) ) );
			}

			&:after {
			transform: translateY(-20%) rotateX(55deg);
			transform: translateY(-50%) 
				translateY( calc(30% * var(--distance-percent) ) )
				rotateX(55deg);
			}
			
		}

		&__open-btn {
			appearance: none;
			border: none;
			margin-top: 2rem;
			border-radius: 4px;
			background-color: rgb(255, 194, 204);
			color: $primary;
		}
	}
		
</style>
<section>
	<div class="header-wrapper">
		<div class="main-statement d-flex flex-column justify-content-center align-items-center">
			<div class="row">
				<div class="col-12">
					<h1 class="statement" data-splitting>Let me open the door for you { name }</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<button on:click={ addOpenSesame } class="main-statement__open-btn">
					<p class="m-0">Open the door</p>
					</button>
				</div>
			</div>
		</div>
	</div>
</section>