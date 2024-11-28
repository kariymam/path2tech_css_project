module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/assets').addPassthroughCopy('src/css/*.css');
    eleventyConfig.addWatchTarget("src/css/*.scss");

    return {
        dir: {
            input: "src",
            output: "_site"
        },
    };
};
//DEBUG=Eleventy* npx @11ty/eleventy