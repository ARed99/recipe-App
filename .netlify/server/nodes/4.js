

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.8388d56e.js","_app/immutable/chunks/scheduler.8746962a.js","_app/immutable/chunks/index.5f98b9aa.js"];
export const stylesheets = [];
export const fonts = [];
