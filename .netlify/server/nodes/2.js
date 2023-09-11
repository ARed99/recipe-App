import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.b5e9db5e.js","_app/immutable/chunks/scheduler.8746962a.js","_app/immutable/chunks/index.5f98b9aa.js","_app/immutable/chunks/RecipeViewBtn.017d640a.js"];
export const stylesheets = ["_app/immutable/assets/2.91c08d7d.css","_app/immutable/assets/RecipeViewBtn.d61f55e2.css"];
export const fonts = [];
