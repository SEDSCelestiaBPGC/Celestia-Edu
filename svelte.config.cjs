const sveltePreprocess = require( 'svelte-preprocess' );
// const static = require( '@sveltejs/adapter-static' );
// const node = require( '@sveltejs/adapter-node' );
const pkg = require( './package.json' );

function celestiaStatic ( { pages = 'docs', assets = 'assets' } = {} ) {
    const adapter = {
        name: '@sveltejs/adapter-static',
        async adapt ( builder ) {
            builder.copy_static_files( assets );
            builder.copy_client_files( assets );
            await builder.prerender( {
                force: true,
                dest: pages
            } );
        }
    };
    return adapter;
}

module.exports = {
    preprocess: sveltePreprocess(),
    kit: {
        adapter: celestiaStatic(),
        target: 'body',
        vite: {
            ssr: {
                noExternal: Object.keys( pkg.dependencies || {} )
            }
        }
    }
};
