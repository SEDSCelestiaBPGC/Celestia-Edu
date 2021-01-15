import * as renderer from '@sveltejs/kit/dist/renderer';
import root from './_app/assets/generated/root.svelte.js';
import { set_paths } from './_app/assets/runtime/internal/singletons.js';
import * as setup from './_app/setup/index.js';

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\" />\n\t<link rel=\"icon\" href=\"/favicon.ico\" />\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\n\t<link rel=\"stylesheet\" href=\"/global.css\">\n\t" + head + "\n</head>\n\n<body>\n\t" + body + "\n</body>\n\n</html>";

const entry = "entry-dc0f9999.js";

set_paths({"base":"","assets":"/."});

// allow paths to be overridden in svelte-kit start
export function init({ paths }) {
	set_paths(paths);
}

init({ paths: {"base":"","assets":"/."} });

const d = decodeURIComponent;
const empty = () => ({});

const components = [
	() => import("./_app/routes/index.svelte.js"),
	() => import("./_app/routes/courses/$layout.svelte.js"),
	() => import("./_app/routes/courses/qis.svelte.js"),
	() => import("./_app/routes/courses/tor.svelte.js")
];



const manifest = {
	assets: [{"file":"favicon.ico","size":1150,"type":"image/vnd.microsoft.icon"},{"file":"global.css","size":384,"type":"text/css"},{"file":"robots.txt","size":67,"type":"text/plain"}],
	layout: () => import("./_app/assets/components/layout.svelte.js"),
	error: () => import("./_app/assets/components/error.svelte.js"),
	pages: [
		{
					pattern: /^\/$/,
					params: empty,
					parts: [components[0]],
					css: ["/_app/start-440f647c.css", "/_app/nav.svelte-b43f50eb.css", "/_app/index.svelte-13296415.css"],
					js: ["/_app/index.svelte-d5fd2337.js", "/_app/start-2bb8032a.js", "/_app/inject_styles-cd877ae9.js", "/_app/nav.svelte-f07d5ed8.js"]
				},
		{
					pattern: /^\/courses\/qis\/?$/,
					params: empty,
					parts: [components[1], components[2]],
					css: ["/_app/start-440f647c.css", "/_app/nav.svelte-b43f50eb.css", "/_app/qis.svelte-1ef605d3.css"],
					js: ["/_app/$layout.svelte-b450ccf0.js", "/_app/start-2bb8032a.js", "/_app/inject_styles-cd877ae9.js", "/_app/nav.svelte-f07d5ed8.js", "/_app/qis.svelte-fb31cc13.js"]
				},
		{
					pattern: /^\/courses\/tor\/?$/,
					params: empty,
					parts: [components[1], components[3]],
					css: ["/_app/start-440f647c.css", "/_app/nav.svelte-b43f50eb.css"],
					js: ["/_app/$layout.svelte-b450ccf0.js", "/_app/start-2bb8032a.js", "/_app/inject_styles-cd877ae9.js", "/_app/nav.svelte-f07d5ed8.js", "/_app/tor.svelte-acc1f842.js"]
				}
	],
	endpoints: [
		
	]
};

export function render(request, {
	paths = {"base":"","assets":"/."},
	only_prerender = false,
	get_static_file
} = {}) {
	return renderer.render(request, {
		paths,
		template,
		manifest,
		target: "body",
		entry,
		root,
		setup,
		dev: false,
		amp: false,
		only_prerender,
		app_dir: "_app",
		host: null,
		host_header: null,
		get_stack: error => error.stack,
		get_static_file,
		get_amp_css: dep => css_lookup[dep]
	});
}