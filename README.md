# generator-dojo-widget
[![Build Status](https://travis-ci.org/steveoh/generator-dojo-widget.png?branch=master)](https://travis-ci.org/steveoh/generator-dojo-widget)
[![Dependency Status](https://gemnasium.com/steveoh/generator-dojo-widget.png)](https://gemnasium.com/steveoh/generator-dojo-widget)
> [Yeoman](http://yeoman.io) generator


## Getting Started

```
$ npm install -g yo
```

```
$ npm install -g generator-dojo-widget
```

Finally, initiate the generator:

```
$ yo dojo-widget
```

### What will happen

A few opinionated files will be created. If you created a widget called `test`, the following files will be created for you.

      'app/test.js',
      'app/templates/test.html',
      'app/tests/testTests.html',
      'app/tests/spec/Spectest.js',
      'app/resources/test.styl'

The `/test.js` file will contain your widget logic.  
`/templates/test.html` will be an empty template file if your widget has a template.  
`tests/testTests.html` is an html page that you can load to see your widget in isolation.  
`tests/spec/Spectest.js` is a [jasmine](http://jasmine.github.io/) test spec file with a default test instantiating your new widget.  
`resources/test.styl` is the style sheet containing styles specific to your new widget.  

## License

MIT

## Release Notes

**1.0.0** Update to yeoman 2.0.1
**0.3.0** Update to yeoman 0.19
**0.2.2** Update greeting with `yosay`
**0.2.1** Remove deprecated peerDependencies  
**0.2.0** Add xstyle and stylus for css  
