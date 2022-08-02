<script>
    import "../global.css"
    import Header from "$lib/header.svelte"
    import Footer from "$lib/footer.svelte";
</script>

<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">

<Header />
<div class="wrapper">
    <slot />
</div>
<Footer />

<style>
    .wrapper {
        background-color: var(--clr-purple-black);
    }
</style>