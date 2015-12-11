var gulp = require('gulp');
var tsregister = require('ts-node/register');
var tsconfig = require('./tsconfig.json');

var config = {
	index: 'src/index.html',
	css:['src/**/*.scss'],
	staticFiles: ['src/**/*', '!src/**/*.ts'],
	dist: './dist',
	system: {
		configFile: 'system.config.js'
	}
};

require('./tasks/build').build(gulp, config);
require('./tasks/copy').copy(gulp, config);
require('./tasks/styles').compile(gulp, config);
require('./tasks/compile').compile(gulp, config);


