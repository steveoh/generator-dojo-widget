'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('underscore.string');

var DojoWidgetGenerator = yeoman.generators.Base.extend({
  askFor: function() {
    var done = this.async();

    // replace it with a short and sweet description of your generator
    this.log(yosay('Welcome to the ' + chalk.yellow('dojo-widget') + ' generator. ' +
      chalk.green('It is best to run this widget from the parent folder of your package. ' +
      'So like the', chalk.black(chalk.underline.bgYellow('/src')) + ' folder.')));

    var prompts = [{
      name: 'widgetName',
      message: 'Widget Name:',
      'default': 'Widget'
    }, {
      name: 'description',
      message: 'Description:'
    }, {
      name: 'path',
      message: 'Path to widget:',
      'default': 'app'
    }, {
      type: 'confirm',
      name: 'widgetsInTemplate',
      message: 'Will the template contain other widgets?',
      'default': true
    }];

    this.prompt(prompts, function(props) {
      this.widgetName = props.widgetName;
      this.cssClass = _.dasherize(props.widgetName.charAt(0).toLowerCase() + props.widgetName.slice(1));
      this.description = props.description;
      this.path = props.path + '/';
      this.widgetsInTemplate = props.widgetsInTemplate;
      this.consoleLog = this.path + this.widgetName;
      this.consoleLog = this.consoleLog.replace(/\//g, '/');
      var splitPath = this.path.split('/');
      this.packageName = splitPath[0];
      this.testPageBaseUrl = '';
      for (var x = 0; x < splitPath.length; x++) {
        this.testPageBaseUrl += '../';
      }

      done();
    }.bind(this));
  },

  app: function() {
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
  },

  projectfiles: function() {

  }
});

module.exports = DojoWidgetGenerator;
