import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Search_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".search.svelte-36a9o8{padding:20px;background-color:white}.search-box.svelte-36a9o8{width:500px;font-size:40px}.search-btn.svelte-36a9o8{background-color:white;height:48px;width:50px;margin-left:0px;border:none}.search-btn.svelte-36a9o8:hover{background-color:aliceblue}",
  map: null
};
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="search svelte-36a9o8" data-svelte-h="svelte-1b31q8m"><input type="text" class="search-box svelte-36a9o8" placeholder="find your meal here..."> <button class="search-btn svelte-36a9o8"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#000000" d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"></path></svg></button> </div>`;
});
const Navbar__svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-1g8d8uu.svelte-1g8d8uu{text-decoration:none}.nav-bar.svelte-1g8d8uu.svelte-1g8d8uu{background-color:#347E68;width:100%;height:100px;display:flex;justify-content:space-between}.title.svelte-1g8d8uu.svelte-1g8d8uu{width:400px;padding:10px;display:grid;place-items:center;justify-content:center}.title.svelte-1g8d8uu h1.svelte-1g8d8uu{color:white;font-family:'Irish Grover' , cursive;font-size:50px}.title.svelte-1g8d8uu h1.svelte-1g8d8uu:hover{color:#1f5d4a}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="nav-bar svelte-1g8d8uu"><div class="title svelte-1g8d8uu" data-svelte-h="svelte-1wpmmgb"><a href="/" class="svelte-1g8d8uu"><h1 class="svelte-1g8d8uu">Recipe App</h1></a></div> <div class="search-box">${validate_component(Search, "Search").$$render($$result, {}, {}, {})}</div> </div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ` `}`;
});
export {
  Layout as default
};
