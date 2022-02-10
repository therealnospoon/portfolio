<style lang="scss">
    .top-btn {
        text-decoration: none;
        appearance: none;
        font-size: 2rem;
        color: var(--color-primary);
    }
    .email-btn, .linkedin-btn {
        border: none;

        &:hover,
        &:focus {
            animation-name: levitate;
            animation-duration: 1500ms;
            animation-iteration-count: infinite;
            animation-timing-function: cubic-bezier(.63, .12, .33, 1.1);
        }

        @keyframes levitate {
            from {
                transform: translate(0, 0px);
            }
            15% {
                transform: translate(0, -10px);
            }
            30% {
                transform: translate(0, -0px);
            }
            to {
                transform: translate(0, -0px);
            }
        }

    }
</style>

<div class="container">
    <div class="row">
        <div class="col-12 d-flex justify-content-center">
            <a href="#top" class="button button-underline top-btn">
                Back to top
            </a>
        </div>
        <div class="col-12 d-flex justify-content-center p-4 mb-5 mt-2">
            <a 
                class="email-btn mx-4"
                href="mailto:timkimdesigns@gmail.com"
            >
                <Icon name="email" size="large" color="primary" />
            </a>
            <a 
                class="linkedin-btn mx-4"
                href="https://www.linkedin.com/in/tkdev/"
                target="_blank"
            >
                <Icon name="linkedin" size="large" color="primary" />
            </a>
        </div>
    </div>
</div>

<script>
    import Icon from "$components/icon.svelte";
</script>