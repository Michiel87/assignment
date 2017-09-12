var sass = require('node-sass');
var fs = require('fs');
var mkdirp = require('mkdirp');
var getDirName = require('path').dirname;

function compileSass(options = {}) {
    // render the result
    var result = sass.renderSync({
        file: options.src
    });

    // write the result to file
    mkdirp(getDirName(options.dest), function(err) {
        if (err) return cb(err);
        fs.writeFile(options.dest, result.css);
    });
};
    
compileSass({
    src : 'assets/css/style.scss',
    dest: 'assets/css/style.css'
});

