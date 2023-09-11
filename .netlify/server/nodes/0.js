import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.32788e08.js","_app/immutable/chunks/scheduler.8746962a.js","_app/immutable/chunks/index.5f98b9aa.js"];
export const stylesheets = ["_app/immutable/assets/0.d5682eb5.css"];
export const fonts = [];
