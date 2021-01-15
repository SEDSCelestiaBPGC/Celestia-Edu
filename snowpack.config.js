// Consult https://www.snowpack.dev to learn about these options
module.exports = {
	extends: '@sveltejs/snowpack-config',
	mount: {
		'src/components': '/_components',
		'src/shared': '/_shared',
		'src/data': '/_data'
	},
	alias: {
		$components: './src/components',
		$shared: './src/shared',
		$data: './src/data'
	}
};

