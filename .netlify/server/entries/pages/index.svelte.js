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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_d4aa807a = require("../../_app/immutable/chunks/index-d4aa807a.js");
const card_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".card.svelte-prvutf.svelte-prvutf{display:flex;flex-direction:column;align-items:center;justify-content:space-around;width:22%;padding:1rem 2rem;border:1px solid var(--clr-purple-black);border-radius:.5rem;background-color:var(--clr-purple-dk);border:1px solid var(--clr-purple)}a.svelte-prvutf.svelte-prvutf:hover{background-color:var(--clr-purple);color:var(--clr-purple-white)}a.svelte-prvutf:hover i.svelte-prvutf{background-color:var(--clr-purple-dk)}h3.svelte-prvutf.svelte-prvutf{color:var(--clr-accent-turq);margin-bottom:1rem}i.svelte-prvutf.svelte-prvutf{font-size:4rem;border:1px solid var(--clr-purple);margin-bottom:2rem;padding:1rem;border-radius:.5rem;background-color:var(--clr-purple-black)\r\n}ul.svelte-prvutf.svelte-prvutf{display:flex;flex-wrap:wrap;justify-content:space-between}strong.svelte-prvutf.svelte-prvutf{margin:0 .15rem}p.svelte-prvutf.svelte-prvutf{margin:1rem 0;font-size:small;text-align:center}",
  map: null
};
const Card = (0, import_index_d4aa807a.c)(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { path = "" } = $$props;
  let { icon = "" } = $$props;
  let { text = "" } = $$props;
  let { list = [""] } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.list === void 0 && $$bindings.list && list !== void 0)
    $$bindings.list(list);
  $$result.css.add(css$1);
  return `<a${(0, import_index_d4aa807a.a)("href", path, 0)} class="${"card svelte-prvutf"}"><h3 class="${"svelte-prvutf"}">${(0, import_index_d4aa807a.b)(title)}</h3>
        <i class="${"material-icons svelte-prvutf"}">${(0, import_index_d4aa807a.b)(icon)}</i>
        <ul class="${"svelte-prvutf"}">${(0, import_index_d4aa807a.e)(list, (item) => {
    return `<strong class="${"svelte-prvutf"}">${(0, import_index_d4aa807a.b)(item)}</strong>`;
  })}</ul>
        <p class="${"svelte-prvutf"}">${(0, import_index_d4aa807a.b)(text)}</p>
    </a>`;
});
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-dhbp2a{width:100%;margin:1rem 0;background-image:url(/static/images/mboard.jpg);background-repeat:no-repeat;background-size:cover;background-position:center}.hero-section.svelte-dhbp2a{opacity:.8;height:30vh;text-align:center;background-color:var(--clr-purple-dk);padding:2rem 3rem;display:flex;flex-direction:column;justify-content:space-between;border-left:1px solid var(--clr-accent-turq);border-right:1px solid var(--clr-accent-turq)}.card-container.svelte-dhbp2a{display:flex;justify-content:space-evenly;margin:2rem 0}",
  map: null
};
const Routes = (0, import_index_d4aa807a.c)(($$result, $$props, $$bindings, slots) => {
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
    }
  ];
  $$result.css.add(css);
  return `<main class="${"svelte-dhbp2a"}"><div class="${"hero-section svelte-dhbp2a"}"><h3>When you need a hand with your computer...</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores sed laudantium dolor consequatur vero modi expedita officiis laborum alias suscipit? Provident odio, tempora sequi, aperiam, ullam iure similique ad doloremque unde aliquid ab in culpa! Suscipit excepturi reiciendis ex eligendi debitis commodi ea iste vitae ipsa dolorum, quaerat velit exercitationem.</p></div></main>

<div class="${"card-container svelte-dhbp2a"}">${(0, import_index_d4aa807a.e)(cardContent, ({ title, path, text, list, icon }) => {
    return `${(0, import_index_d4aa807a.v)(Card, "Card").$$render($$result, { title, path, text, list, icon }, {}, {})}`;
  })}
</div>`;
});
