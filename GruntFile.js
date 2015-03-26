/*
 * generator-dojo-widget
 * github.com/steveoh/generator-dojo-widget
 *
 * Copyright (c) 2014 steveoh
 * Licensed under the MIT license.
 */

'use strict';

var bumpFiles = [
    'package.json'
];

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        bump: {
            options: {
                files: bumpFiles,
                commitFiles: bumpFiles.concat('README.md'),
                push: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-bump');
};
