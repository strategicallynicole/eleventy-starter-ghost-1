require("dotenv").config();
const sass = require('./_config/sass-process.js');
const cleanCSS = require("clean-css");
const fs = require("fs");
const pluginRSS = require("@11ty/eleventy-plugin-rss");
const localImages = require("eleventy-plugin-local-images");
const lazyImages = require("eleventy-plugin-lazyimages");
const ghostContentAPI = require("@tryghost/content-api");
const inputDir = "src";
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const htmlMinTransform = require("./_config/html-min-transform.js");
// Init Ghost API
const api = new ghostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: "v2"
});

// Strip Ghost domain from urls
const stripDomain = url => {
  return url.replace(process.env.GHOST_API_URL, "");
};

/*const excerpt = require('./src/_config/excerpt.js');*/

// module.exports = function(eleventyConfig) {
//  eleventyConfig.addJavaScriptFunction("excerpt", excerpt());
// };


module.exports = function(config) {
  sass('./src/assets/_scss/main.scss', './src/assets/css/main.css');

  config.addPlugin(syntaxHighlight);
  config.addWatchTarget("./src/assets/_scss/");

  // minify the html output
  config.addTransform("htmlmin", require("./_config/utils/htmlmin.js"));

  // compress and combine js files
  config.addFilter("jsmin", function(code) {
    const UglifyJS = require("uglify-js");
    let minified = UglifyJS.minify(code);
      if( minified.error ) {
          console.log("UglifyJS error: ", minified.error);
          return code;
      }
      return minified.code;
  });

  
  // Minify HTML
  let env = process.env.ELEVENTY_ENV;

  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'layouts/base.njk');

  // Add some utility filters
  config.addFilter("squash", require("./_config/filters/squash.js"));
  config.addFilter("dateDisplay", require("./_config/filters/date.js") );
  


  config.addTransform("htmlmin", htmlMinTransform);
  config.addPassthroughCopy("/src/js");
  config.addPassthroughCopy("/src/assets/vendor");
  config.addPassthroughCopy("/src/assets/js");
  config.addPassthroughCopy("/src/assets/styles");
  config.addPassthroughCopy("./src/assets/css/neumorphism.css");

  config.addPassthroughCopy("/src/assets/images");
  config.addPassthroughCopy(`${inputDir}/assets/`, 'assets');

  config.addPassthroughCopy("./src/assets/css");
  config.addPassthroughCopy(`${inputDir}/assets`, 'assets');
  config.addTransform("htmlmin", htmlMinTransform);
  config.addPlugin(pluginRSS);
  config.addPassthroughCopy("/src/js");
  config.addPassthroughCopy("/src/css");
  config.addPassthroughCopy("/src/_includes/css");




  // add support for syntax highlighting
  config.addPlugin(syntaxHighlight);

  // minify the html output
  config.addTransform("htmlmin", require("./_config/utils/minify-html.js"));

  // compress and combine js files
  config.addFilter("jsmin", function(code) {
    const UglifyJS = require("uglify-js");
    let minified = UglifyJS.minify(code);
      if( minified.error ) {
          console.log("UglifyJS error: ", minified.error);
          return code;
      }
      return minified.code;
  });


  // pass some assets right through
  config.addPassthroughCopy("./src/site/images");

  // Assist RSS feed template
  config.addPlugin(pluginRSS);

  // Apply performance attributes to images
  /*config.addPlugin(lazyImages, {
    cacheFile: ""
  });*/

  // Copy images over from Ghost
 /* config.addPlugin(localImages, {
    distPath: "dist",
    assetPath: "/assets/images",
    selector: "img",
    attribute: "data-src", // Lazy images attribute
    verbose: false
  });*/

  // Inline CSS
  config.addFilter("cssmin", code => {
    return new cleanCSS({}).minify(code).styles;
  });

  config.addFilter("getReadingTime", text => {
    const wordsPerMinute = 200;
    const numberOfWords = text.split(/\s/g).length;
    return Math.ceil(numberOfWords / wordsPerMinute);
  });

  // Date formatting filter
  config.addFilter("htmlDateString", dateObj => {
    return new Date(dateObj).toISOString().split("T")[0];
  });

  // Don't ignore the same files ignored in the git repo
  config.setUseGitIgnore(false);

  // Get all pages, called 'docs' to prevent
  // conflicting the eleventy page object
  config.addCollection("docs", async function(collection) {
    collection = await api.pages
      .browse({
        include: "authors",
        limit: "all"
      })
      .catch(err => {
        console.error(err);
      });

    collection.map(doc => {
      doc.url = stripDomain(doc.url);
      doc.primary_author.url = stripDomain(doc.primary_author.url);

      // Convert publish date into a Date object
      doc.published_at = new Date(doc.published_at);
      return doc;
    });

    return collection;
  });

  // Get all posts
  config.addCollection("posts", async function(collection) {
    collection = await api.posts
      .browse({
        include: "tags,authors",
        limit: "all"
      })
      .catch(err => {
        console.error(err);
      });

    collection.forEach(post => {
      post.url = stripDomain(post.url);
      post.primary_author.url = stripDomain(post.primary_author.url);
      post.tags.map(tag => (tag.url = stripDomain(tag.url)));

      // Convert publish date into a Date object
      post.published_at = new Date(post.published_at);
    });

    // Bring featured post to the top of the list
    collection.sort((post, nextPost) => nextPost.featured - post.featured);

    return collection;
  });

  // Get all authors
  config.addCollection("authors", async function(collection) {
    collection = await api.authors
      .browse({
        limit: "all"
      })
      .catch(err => {
        console.error(err);
      });

    // Get all posts with their authors attached
    const posts = await api.posts
      .browse({
        include: "authors",
        limit: "all"
      })
      .catch(err => {
        console.error(err);
      });

    // Attach posts to their respective authors
    collection.forEach(async author => {
      const authorsPosts = posts.filter(post => {
        post.url = stripDomain(post.url);
        return post.primary_author.id === author.id;
      });
      if (authorsPosts.length) author.posts = authorsPosts;

      author.url = stripDomain(author.url);
    });

    return collection;
  });

  // Get all tags
  config.addCollection("tags", async function(collection) {
    collection = await api.tags
      .browse({
        include: "count.posts",
        limit: "all"
      })
      .catch(err => {
        console.error(err);
      });

    // Get all posts with their tags attached
    const posts = await api.posts
      .browse({
        include: "tags,authors",
        limit: "all"
      })
      .catch(err => {
        console.error(err);
      });

    // Attach posts to their respective tags
    collection.forEach(async tag => {
      const taggedPosts = posts.filter(post => {
        post.url = stripDomain(post.url);
        return post.primary_tag && post.primary_tag.slug === tag.slug;
      });
      if (taggedPosts.length) tag.posts = taggedPosts;

      tag.url = stripDomain(tag.url);
    });

    return collection;
  });

  // Display 404 page in BrowserSnyc
  config.setBrowserSyncConfig({
    callbacks: {
      ready: (err, bs) => {
        const content_404 = fs.readFileSync("dist/404.html");

        bs.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  // Eleventy configuration
  env = (env=="seed") ? "prod" : env;
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },

    // Files read by Eleventy, add as needed
    templateFormats: ["njk", "md", "txt", "pug", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};





