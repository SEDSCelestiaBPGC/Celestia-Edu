const sveltePreprocess = require( 'svelte-preprocess' );
module.exports = { preprocess: sveltePreprocess(), kit: { adapter: '@sveltejs/adapter-netlify', target: 'body' } };
