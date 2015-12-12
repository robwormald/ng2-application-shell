declare var require;

var Builder = require('systemjs-builder');

export const compile = (gulp, config) => {
	
	gulp.task('compile:app', ['compile:vendor'], () => {
		
		let builder = new Builder();
		
		return builder.loadConfig(config.system.configFile)
		  .then(() => {
				return builder.bundle('app - dist/vendor.js', 'dist/app.js', {minify: true})
			})
	});

	gulp.task('compile:vendor', [], () => {

		let builder = new Builder();

		return builder.loadConfig(config.system.configFile)
		  .then(() => {
				return builder.bundle('app - [app/**/*]', 'dist/vendor.js', {minify: true, mangle: true})
			})
	});
}