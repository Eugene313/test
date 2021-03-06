const gulp = require('gulp');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const del = require('del');
const browserSync = require('browser-sync').create();


let html = () => {
    return gulp.src('./src/index.pug')
        .pipe(pug('all.pug'))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
};

let css = () => {
     return gulp.src('./src/styl/style.styl')
        .pipe(stylus())
        .pipe(autoprefixer({
            browsers: [' > 0.1%'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(gulp.dest('./assets/css'))
        .pipe(browserSync.stream());
};

let javaScript = () => {
    return gulp.src('./src/js/**/*')
            .pipe(gulp.dest('./assets/js/'))
            .pipe(browserSync.stream());
};

let image = () => {
    return gulp.src('./src/img/**/*')
            .pipe(gulp.dest('./assets/img/'));
};

let fonts = () => {
    return gulp.src('./src/fonts/**/*')
            .pipe(gulp.dest('./assets/fonts/'));
};

let watch = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/**/*.pug', html),
    gulp.watch('./src/**/*.styl', css),
    gulp.watch('./src/**/*.js', javaScript)
    gulp.watch('./src/**/*.png', image)
};

let clean = () => {
    return del(['build/*'])
};

gulp.task('html', html);
gulp.task('css', css);
gulp.task('js', javaScript);
gulp.task('image', image);
gulp.task('fonts', fonts);
gulp.task('watch', watch);

gulp.task('build', gulp.series(clean, gulp.parallel(html, css, javaScript, image, fonts ) ) );
gulp.task('dev', gulp.series('build','watch'));


