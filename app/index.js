'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('underscore.string');

module.exports = class extends Generator {
  prompting() {
      this.log(yosay('Welcome to the ' + chalk.yellow('dojo-widget') + ' generator. ' +
        chalk.green('Run this widget from the parent folder of your package. ' +
        'So like the', chalk.black(chalk.underline.bgYellow('/src')) + ' folder.')));

      return this.prompt([{
        type: 'input',
        name: 'widgetName',
        message: 'Widget Name:',
        default: 'Widget',
        required: true
      }, {
        type: 'input',
        name: 'description',
        message: 'Description:',
        required: true
      }, {
        type: 'input',
        name: 'path',
        message: 'Path to widget:',
        default: 'app',
        required: true
      }, {
        type: 'confirm',
        name: 'widgetsInTemplate',
        message: 'Will the template contain other widgets?',
        default: false,
        required: true
    }]).then((answers) => {
          this.widgetName = answers.widgetName;
          this.cssClass = _.dasherize(answers.widgetName.charAt(0).toLowerCase() + answers.widgetName.slice(1));
          this.description = answers.description;
          this.path = answers.path + '/';
          this.widgetsInTemplate = answers.widgetsInTemplate;
          this.consoleLog = this.path + this.widgetName;
          this.consoleLog = this.consoleLog.replace(/\//g, '/');
          var splitPath = this.path.split('/');
          this.packageName = splitPath[0];
          this.testPageBaseUrl = '';
          for (var x = 0; x < splitPath.length; x++) {
            this.testPageBaseUrl += '../';
          }
    });
  }

  app() {
    this.fs.copyTpl(
      this.templatePath('_widget.js'),
      this.destinationPath(this.path + this.widgetName + '.js'),
      this
    );

    this.fs.copyTpl(
      this.templatePath('_template.html'),
      this.destinationPath(this.path + 'templates/' + this.widgetName + '.html')
    );

    this.fs.copyTpl(
      this.templatePath('_test_page.html'),
      this.destinationPath(this.path + 'tests/' + this.widgetName + 'Tests.html'),
      this
    );

    this.fs.copyTpl(
      this.templatePath('_spec.js'),
      this.destinationPath(this.path + 'tests/spec/Spec' + this.widgetName + '.js'),
      this
    );

    this.fs.copyTpl(
      this.templatePath('_widget.styl'),
      this.destinationPath(this.path + 'resources/' + this.widgetName + '.styl'),
      this
    );
  }
};
