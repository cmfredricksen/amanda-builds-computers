<script>    
    export let title = '' ;
    export let path = "";
    export let icon = "";
    export let text = "";
    export let list = [""];
</script>

    <a href={path} class="card">
        <h3>{title}</h3>
        <i class="material-icons">{icon}</i>
        <ul>
            {#each list as item}
            <strong>{item}</strong>
            {/each}
        </ul>
        <p>{text}</p>
    </a>

<style>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 22%;
    padding:  1rem 2rem;
    border: 1px solid var(--clr-purple-black);
    border-radius: .5rem;
    background-color: var(--clr-purple-dk);
    border: 1px solid var(--clr-purple);
}
a:hover {
    background-color: var(--clr-purple);
    color: var(--clr-purple-white);
}
a:hover i {
    background-color: var(--clr-purple-dk);
}
h3 {
    color: var(--clr-accent-turq);
    margin-bottom: 1rem;
}

i {
    font-size: 4rem;
    border: 1px solid var(--clr-purple-white);
    margin-bottom: 2rem;
    padding: 1rem;
    border-radius: .5rem;
    background-color: var(--clr-purple-black)
}
ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
strong {
    margin: 0 .15rem;
}

p {
    margin: 1rem 0;
    font-size: small;
    text-align: center;
}
</style>