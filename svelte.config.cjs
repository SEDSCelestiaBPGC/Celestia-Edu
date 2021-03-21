const sveltePreprocess = require( 'svelte-preprocess' );
const node = require( '@sveltejs/adapter-node' );
const pkg = require( './package.json' );

module.exports = {
    preprocess: sveltePreprocess(),
    kit: {
        adapter: node(),
        target: 'body',

        vite: {
            ssr: {
                noExternal: Object.keys( pkg.dependencies || {} )
            }
        }
    }
};
