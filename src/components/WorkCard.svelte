<script>
export let title;
export let description;
export let imageUrl;
export let siteUrl;

function handleSiteClick(siteUrl) {
    window.open({siteUrl});
}

</script>

<style type="text/scss">
    .card-container {
        padding: 1rem;
        background-color: transparent;
        box-shadow: 2px 2px 10px -1px rgba(0,0,0,0);
        position:relative;
        transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
        img {
            width: 100%;
            height: 280px;
            object-fit: cover;
        }
        .title {
            position: relative;
            display: inline;
            margin: 1rem 0;
            color: #fff;

            &:after {
                content: "";
                width: 0;
                height: 2px;
                background-color: #fff;
                position: absolute;
                top: 99.9%;
                left: 0;
                transition: all 250ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
            }
        }
        .description {
            color: transparent;
            transition: color 500ms ease-in;
        }
        &:hover {
            box-shadow: 2px 2px 10px -1px rgba(0,0,0,0.75);
            transform: scale(1.02);
            cursor: pointer;
            .title {
                &:after {
                    width: 100%;
                }
            } 
            .description {
                color: #fff;
            }  
        }
    }
</style>

<section>
    <div class="card-container container on:click={handleSiteClick(siteUrl)}">
     <div class="row">
        <div class="col-12">
            <img src={imageUrl} alt="site image for {title}" />
        </div>
     </div>
     <div class="row">
        <div class="col-12">
            <h1 class="title mt-1">{title}</h1>
        </div>
     </div>
     <div class="row">
        <div class="col">
            <p class="description mt-1">{description}</p>
        </div>
     </div>
    </div>
</section>