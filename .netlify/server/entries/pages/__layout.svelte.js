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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_d4aa807a = require("../../_app/immutable/chunks/index-d4aa807a.js");
const global = "";
const nav_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "a.svelte-1j32ya7{margin-left:1rem}nav.svelte-1j32ya7{text-align:right}",
  map: null
};
const Nav = (0, import_index_d4aa807a.c)(($$result, $$props, $$bindings, slots) => {
  const links = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    {
      title: "Prices",
      path: "/services#prices"
    }
  ];
  $$result.css.add(css$3);
  return `<nav class="${"svelte-1j32ya7"}">${(0, import_index_d4aa807a.e)(links, ({ title, path }) => {
    return `<a${(0, import_index_d4aa807a.a)("href", path, 0)} class="${"svelte-1j32ya7"}">${(0, import_index_d4aa807a.b)(title)}</a>`;
  })}
</nav>`;
});
const header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "header.svelte-1g2tl10{display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;padding:.5rem .5rem;background-color:var(--clr-purple-black);border-bottom:3px solid var(--clr-purple-dk);position:sticky;width:100%;top:0}h2.svelte-1g2tl10{text-align:left}i.svelte-1g2tl10{color:var(--clr-purple-lt);text-align:center}",
  map: null
};
const Header = (0, import_index_d4aa807a.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<header class="${"svelte-1g2tl10"}"><h2 class="${"svelte-1g2tl10"}">Amanda Builds Computers</h2>
    <i class="${"material-icons svelte-1g2tl10"}">build_circle</i>
    ${(0, import_index_d4aa807a.v)(Nav, "Nav").$$render($$result, {}, {}, {})}
</header>`;
});
const footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-wq99ek{text-align:center;padding:3rem 0;font-size:1.5rem;border-top:1px solid var(--clr-accent-orange)}",
  map: null
};
const Footer = (0, import_index_d4aa807a.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-wq99ek"}"><p>\xA9 Amanda Morgan <i class="${"material-icons"}">build_circle</i> All Rights Reserved \u2665</p>
</footer>`;
});
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-7l586j{background-color:var(--clr-purple-black)}",
  map: null
};
const _layout = (0, import_index_d4aa807a.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<link href="${"https://fonts.googleapis.com/icon?family=Material+Icons"}" rel="${"stylesheet"}">

${(0, import_index_d4aa807a.v)(Header, "Header").$$render($$result, {}, {}, {})}
<div class="${"wrapper svelte-7l586j"}">${slots.default ? slots.default({}) : ``}</div>
${(0, import_index_d4aa807a.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
