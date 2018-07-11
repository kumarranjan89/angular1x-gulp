const gulp = require('gulp');
const concat = require('gulp-concat');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync').create();

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
	gulp.src('./src/**/*.html')
		.pipe(gulp.dest('./dist/'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('build', () => {
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