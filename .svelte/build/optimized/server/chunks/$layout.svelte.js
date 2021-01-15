"use strict";require("@sveltejs/kit/dist/renderer");var e=require("./app.js"),r=require("./nav.svelte.js");const t=e.create_ssr_component(((t,s,a,n)=>`${e.validate_component(r.Nav,"Nav").$$render(t,{},{},{})}\n${n.default?n.default({}):""}`));exports.default=t;
//# sourceMappingURL=$layout.svelte.js.map
