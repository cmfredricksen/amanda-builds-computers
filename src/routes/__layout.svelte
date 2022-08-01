<script>
    import "../global.css"
    import Header from "$lib/header.svelte"
    import Footer from "$lib/footer.svelte";
</script>

<Header />
<div class="wrapper">
    <slot />
</div>
<Footer />

<style>
    .wrapper {
        /* width: 80%; */
        margin: 0 auto ;
        background-color: var(--clr-purple-black);
        padding: .5rem 3rem;
    }
</style>