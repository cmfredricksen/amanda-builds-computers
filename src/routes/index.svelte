<script>
import Card from "$lib/components/card.svelte";

    const cardContent = [
        {
            title: "Consultation",
            path: "/services#consult",
            text: "I can advise you on upgrades, repairs and builds.",
            list: ["Fast!", "Easy!", "Helpful!"],
            icon: "phone"
        },
        {
            title: "Upgrades",
            path: "/services#upgrade",
            text: "Give your computer new life with added memory and storage",
            list: ["High Quality!", "Fast Turnaround"],
            icon: "memory"
        },
        {
            title: "Repairs",
            path: "/services#repair",
            text: "Fix or replace old and worn parts.",
            list: ["Professional Work"],
            icon: "home_repair_service"
        },
        {
            title: "Custom Builds",
            path: "/services#build",
            text: "Get a custom built computer to meet your needs.",
            list: ["Gaming!", "Coding!", "Office!"],
            icon: "build"
        },
    ]
</script>

<main>
    <div class="hero-section">
        <h3>When you need a hand with your computer...</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores sed laudantium dolor consequatur vero modi expedita officiis laborum alias suscipit? Provident odio, tempora sequi, aperiam, ullam iure similique ad doloremque unde aliquid ab in culpa! Suscipit excepturi reiciendis ex eligendi debitis commodi ea iste vitae ipsa dolorum, quaerat velit exercitationem.</p>
    </div>
</main>

<div class="card-container">
    {#each cardContent as {title, path, text, list, icon}}
    <Card {title} {path} {text} {list} {icon}/>
    {/each}
</div>

<style>
    main {
        width: 100%;
        margin: 1rem 0;
    }

    .hero-section {
        height: 30vh;
        text-align: center;
        background-color: var(--clr-purple-dk);
        padding: 2rem 3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-left: 1px solid var(--clr-accent-turq);
        border-right: 1px solid var(--clr-accent-turq);
    }

    .card-container {
        display: flex;
        justify-content: space-evenly;
        margin: 2rem 0;
    }

</style>