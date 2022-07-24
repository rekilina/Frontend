// source: https://youtu.be/SVmnfkICqq0
const {src, dest, watch, parallel, series} = require('gulp'); // plugin gulp
const scss = require('gulp-sass'); // это будет конвертация в scss
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprfixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin'); 
const del = require('del');

const paths = {
    src: {
        scss: './app/scss/*.scss',
        js: './app/js/*.js',
        img: './app/img/*'
    },
    dist: {
        css: './dist/css',
        js: './dist/js',
        img: './dist/img',
        self: './dist/'
    }
};

function browsersync() {
    browserSync.init({
        server: {
            baseDir: './app'
        }
    });
}

function cleanDist() {
    return del('dist');
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
    .pipe(autoprfixer({
        overridBrowserlist: ['last 10 version'],
        grid:true
    }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function images() {
    return src('app/images')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(dest('dist/images'))
}


// слежение за проектом 
function watching() {
    watch(['app/scss/**/*.scss'], styles);
    watch(['app/js/main.js', '!app/js/main.min.js'], scripts);
    /* !app - to stop cycle то есть чтобы не было за файлом слежения*/
    watch('/app/*.html').on('change', browserSync.reload);
}

function build() {
    return src([
        'app/css/styles.min.css',
        'app/fonts/**/*',
        'app/js/main.min.js',
        'app/*.html'
    ], {base: 'app'}) /*чтобы сохранитьструктуру папок*/
    .pipe(dest('dist'))
}

// по этоу ключевому слову будет выполняться task 
// Ctrl+c to stop watching process
exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
/*exports.build = build;*/
exports.images = images; 
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, images, build); 
exports.default = parallel(styles, scripts, browsersync, watching);

/*
npm i gulp-imagemin@7.1.0 --save-dev
 gulp - start watching
 gulp build - собрать проект
 gulp build делается в конце проекта, когда нужно собрать папку dist,
 до этого работаем в app

 Чтобы установить все пакеты в новом проекте 
 нужно выполнить команду
 npm -i
 установятся те версии, которые указаны в package.json
*/