<script>
    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Prices",
            path: "/services#prices"
        }
    ]
</script>

<nav>
    {#each links as {title, path}}
        <a href={path}>{title}</a>
    {/each}
</nav>

<style>
    a {
        margin-left: 1rem;
    }
    nav {
        text-align: right;
    }
</style>