const copy  = (gulp, config) => {
	
	gulp.task('copy:dev', () => {
		return gulp.src(config.staticFiles)
		  .pipe(gulp.dest(config.dist));
	});
	
}

export {copy};