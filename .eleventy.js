require("dotenv").config();
const sass = require('./_config/sass-process.js');
const cleanCSS = require("clean-css");
const fs = require("fs");
const pluginRSS = require("@11ty/eleventy-plugin-rss");
const localImages = require("eleventy-plugin-local-images");
const lazyImages = require("eleventy-plugin-lazyimages");
const ghostContentAPI = require("@tryghost/content-api");
<<<<<<< HEAD
const Handlebars = require("handlebars");
const htmlMinTransform = require("./src/transforms/html-min-transform.js");
const url = "http://localhost:8080";
var helpers = require('handlebars-helpers')();

const sass = require('./config/sass-process');
Handlebars.registerHelper("asset", function(options) {
  return new Handlebars.SafeString(url + "assets" + options.this);
});
module.exports = config => {
  const outputDir = 'dist';
  const assetDir = 'assets';
 
  eleventyConfig.addFilter('assetPath', function(value) {
    if (process.env.ELEVENTY_ENV === 'production') {
      const manifestPath = path.resolve(
        __dirname,
        outputDir,
        assetDir,
        'manifest.json'
      );
      const manifest = JSON.parse(fs.readFileSync(manifestPath));
      return `/${assetDir}/${manifest[value]}`;
    }
    return `/${assetDir}/${value}`;
  });
 

  return {
    dir: { input: 'src', output: outputDir }
  };
};
    //Watching for modificaions in style directory
    sass('./src/_process/_scss/neu.scss', './src/assets/css/neu.css');


module.exports = function(eleventyConfig) {
  // Output directory: _site

  // Copy `img/` to `_site/img`
  config.addPassthroughCopy({ "src/assets": "/" });
  config.addPassthroughCopy({ "src/_includes/js": "/" });
    config.addPassthroughCopy({ "src/static": "/" });
  
  // Copy `css/fonts/` to `_site/css/fonts`
  // If you use a subdirectory, it’ll copy using the same directory structure.
=======
const inputDir = "src";
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const htmlMinTransform = require("./_config/html-min-transform.js");

module.exports = function(eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    ...eleventyConfig.browserSyncConfig,
    callbacks: {
      ready: function(err, bs) {

        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync('src/404.html');
          // Provides the 404 content without redirect.
          res.write(content_404);
          // Add 404 http status code in request header.
          // res.writeHead(404, { "Content-Type": "text/html" });
          res.writeHead(404);
          res.end();
        });
      }
    }
  });
>>>>>>> 8912585b8416651d09a267e34066b2ad651c2bed
};
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
  sass('./src/_includes/components/base/base.scss', './src/assets/css/base.css');

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

  module.exports = {
    "title": "OAKwave",
    "description": "OAKwave",
    "rootUrl" : "https://www.oakwave.com",
    "disqusShortname" : "oakwave",
  };
  // Minify HTML
  let env = process.env.ELEVENTY_ENV;

  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', '_layouts/base.njk');

  // Add some utility filters
  config.addFilter("squash", require("./_config/filters/squash.js"));
  config.addFilter("dateDisplay", require("./_config/filters/date.js") );
  


  config.addTransform("htmlmin", htmlMinTransform);
  config.addPassthroughCopy("./src/js");
  config.addPassthroughCopy("./src/assets/vendor");
  config.addPassthroughCopy("./src/assets/js");
  config.addPassthroughCopy("./src/assets/styles");
  config.addPassthroughCopy("./src/assets/css/main.css");
  config.addPassthroughCopy("./src/_includes/components");
  config.addPassthroughCopy("./src/_includes/components/base/base.css");
  config.addPassthroughCopy("./src/assets/css/base.css");
  config.addPassthroughCopy("./src/_includes/components/base/core.min.js");
  config.addPassthroughCopy("./src/_includes/components/base/script.js");

  config.addPassthroughCopy("./src/assets/images");
  config.addPassthroughCopy(`${inputDir}/assets/`, 'assets');

  config.addPassthroughCopy("./src/assets/css");
  config.addTransform("htmlmin", htmlMinTransform);
  config.addPlugin(pluginRSS);
  config.addPassthroughCopy("./src/js");
  config.addPassthroughCopy("./src/css");
  config.addPassthroughCopy("./src/_includes/css");




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
<<<<<<< HEAD
  //config.addPlugin(lazyImages, {
   // cacheFile: ""
  //});
=======
  /*config.addPlugin(lazyImages, {
    cacheFile: ""
  });*/
>>>>>>> 8912585b8416651d09a267e34066b2ad651c2bed

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
<<<<<<< HEAD
      layouts: "layouts",
      partials: "_includes/partials"
    },

    // Files read by Eleventy, add as needed
    templateFormats: ["css", "njk", "md", "txt", "hbs"],
=======
      layouts: "_layouts",
      data: "_data"
    },

    // Files read by Eleventy, add as needed
    templateFormats: ["njk", "md", "txt", "pug", "html", "hbs"],
>>>>>>> 8912585b8416651d09a267e34066b2ad651c2bed
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};





