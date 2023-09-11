import { c as create_ssr_component, d as add_attribute, v as validate_component, i as is_promise, n as noop, f as each } from "../../chunks/ssr.js";
import { R as RecipeViewBtn } from "../../chunks/RecipeViewBtn.js";
const HomeMeal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".home-card.svelte-eorkgt.svelte-eorkgt{width:300px;height:300px;border-radius:20px;-webkit-box-shadow:0px 9px 12px 0px rgba(0, 0, 0, 0.75);-moz-box-shadow:0px 9px 12px 0px rgba(0, 0, 0, 0.75);box-shadow:0px 9px 12px 0px rgba(0, 0, 0, 0.75)}.thumb.svelte-eorkgt.svelte-eorkgt{width:100%;height:200px}.thumb.svelte-eorkgt img.svelte-eorkgt{height:250px;object-fit:cover;border-top-left-radius:20px;border-top-right-radius:20px}",
  map: null
};
const HomeMeal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { meal } = $$props;
  if ($$props.meal === void 0 && $$bindings.meal && meal !== void 0)
    $$bindings.meal(meal);
  $$result.css.add(css$1);
  return `<div class="home-card svelte-eorkgt"><div class="thumb svelte-eorkgt"><img${add_attribute("src", meal.strMealThumb, 0)} alt="" width="300px" height="400px" class="svelte-eorkgt"></div> <div class="recipe-link">${validate_component(RecipeViewBtn, "RecipeViewBtn").$$render($$result, { url: `/meal/${meal.idMeal}` }, {}, {})}</div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".box.svelte-i3xezq{padding:20px;display:grid;grid-template-columns:repeat(\r\n			auto-fill,\r\n			minmax(300px, 1fr)\r\n		);gap:20px;justify-content:center}",
  map: null
};
const MAX_MEAL_NUMBER = 10;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const get = async () => {
    let meals = [];
    for (let i = 0; i < MAX_MEAL_NUMBER; i++) {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
      const data = await response.json();
      meals.push(data.meals[0]);
    }
    return meals;
  };
  $$result.css.add(css);
  return `<div class="box svelte-i3xezq">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <h1 data-svelte-h="svelte-r298ty">loading..</h1> `;
    }
    return function(meals) {
      return ` ${each(meals, (meal) => {
        return `${validate_component(HomeMeal, "HomeMeal").$$render($$result, { meal }, {}, {})}`;
      })} `;
    }(__value);
  }(get())} </div>`;
});
export {
  Page as default
};
