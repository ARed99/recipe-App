import { c as create_ssr_component, d as add_attribute } from "./ssr.js";
const RecipeViewBtn_svelte_svelte_type_style_lang = "";
const css = {
  code: ".recipe-btn.svelte-1mtpl7b.svelte-1mtpl7b{width:100%;height:100px;display:grid;place-items:end;justify-content:center}.recipe-btn.svelte-1mtpl7b a.svelte-1mtpl7b{font-size:30px;font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;text-decoration:none;color:#347E68}",
  map: null
};
const RecipeViewBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css);
  return `<div class="recipe-btn svelte-1mtpl7b"><a data-sveltekit-preload-data${add_attribute("href", url, 0)} class="svelte-1mtpl7b">View Recipe ↗</a> </div>`;
});
export {
  RecipeViewBtn as R
};
