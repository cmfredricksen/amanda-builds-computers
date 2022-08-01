<script>
    import Nav from "./nav.svelte"
</script>

<header>
    <h2>Amanda Builds Computers</h2>
    <Nav />
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .25rem .5rem;
        background-color: var(--clr-purple-black);
        border-bottom: 3px solid var(--clr-purple-dk);
    }
</style>