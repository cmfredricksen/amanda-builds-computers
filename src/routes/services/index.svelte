<svelte:head>
    <title>Amanda Builds Computers | Services</title>
</svelte:head>

<div class="bg-image">
    <div class="color-overlay">
        <h2>Services Offered</h2>
        
        <div class="page-links">
            <a href="#consult">Consultation <i class="material-icons">call</i></a>
            <a href="#upgrades">Upgrades <i class="material-icons">memory</i></a>
            <a href="#repairs">Repairs <i class="material-icons">home_repair_service</i></a>
            <a href="#build">Build <i class=material-icons>build</i></a>
        </div>
    </div>
</div>

<main>
    <section class="consultation" id="consult">

        <h2>Consultation <i class="material-icons">call</i> </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci velit minima architecto nostrum iste nesciunt odit earum doloribus cupiditate porro, quis maiores, perspiciatis, unde nulla vel! Sed ipsam nihil pariatur iure delectus soluta harum earum commodi repudiandae dicta fugiat quia numquam, magni laborum molestiae, asperiores neque voluptates, nesciunt hic placeat quidem officiis non excepturi architecto. Veritatis non animi debitis molestiae sunt adipisci doloremque placeat! Reprehenderit libero totam, ab doloribus saepe recusandae nobis nesciunt a quisquam, iusto quibusdam doloremque placeat quas temporibus ducimus consectetur sunt perspiciatis. Voluptatum obcaecati quo accusantium nemo quas earum officia beatae, debitis quibusdam aspernatur ipsam omnis esse.\</p>
    <a href="#top"><i class="material-icons">arrow_circle_up</i> </a>


    </section>
    <section class="upgrade" id="upgrades">

        <h2>Upgrades <i class="material-icons">memory</i> </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corporis quidem earum repellat dolore ex error similique sit provident dolor fugit illum inventore repellendus maxime mollitia beatae culpa temporibus, quo praesentium non laboriosam a, assumenda voluptas. Esse aut perferendis odio in animi obcaecati tempora maxime voluptatum, iusto repellendus excepturi deleniti! Ad voluptatibus id, totam soluta aliquam suscipit unde earum repellat itaque neque amet vero saepe, nostrum praesentium pariatur beatae. Minima recusandae quibusdam accusamus, veniam ullam sit esse illum magnam rem sapiente, vero non nemo illo dolor. Exercitationem quia assumenda explicabo. Facere nihil fugit iure suscipit ex aliquam quam exercitationem beatae!</p>
    <a href="#top"><i class="material-icons">arrow_circle_up</i> </a>
    </section>
    <section class="repair" id="repairs">

        <h2>Repairs <i class="material-icons">home_repair_service</i> </h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, consequatur? Perferendis quam ipsum quisquam odit placeat neque at earum ad ipsa eum? Iure sequi atque, deleniti rerum dignissimos non odit aliquam nemo blanditiis cupiditate distinctio reprehenderit rem porro molestias perferendis, temporibus optio, autem quam consequatur ex ea fugiat! Odio dolorum molestiae velit, animi ipsa pariatur repellat quidem hic natus dignissimos eos ullam iste. Ducimus necessitatibus sequi deleniti numquam natus fuga labore placeat debitis eaque. Rem libero error obcaecati ut, blanditiis fugiat debitis ea? Consequuntur perspiciatis totam molestias sint aliquam illum consequatur quos vel? Sint, ab iusto ratione fugiat corporis a!</p>
    <a href="#top"><i class="material-icons">arrow_circle_up</i> </a>
    </section>
    <section class="build" id="build">

        <h2>Custom Build <i class="material-icons">build</i> </h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, tenetur et? Minima deleniti voluptas, nostrum sapiente dolore ea amet nemo, recusandae fuga quasi labore rem id facilis quo sunt esse. Amet officia recusandae adipisci officiis quisquam perferendis sint, nulla voluptas sit aspernatur in minus magni modi blanditiis, hic ea quidem animi explicabo ducimus odit, dolorum eligendi exercitationem? Laboriosam quibusdam provident, temporibus laborum maiores obcaecati pariatur quaerat similique enim sequi odit nostrum odio ducimus sapiente possimus ullam vel assumenda eum sunt rerum consectetur magni? Illo veniam placeat veritatis ut, iste sapiente ratione eos a culpa, quos sequi debitis eveniet molestiae beatae.</p>
    <a href="#top"><i class="material-icons">arrow_circle_up</i> </a>
    </section>
    <section class="prices" id="prices">
        <h2>Prices</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit saepe nihil dolor at officia quibusdam molestias hic possimus voluptates, placeat ipsa corrupti, molestiae qui odio itaque. Cupiditate eius libero doloremque vel, minima, adipisci blanditiis in culpa tempora, similique hic officiis laborum veniam quibusdam deleniti sit. At fuga dolor beatae quidem id quis ipsam, quibusdam eos dolorum quisquam a consectetur fugit temporibus accusantium? Consequatur fugit delectus minus quibusdam saepe veritatis, praesentium maxime ratione mollitia aspernatur perspiciatis nostrum in! Eaque officia expedita, cupiditate distinctio quidem explicabo provident. Necessitatibus, tempora, facilis harum itaque hic rerum doloremque ipsum, ratione exercitationem accusamus totam obcaecati sequi.</p>
        <a href="#top"><i class="material-icons">arrow_circle_up</i> </a>
    </section>
</main>

<style>
    main {
        width: 70%;
        margin: 0 auto;
        background-color: var(--clr-purple-black);
    }
    
     h2 {
        text-align: center;
        padding: 2rem 0 1rem;
        font-weight: 1000;
    }

    .page-links {
        text-align: center;
        background-color: var(--clr-black);
    }
    
    .page-links a {
        margin: 0 1rem;
        color: var(--clr-accent-orange);
        font-weight: 1000;
    }

    .page-links i {
        color: var(--clr-purple-lt);
    }
    
    .page-links a:hover {
        color: var(--clr-purple-white);
    }

    .bg-image {
        width: 100%;
        margin: 1rem 0;
        background-image: url(/static/images/mem-slots.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-color: var(--clr-purple-dk);
    }

    .color-overlay {
        height: 30vh;
        background-color: var(--clr-black);
        opacity: .7;
        border-left: 1px solid var(--clr-accent-turq);
        border-right: 1px solid var(--clr-accent-turq);
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 0 1px 1px 1px dotted var(--clr-purple);
        padding: 3rem 2rem;
    }

    section:nth-child(even) {
        background-color: var(--clr-purple-dk);
    }

    section h2 {
        display: flex;
        justify-content: space-between;
    }

    p {
        line-height: 1.5;
        padding: 2rem;
        color: var(--clr-purple-white);
    }

    a {
        text-align: center;
        padding: 4rem 0 1rem;
    }
</style>

