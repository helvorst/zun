// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html
const path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-remap-coverage'),
      require('karma-sourcemap-loader'),
      require('karma-webpack'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },

    angularCli: {
      environment: 'dev'
    },
    files: [
      './src/**/*.ts'
    ],
    preprocessors: {
      //'./src/**/*.spec.ts': ['webpack', 'sourcemap'],
      './src/**/*.ts': ['coverage']
    },
    reporters: ['progress', 'kjhtml', 'coverage'],
    // save interim raw coverage report in memory 
    coverageReporter: {
      type: 'in-memory'
    },

    // define where to save final remaped coverage reports 
    // remapCoverageReporter: {
    //   'text-summary': null,
    //   html: './coverage/html',
    //   cobertura: './coverage/cobertura.xml'
    // },
    coverageReporter: {
      dir: './coverage/',
      exclude: [
        "node_modules",
        "**/*.spec.ts"
      ],
      //includeAllSources: true,
      reporters: [
        { type: 'text-summary' },
        { type: 'text' },
        { type: 'html'}
      ],
    },
   
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
