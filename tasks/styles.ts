declare var require;

const sass = require('gulp-sass');

export const compile = (gulp, config) => {
	gulp.task('compile:sass', () => {
		return gulp.src(config.css)
		  .pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest(config.dist))
	})
}