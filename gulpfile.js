const gulp = require('gulp');
const concat = require('gulp-concat');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync').create();
const clean = require('gulp-rimraf');

const scripts = require('./scripts');
const styles = require('./styles');

let devMode = false;

gulp.task('css', () => {
	gulp.src(styles)
		.pipe(concat('main.css'))
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('js', () => {
	gulp.src(scripts)
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('html', () => {
	gulp.src('./src/app/**/*.html')
		.pipe(gulp.dest('./dist/views/'))
		.pipe(browserSync.reload({
			stream: true
		}));
	gulp.src('./src/index.html')
		.pipe(gulp.dest('./dist/'));	
});

gulp.task('build', ['clean'], () => {
	gulp.start(['css', 'js', 'html']);
});

gulp.task('bsync', () => {
	browserSync.init(null, {
		open: false,
		server: {
			baseDir: 'dist'
		}
	})
});

gulp.task('start', (callback) => {
	devMode = true;
	runSequence('build', 'bsync', callback);
	gulp.watch(['./src/**/*.css'], ['css']);
	gulp.watch(['./src/**/*.js'], ['js']);
	gulp.watch(['./src/**/*.html'], ['html']);
});

gulp.task('clean', () => {
	console.log('Cleaning ./dist folder ...');
	return gulp.src("./build/*", { read: false }).
		pipe(clean());
}) 