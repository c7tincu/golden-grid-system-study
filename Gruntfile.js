module.exports =
  function (grunt) {
    "use strict";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Load the tasks.
grunt.loadNpmTasks("grunt-contrib-less");
grunt.loadNpmTasks("grunt-contrib-watch");

// Configure the tasks.
grunt.initConfig(
  {
    "less" :
      {
        "development" :
          {
            // Compile LESS to CSS, and compress CSS, but keep it readable.
            "options" : { "compress" : true },
            "files" :
              {
                "assets/style.css" :
                  [
                    "assets/normalize.css",
                    "assets/style.less"
                  ]
              }
          },
        "production" :
          {
            // Compile LESS to CSS, and compress CSS.
            "options" : { "yuicompress" : true },
            "files" :
              {
                "assets/style.min.css" :
                  [
                    "assets/normalize.css",
                    "assets/style.less"
                  ]
              }
          }
      },
    "watch" :
      {
        // When these files change, run these tasks.
        "files" : [ "assets/*.less" ],
        "tasks" :
          [
            "less:development",
            "less:production"
          ]
      }
  }
);

// Copy all the third-party modules to `assets`, for convenience.
grunt.registerTask(
  "copy",
  function () {
    grunt.file.copy(
      "components/normalize-css/normalize.css",
      "assets/normalize.css"
    );
    grunt.file.copy(
      "components/html5shiv/dist/html5shiv.js",
      "assets/html5shiv.js"
    );
  }
);

// Configure the default task.
grunt.registerTask(
  "default",
  [
    "copy",
    "less:development",
    "less:production"
  ]
);



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  };
