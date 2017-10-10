/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-test');
var assert = require('yeoman-assert');
var mkdirp = require('mkdirp');
var fs = require('fs');

var runGen;
var options = {
  skipInstallMessage: true,
  skipInstall: true,
  skipWelcomeMessage: true,
  skipMessage: true
};
describe('generator tests', () => {
  // not testing the actual run of generators yet
  it('the generator can be required without throwing', () => {
    this.app = require('../app');
  });

  describe('dojo-widget generator', () => {
    it('creates expected files for uppercase name', () => {
      var expected = [
        // add files you expect to exist here.
        'app/TestApp.js',
        'app/templates/TestApp.html',
        'app/tests/TestAppTests.html',
        'app/tests/spec/SpecTestApp.js',
        'app/resources/TestApp.styl'
      ];

      helpers.run(path.join(__dirname, '../app'))
      .withOptions(options)
      .withPrompts({
        widgetName: 'TestApp',
        description: 'test description',
        path: 'app',
        widgetsInTemplate: true
      })
      .on('end', (done) => {
        assert.file(expected);
        assert.fileContent([
          ['app/resources/TestApp.styl', /\.test-app/],
          ['app/TestApp.js', /baseClass: 'test-app'/],
          ['app/TestApp.js', /'dojo\/text\!app\/templates\/TestApp.html'/]
        ]);

        done();
      });
    });

    it('creates expected files for lower name', () => {
      var expected = [
        // add files you expect to exist here.
        'app/testApp.js',
        'app/templates/testApp.html',
        'app/tests/testAppTests.html',
        'app/tests/spec/SpectestApp.js',
        'app/resources/testApp.styl'
      ];

      helpers.run(path.join(__dirname, '../app'))
        .withOptions(options)
        .withPrompts({
            'widgetName': 'testApp',
            'description': 'test description',
            'path': 'app',
            'widgetsInTemplate': true
        })
        .on('end', (done) => {
            assert.file(expected);
            assert.fileContent([
              ['app/resources/testApp.styl', /\.test-app/],
              ['app/testApp.js', /baseClass: 'test-app'/],
              ['app/testApp.js', /'dojo\/text\!app\/templates\/testApp.html'/]
            ]);

            done();
        });
    });
  });
});
