declare var require;

var Builder = require('systemjs-builder');

export const compile = (gulp, config) => {
	
	gulp.task('compile:app', [], () => {
		
		let builder = new Builder();
		
		return builder.loadConfig(config.system.configFile)
		  .then(() => {
				return builder.bundle('app', 'dist/app.js')
			})
	});
}