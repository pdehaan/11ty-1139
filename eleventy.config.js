/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("catsAndDogs", function (collectionApi) {
    const tagsToFilter = ["cats", "dogs"];
    const pages = collectionApi.getFilteredByTag("pets");
    return pages.filter(page => {
      const $tags = page.data.tags ?? [];
      return tagsToFilter.some(tag => $tags.includes(tag));
    });
  });

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
