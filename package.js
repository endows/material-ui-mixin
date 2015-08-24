Package.describe({
  name: 'endotakashi:material-ui-mixin',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use(['react','izzilab:material-ui@0.1.5']);
  api.addFiles('material-ui-mixin.jsx');
  api.export("MaterialUIMixin",['client','server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use(['react','izzilab:material-ui@0.1.5']);
  api.addFiles('material-ui-mixin.jsx');
  api.export("MaterialUIMixin",['client','server']);
  api.addFiles('material-ui-mixin-tests.js');

});
