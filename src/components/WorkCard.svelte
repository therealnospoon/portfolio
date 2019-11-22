<script>
export let title;
export let description;
export let imageUrl;

</script>

<style>
    .card-container {
        width: 400;
        height: 200;
        background-color: aquamarine;
        box-shadow: 2px 2px 10px -1px rgba(0,0,0,0.75);
        color: white;
    }
</style>

<section>
    <div class="card-container container">
     <div class="row">
        <div class="col-12">
            <img src={imageUrl} alt="site image for {title}" />
        </div>
     </div>
     <div class="row">
        <div class="col-12">
            <h1>{title}</h1>
        </div>
     </div>
     <div class="row">
        <div class="col">
            <p>{description}</p>
        </div>
     </div>
    </div>
</section>