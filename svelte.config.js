// const static = require( '@sveltejs/adapter-static' );
import statix from '@sveltejs/adapter-static';
// import node from '@sveltejs/adapter-node';
import sveltePreprocess from 'svelte-preprocess';

const config = {
    preprocess: sveltePreprocess(),
    kit: {
        adapter: statix( {
            pages: 'docs',
            assets: 'docs',
            fallback: null
        } ),
        target: 'body',
        paths: {
            base: '/docs/',
        },
    }
};

export default config;