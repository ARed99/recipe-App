import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { R as RecipeViewBtn } from "../../../../chunks/RecipeViewBtn.js";
const SearchResult_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".search-result-card.svelte-1t2rtm9.svelte-1t2rtm9{width:90%;height:300px;display:flex;justify-content:start;border-radius:20px}.thumb.svelte-1t2rtm9.svelte-1t2rtm9{width:400px;height:300px}.thumb.svelte-1t2rtm9 img.svelte-1t2rtm9{width:400px;height:300px;object-fit:cover;border-radius:20px}.details.svelte-1t2rtm9.svelte-1t2rtm9{padding:20px}h1.svelte-1t2rtm9.svelte-1t2rtm9{font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;text-transform:uppercase;font-size:50px;width:100%;word-break:break-all}h3.svelte-1t2rtm9.svelte-1t2rtm9{font-family:monospace;font-size:40px}.btn.svelte-1t2rtm9.svelte-1t2rtm9{width:200px}",
  map: null
};
const SearchResult = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { meal } = $$props;
  if ($$props.meal === void 0 && $$bindings.meal && meal !== void 0)
    $$bindings.meal(meal);
  $$result.css.add(css$2);
  return `<div class="search-result-card svelte-1t2rtm9"><div class="thumb svelte-1t2rtm9"><img${add_attribute("src", meal.thumb, 0)} alt="" class="svelte-1t2rtm9"></div> <div class="details svelte-1t2rtm9"><h1 class="svelte-1t2rtm9">${escape(meal.name)}</h1> <h3 class="svelte-1t2rtm9">Area: ${escape(meal.area)}</h3> <h3 class="svelte-1t2rtm9">Category: ${escape(meal.category)}</h3> ${meal.btn ? `<div class="btn svelte-1t2rtm9">${validate_component(RecipeViewBtn, "RecipeViewBtn").$$render($$result, { url: `/meal/${meal.id}` }, {}, {})}</div>` : ``}</div> </div>`;
});
const ViewMeal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "p.svelte-1l84cuw{font-size:24px;word-break:keep-all;word-wrap:break-word;padding:10px}",
  map: null
};
const ViewMeal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mealData } = $$props;
  const meal = {
    name: mealData.strMeal,
    area: mealData.strArea,
    category: mealData.strCategory,
    btn: false,
    id: mealData.idMeal,
    thumb: mealData.strMealThumb
  };
  if ($$props.mealData === void 0 && $$bindings.mealData && mealData !== void 0)
    $$bindings.mealData(mealData);
  $$result.css.add(css$1);
  return `<div class="view-meal"><div class="details">${validate_component(SearchResult, "SearchResult").$$render($$result, { meal }, {}, {})}</div> <div class="instructions"><p class="svelte-1l84cuw">${escape(mealData.strInstructions)}</p></div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".view.svelte-1a6a6jm{width:100%}.box.svelte-1a6a6jm{padding:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="view svelte-1a6a6jm"><div class="box svelte-1a6a6jm">${validate_component(ViewMeal, "ViewMeal").$$render($$result, { mealData: data.meal }, {}, {})}</div> </div>`;
});
export {
  Page as default
};
