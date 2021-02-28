module.exports = {
	extends: '@sveltejs/snowpack-config',
	mount: {
		'src/components': '/_components',
		'src/functions': '/functions',
		'src/shared': '/_shared',
		'src/data': '/_data'
	},
	alias: {
		$components: './src/components',
		$functions: './src/functions',
		$shared: './src/shared',
		$data: './src/data'
	}
};

