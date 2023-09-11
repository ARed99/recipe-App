import * as universal from '../entries/pages/meal/_id_/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/meal/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/meal/[id]/+page.ts";
export const imports = ["_app/immutable/nodes/3.0772d859.js","_app/immutable/chunks/scheduler.8746962a.js","_app/immutable/chunks/index.5f98b9aa.js","_app/immutable/chunks/RecipeViewBtn.017d640a.js"];
export const stylesheets = ["_app/immutable/assets/3.b225c199.css","_app/immutable/assets/RecipeViewBtn.d61f55e2.css"];
export const fonts = [];
