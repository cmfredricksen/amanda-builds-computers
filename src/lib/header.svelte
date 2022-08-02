<script>
    import Nav from "./nav.svelte"
</script>

<header>
    <h2>Amanda Builds Computers</h2>
    <i class="material-icons">build_circle</i>
    <Nav />
</header>

<style>
    header {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        padding: .5rem .5rem;
        background-color: var(--clr-purple-black);
        border-bottom: 3px solid var(--clr-purple-dk);
    }

    h2 {
        text-align: left;
    }

    i {
        color: var(--clr-purple-lt);
        text-align: center;
    }


</style>