var gulp = require('gulp'),
concat = require('gulp-concat'),
gls = require('gulp-live-server');


var server;
var cssPath = './app/css/';
var jsPath = './app/js/';
var htmlPath = './app/views/';



/**
* HTML methods
*/
gulp.task('html:compile', function () {
  return gulp.src([
    htmlPath + 'components/loader.html',
    htmlPath + 'components/reload.html',
    htmlPath + 'activities.html',
    htmlPath + 'activity_detail.html'
  ])
  .pipe(gulp.dest('public/views'));
});
gulp.task('html:watch', function () {
  gulp.watch(htmlPath + '**/*.html', ['html:compile']);
});



/**
* CSS methods
*/
gulp.task('css:compile', function () {
  return gulp.src([
    cssPath + 'main.css',
    cssPath + 'activities.css',
    cssPath + 'activity_detail.css'
  ])
  .pipe(concat('style.css'))
  .pipe(gulp.dest('public/css'));
});
gulp.task('css:watch', function () {
  gulp.watch(cssPath + '**/*.css', ['css:compile']);
});



/**
* JS methods
*/
gulp.task('js:compile', function () {
  return gulp.src([
    './node_modules/angular/angular.min.js',
    './node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
    jsPath + 'app.js',
    jsPath + '**/*.js'
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('public/js'));
});
gulp.task('js:watch', function () {
  gulp.watch(jsPath + '**/*.js', ['js:compile']);
});




gulp.task('server', function() {
  server = gls.new('main.js');
  server.start();

  gulp.watch('main.js', function() {
    server.start.bind(server)()
  });
});


// Default task
gulp.task('default', [
  'html:compile', 'html:watch',
  'css:compile', 'css:watch',
  'js:compile', 'js:watch',
  'server'
]);
