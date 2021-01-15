import * as layout from "/_app/assets/components/layout.svelte";

const components = [
	() => import("/_app/routes/index.svelte"),
	() => import("/_app/routes/courses/$layout.svelte"),
	() => import("/_app/routes/courses/qis.svelte"),
	() => import("/_app/routes/courses/tor.svelte")
];

const d = decodeURIComponent;
const empty = () => ({});

export const pages = [
	{
		// index.svelte
		pattern: /^\/$/,
		params: empty,
		parts: [components[0]]
	},

	{
		// courses/qis.svelte
		pattern: /^\/courses\/qis\/?$/,
		params: empty,
		parts: [components[1], components[2]]
	},

	{
		// courses/tor.svelte
		pattern: /^\/courses\/tor\/?$/,
		params: empty,
		parts: [components[1], components[3]]
	}
];

export const ignore = [
	
];

export { layout };