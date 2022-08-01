<script>    
    export let title = '' ;
    export let path = "";
    // export let icon = "";
    export let text = "";
    export let list = [""];
</script>

<div class="container">
    <a href={path} class="card">
        <h3>{title}</h3>
        <img src={path} alt={title}>
        {#each list as item}
            <h3>{item.toUpperCase()}</h3>
        {/each}
        <p>{text}</p>


    </a>
</div>

<style>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
</style>