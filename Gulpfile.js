var gulp = require('gulp');
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var src = {};
src.resources = ['src/**/*.*', '!src/**/*.js'];
src.scripts = ['src/index.js', 'src/**/*.js'];

var build = {};
build.target = './target/';
build.scripts = build.target + 'js/';

gulp.task('lint', function () {
  return gulp.src(src.scripts)
    .pipe(eslint({
      configFile: '.eslintrc'
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('concatjs', ['lint'], function () {
  gulp.src(src.scripts)
    .pipe(sourcemaps.init())
    .pipe(concat('ngapp.js'))
    .pipe(annotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(build.scripts));
});

gulp.task('copyres', ['lint'], function () {
  gulp.src(src.resources)
    .pipe(gulp.dest(build.target));
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.js', ['concatjs', 'copyres']);
});

gulp.task('default', ['concatjs', 'copyres']);