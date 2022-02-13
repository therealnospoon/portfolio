<div class="container" id="work">
    <div class="col-12 d-flex justify-content-center mb-5">
        <h2>Recent Work</h2>
    </div>
    {#each projects as project}
        <div class="row">
            <div class="col-12">
                <ProjectCard {...project} />
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
    .row {
        margin-bottom: 3rem;
    }
</style>


<script>
    import projects from "$data/projects.json";
    import ProjectCard from "$components/project-card.svelte";
</script>