const { src, dest, watch, parallel } = require("gulp");
const scss = require("gulp-sass");
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const uglify = require('gulp-uglify-es');
const autoprefixer = require('gulp-autoprefixer');




function styles() {
  return src("src/scss/main.scss")
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(concat("style.min.css"))
    .pipe(autoprefixer({
      overrideBrowsersList: ['last 10 versions'],
      grid: true
    }))
    .pipe(dest("src/css/"))
    .pipe(browserSync.stream());
    
}

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "src/"
    }
  });
}

function scripts() {
return src('src/js/script.js')
.pipe(concat('main.min.js'))
.pipe(dest('src/js/'))
.pipe(browserSync.stream());
}


function build(){
  return src(['src/css/style.min.css', 
  'src/assets/fonts/**/*.*',
  'src/js/main.min.js',
  'src/*.html'
], {base: 'src'})
.pipe(dest('dist'));
}

function watching() {
  watch(["src/scss/**/*.scss"], styles);
  watch(["src/js/**/*.js", "!src/js/main.min.js"], scripts);
  watch(["src/**/*.html"]).on('change', browserSync.reload);
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.build = build;

exports.default = parallel(scripts, browsersync, watching);