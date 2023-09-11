

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f9926447.js","_app/immutable/chunks/scheduler.8746962a.js","_app/immutable/chunks/index.5f98b9aa.js","_app/immutable/chunks/singletons.8a077e20.js"];
export const stylesheets = [];
export const fonts = [];
