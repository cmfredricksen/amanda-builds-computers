var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Services
});
module.exports = __toCommonJS(stdin_exports);
var import_index_d4aa807a = require("../../../_app/immutable/chunks/index-d4aa807a.js");
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1mmt03j.svelte-1mmt03j{width:70%;margin:0 auto;border-left:1px solid var(--clr-purple);border-right:1px solid var(--clr-purple);background-color:var(--clr-purple-dk)}main.svelte-1mmt03j h2.svelte-1mmt03j{text-align:center;padding:2rem 0 1rem;font-weight:1000}.page-links.svelte-1mmt03j.svelte-1mmt03j{text-align:center}.page-links.svelte-1mmt03j a.svelte-1mmt03j{margin:0 1rem;color:var(--clr-accent-orange);font-weight:1000}.page-links.svelte-1mmt03j a.svelte-1mmt03j:hover{color:var(--clr-purple-white)}.bg-image.svelte-1mmt03j.svelte-1mmt03j{width:100%;margin:1rem 0;background-image:url(/static/images/mem-slots.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;background-color:var(--clr-purple-dk);height:25vh}.color-overlay.svelte-1mmt03j.svelte-1mmt03j{height:100%;background-color:var(--clr-purple-black);opacity:.7;border:1px dotted var(--clr-accent-turq)}section.svelte-1mmt03j.svelte-1mmt03j{display:flex;flex-direction:column;justify-content:space-between;border:0 1px 1px 1px dotted var(--clr-purple);padding:3rem 2rem}section.svelte-1mmt03j.svelte-1mmt03j:nth-child(even){background-color:var(--clr-purple-black)}section.svelte-1mmt03j h2.svelte-1mmt03j{display:flex;justify-content:space-between}p.svelte-1mmt03j.svelte-1mmt03j{line-height:1.5;padding:2rem;color:var(--clr-purple-white)}a.svelte-1mmt03j.svelte-1mmt03j{text-align:center;padding:4rem 0 1rem}",
  map: null
};
const Services = (0, import_index_d4aa807a.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-1mmt03j"}"><div class="${"bg-image svelte-1mmt03j"}"><div class="${"color-overlay svelte-1mmt03j"}"><h2 class="${"svelte-1mmt03j"}">Services Offered</h2>

    <div class="${"page-links svelte-1mmt03j"}"><a href="${"#consult"}" class="${"svelte-1mmt03j"}">Consultation</a>
        <a href="${"#upgrade"}" class="${"svelte-1mmt03j"}">Upgrades</a>
        <a href="${"#repair"}" class="${"svelte-1mmt03j"}">Repairs</a>
        <a href="${"#build"}" class="${"svelte-1mmt03j"}">Build</a></div></div></div>

    <section class="${"consultation svelte-1mmt03j"}" id="${"consult"}"><h2 class="${"svelte-1mmt03j"}">Consultation <i class="${"material-icons"}">call</i></h2>
        <p class="${"svelte-1mmt03j"}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci velit minima architecto nostrum iste nesciunt odit earum doloribus cupiditate porro, quis maiores, perspiciatis, unde nulla vel! Sed ipsam nihil pariatur iure delectus soluta harum earum commodi repudiandae dicta fugiat quia numquam, magni laborum molestiae, asperiores neque voluptates, nesciunt hic placeat quidem officiis non excepturi architecto. Veritatis non animi debitis molestiae sunt adipisci doloremque placeat! Reprehenderit libero totam, ab doloribus saepe recusandae nobis nesciunt a quisquam, iusto quibusdam doloremque placeat quas temporibus ducimus consectetur sunt perspiciatis. Voluptatum obcaecati quo accusantium nemo quas earum officia beatae, debitis quibusdam aspernatur ipsam omnis esse.\\</p>
    <a href="${"#top"}" class="${"svelte-1mmt03j"}"><i class="${"material-icons"}">arrow_circle_up</i></a></section>
    <section class="${"upgrade svelte-1mmt03j"}" id="${"upgrade"}"><h2 class="${"svelte-1mmt03j"}">Upgrades <i class="${"material-icons"}">memory</i></h2>
        <p class="${"svelte-1mmt03j"}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corporis quidem earum repellat dolore ex error similique sit provident dolor fugit illum inventore repellendus maxime mollitia beatae culpa temporibus, quo praesentium non laboriosam a, assumenda voluptas. Esse aut perferendis odio in animi obcaecati tempora maxime voluptatum, iusto repellendus excepturi deleniti! Ad voluptatibus id, totam soluta aliquam suscipit unde earum repellat itaque neque amet vero saepe, nostrum praesentium pariatur beatae. Minima recusandae quibusdam accusamus, veniam ullam sit esse illum magnam rem sapiente, vero non nemo illo dolor. Exercitationem quia assumenda explicabo. Facere nihil fugit iure suscipit ex aliquam quam exercitationem beatae!</p>
    <a href="${"#top"}" class="${"svelte-1mmt03j"}"><i class="${"material-icons"}">arrow_circle_up</i></a></section>
    <section class="${"repair svelte-1mmt03j"}" id="${"repair"}"><h2 class="${"svelte-1mmt03j"}">Repairs <i class="${"material-icons"}">home_repair_service</i></h2>
        <p class="${"svelte-1mmt03j"}">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, consequatur? Perferendis quam ipsum quisquam odit placeat neque at earum ad ipsa eum? Iure sequi atque, deleniti rerum dignissimos non odit aliquam nemo blanditiis cupiditate distinctio reprehenderit rem porro molestias perferendis, temporibus optio, autem quam consequatur ex ea fugiat! Odio dolorum molestiae velit, animi ipsa pariatur repellat quidem hic natus dignissimos eos ullam iste. Ducimus necessitatibus sequi deleniti numquam natus fuga labore placeat debitis eaque. Rem libero error obcaecati ut, blanditiis fugiat debitis ea? Consequuntur perspiciatis totam molestias sint aliquam illum consequatur quos vel? Sint, ab iusto ratione fugiat corporis a!</p>
    <a href="${"#top"}" class="${"svelte-1mmt03j"}"><i class="${"material-icons"}">arrow_circle_up</i></a></section>
    <section class="${"build svelte-1mmt03j"}" id="${"build"}"><h2 class="${"svelte-1mmt03j"}">Custom Build <i class="${"material-icons"}">build</i></h2>
        <p class="${"svelte-1mmt03j"}">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, tenetur et? Minima deleniti voluptas, nostrum sapiente dolore ea amet nemo, recusandae fuga quasi labore rem id facilis quo sunt esse. Amet officia recusandae adipisci officiis quisquam perferendis sint, nulla voluptas sit aspernatur in minus magni modi blanditiis, hic ea quidem animi explicabo ducimus odit, dolorum eligendi exercitationem? Laboriosam quibusdam provident, temporibus laborum maiores obcaecati pariatur quaerat similique enim sequi odit nostrum odio ducimus sapiente possimus ullam vel assumenda eum sunt rerum consectetur magni? Illo veniam placeat veritatis ut, iste sapiente ratione eos a culpa, quos sequi debitis eveniet molestiae beatae.</p>
    <a href="${"#top"}" class="${"svelte-1mmt03j"}"><i class="${"material-icons"}">arrow_circle_up</i></a></section>
    <section class="${"prices svelte-1mmt03j"}" id="${"prices"}"><h2 class="${"svelte-1mmt03j"}">Prices</h2>
        <p class="${"svelte-1mmt03j"}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit saepe nihil dolor at officia quibusdam molestias hic possimus voluptates, placeat ipsa corrupti, molestiae qui odio itaque. Cupiditate eius libero doloremque vel, minima, adipisci blanditiis in culpa tempora, similique hic officiis laborum veniam quibusdam deleniti sit. At fuga dolor beatae quidem id quis ipsam, quibusdam eos dolorum quisquam a consectetur fugit temporibus accusantium? Consequatur fugit delectus minus quibusdam saepe veritatis, praesentium maxime ratione mollitia aspernatur perspiciatis nostrum in! Eaque officia expedita, cupiditate distinctio quidem explicabo provident. Necessitatibus, tempora, facilis harum itaque hic rerum doloremque ipsum, ratione exercitationem accusamus totam obcaecati sequi.</p>
        <a href="${"#top"}" class="${"svelte-1mmt03j"}"><i class="${"material-icons"}">arrow_circle_up</i></a></section>
</main>`;
});
