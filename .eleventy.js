const markdownIt = require("markdown-it")
const markdownItAttrs = require('markdown-it-attrs');
const htmlmin = require("html-minifier")

const isProduction = process.env.NODE_ENV === 'production'

module.exports = function(config) {
  config.dir = {
    input: './src',
    output: "./public"
  }

  config.setDataDeepMerge(true)

  config.setTemplateFormats([
    'njk',
    'md',
    'jpg',
    'png',
    'svg',
    // 'liquid',
    // 'pug',
    // 'ejs',
    // 'hbs',
    // 'mustache',
    // 'haml',
    // '11ty.js',
  ])

  const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true
  }

  config.setLibrary("md",
                    markdownIt(markdownItOptions)
                    .use(markdownItAttrs))

  config.addTransform("htmlmin", function(content, outputPath) {
    if(isProduction && outputPath.endsWith(".html")){
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })

      return minified
    }

    return content
  })

  const fs = require("fs");

  config.setBrowserSyncConfig({
      callbacks: {
        ready: function(err, bs) {
          bs.addMiddleware("*", (req, res) => {
            const content_404 = fs.readFileSync('public/404/index.html');
            // Add 404 http status code in request header.
            res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
            // Provides the 404 content without redirect.
            res.write(content_404);
            res.end();
          });
        }
      }
    });

  return config
}
