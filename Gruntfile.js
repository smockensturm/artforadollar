module.exports = function(grunt) {

  const sass = require('node-sass');
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    uglify: {
      options: {
        mangle: false,
        beautify: false
      },
      scripts: {
        files: {
          "public/js/main.js": [
            "public/js/main/dependencies/*.js",
            "public/js/main/init.js"
          ]
        }
      }
    },

    sass: {
      options: {
        sourceMap: true,
        precision: 4,
        outputStyle: "compact",
        implementation: sass
      },
      dist: {
        files: {
          "public/css/main.css": ["public/css/scss/main.scss"],
          "public/css/cp.css": ["public/css/scss/control-panel/main.scss"]
        }
      }
    },

    concat: {
      css: {
        files: {
          'public/css/main.css': ["public/css/lib/normalize.css", "public/css/third-party/*.css", "public/css/main.css"],
        },
      },
    },

    postcss: {
      options: {
        processors: [
          require("autoprefixer")({ grid: true, flexbox: true }),
          require('cssnano')()
        ]
      },
      dist: {
        files: [
          {
            src: "public/css/main.css",
            dest: 'public/css/main.css'
          }, 
          {
            src: 'public/css/cp.css',
            dest: 'public/css/cp.css'
          }
        ]
      }
    },

    watch: {
      livereload: {
        options: {
          livereload: {
            port: 35729,
          }
        },
        files: [
          "public/css/main.css",
          "public/js/main.js",
          "templates/**/*.html"
        ]
      },
      styles: {
        files: ["public/css/scss/**/*.scss", "public/css/third-party/*.css"],
        tasks: ["style"]
      },
      scripts: {
        files: ["public/js/*/**/*.js"],
        tasks: ["script"]
      },
      email: {
        files: ["templates/email/**/*.html"],
        tasks: ["mjml"]
      }
    }
  });

  grunt.registerTask("script", ["uglify"]);
  grunt.registerTask("style", ["sass", "concat", "postcss"]);
  grunt.registerTask("default", ["script", "style", "watch"]);


  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks('@lodder/grunt-postcss');
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
};
