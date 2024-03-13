const config = {
	output: "export",
	images: {
		loader: "imgix",
		path: "https://example.com/myaccount/",
	},
	compiler: {
		styledComponents: {
			ssr: true,
			displayName: true,
		},
	},
};

module.exports = config;
