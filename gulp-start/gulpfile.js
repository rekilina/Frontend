// source: https://youtu.be/SVmnfkICqq0

const {src, dest, watch, parallel} = require('gulp'); // plugin gulp
const scss = require('gulp-sass'); // это будет конвертация в scss
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create()
const uglify = require('gulp-uglify-es').default

function browsersync() {
    browserSync.init({
        server: {
            baseDir: './app'
        }
    });
}

function scripts() {
    return src([
        './node_modules/jquery/dist/jquery.js',
        'app/js/main.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify()) // compress to min
    .pipe(dest('app/js'))
    .pipe(browserSync.stream()) // refresh html
}

// Объявялем функцию, которая будет конвертировать из scss в css
function styles() {  
    return src('app/scss/styles.scss')
    .pipe(scss({outputStyle: 'compressed'})) // expanded
    .pipe(concat('styles.min.css'))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

// слежение за проектом 
function watching() {
    watch(['app/scss/**/*.scss'], styles);
    watch(['app/js/main.js', '!app/js/main.min.js'], scripts);
    watch('/app/*.html').on('change', browserSync.reload);
}

// по этоу ключевому слову будет выполняться task 
// Ctrl+c to stop watching process
exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;

exports.default = parallel(scripts, browsersync, watching);