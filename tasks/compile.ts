declare var require;

var Builder = require('systemjs-builder');

export const compile = (gulp, config) => {
	
	gulp.task('compile:app', [], () => {
		
		let builder = new Builder();
		
		return builder.loadConfig(config.system.configFile)
		  .then(() => {
				return builder.buildStatic('app', 'dist/app.js', {minify: true})
			})
	});
}