declare var require;

const sass = require('gulp-sass');
const inline = require('gulp-inline');
const minifyCSS = require('gulp-minify-css');

export const build = (gulp, config) => {
	
	gulp.task('default', ['compile:sass','compile:app'], () => {
		
		gulp.src(config.index)
  		.pipe(inline({
    		base: 'dist',
				css: minifyCSS,
    		disabledTypes: ['img', 'js'], // Only inline css files 
    	}))
  		.pipe(gulp.dest('dist/'));
		
	});
	
	
}