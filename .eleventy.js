module.exports = function (eleventyConfig) {
	const PrismicDOM = require("prismic-dom");

	eleventyConfig.addNunjucksFilter("richText", function (value) {
		return PrismicDOM.RichText.asHtml(value);
	});

	eleventyConfig.addNunjucksFilter("JSONstringify", function (value) {
		return `<pre>${JSON.stringify(value, undefined, 2)}</pre>`;
	});

	eleventyConfig.addPassthroughCopy("src/assets/");

	return {
		dir: {
			input: "src",
			output: "_site",
			data: "_data",
			includes: "_includes",
		},
	};
};
