declare var require;

var Builder = require('systemjs-builder');
var util = require('gulp-util');

export const compile = (gulp, config) => {
	
	gulp.task('compile:app', ['compile:vendor'], () => {
		
		let builder = new Builder();

		return builder.loadConfig(config.system.configFile)
		  .then(() => {
				return builder.bundle('app - dist/vendor.js', 'dist/app.js', {minify: util.env.production})
			})
	});

	gulp.task('compile:vendor', [], () => {

		let builder = new Builder();

		return builder.loadConfig(config.system.configFile)
		  .then(() => {
				return builder.bundle('app - [app/**/*]', 'dist/vendor.js', {minify: util.env.production})
			})
	});

	gulp.task('compile:serviceworker', [], () => {

		let builder = new Builder();

		return builder.loadConfig(config.system.configFile)
		  .then(() => {
				return builder.buildStatic('app/ng2-service-worker', 'dist/worker.js', {minify: util.env.production})
			})
	});
}