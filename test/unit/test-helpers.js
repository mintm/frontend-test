// Helpers to simplify unit tests with mocha

// Load jsdom browser
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM('<html><head><script></script></head><body></body></html>');
global.document = window.document;
global.window = window;

// Used by angular-mocks
global.window.mocha = {};
global.window.beforeEach = beforeEach;
global.window.afterEach = afterEach;

// Load Angular
require('angular/angular');
require('angular-mocks');

// Load UI router
global.angular = window.angular;
require('@uirouter/angularjs');

// Expose for mocha tests
global.ngInject = window.angular.mock.inject;
global.ngModule = window.angular.mock.module;
global.expect = require('chai').expect;

// Load all JS from app/ folder
const glob = require('glob'),
path = require('path');
glob.sync('./app/js/**/*.js' ).forEach((file) => {
  // "file" is relative to the root of the project
  // We need the absolute path to the file from the /
  require(path.resolve(file));
});
