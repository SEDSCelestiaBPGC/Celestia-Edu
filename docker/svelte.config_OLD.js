import statix from '@sveltejs/adapter-static';
// import node from '@sveltejs/adapter-node';
import sveltePreprocess from 'svelte-preprocess';

const config = {
    preprocess: sveltePreprocess(),
    kit: {
        adapter: statix(),
        target: 'body',
        paths: {
            base: '/SEDS-Celestia-Courses',
            assets: '/SEDS-Celestia-Courses'
        },
    }
};

export default config;