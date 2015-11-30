var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var src = {};
src.resources = ['src/**/*.*', '!src/**/*.js'];
src.scripts = ['src/index.js', 'src/**/*.js'];

var build = {};
build.target = './target/';
build.scripts = build.target + 'js/';


gulp.task('concatjs', function () {
  gulp.src(src.scripts)
    .pipe(sourcemaps.init())
    .pipe(concat('ngapp.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(build.scripts));
});

gulp.task('copyres', function () {
  gulp.src(src.resources)
    .pipe(gulp.dest(build.target));
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.js', ['concatjs', 'copyres']);
});

gulp.task('default', ['concatjs', 'copyres']);