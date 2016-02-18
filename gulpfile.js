var elixir = require('laravel-elixir');

var assetsDir = './resources/assets/';

var lessPaths = [
    assetsDir + "vendor/bootstrap/less",
    assetsDir + "vendor/font-awesome/less",
    assetsDir + "vendor/bootstrap-select/less"
];

elixir(function(mix) {
    mix.less('app.less', assetsDir + '/css', { paths: lessPaths })
        .styles([
            'css/app.css',
            'vendor/jquery-ui/themes/smoothness/jquery-ui.min.css',
            'vendor/jqGrid/css/ui.jqgrid.css',
            'vendor/jqGrid/css/ui.jqgrid-bootstrap.css',
            'vendor/jqGrid/css/ui.jqgrid-bootstrap-ui.css',
            'vendor/ui-multiselect/jquery.multiselect.css',
            'vendor/tablesorter/dist/css/theme.bootstrap.min.css',
        ], 'public/css/app.css', assetsDir)
        .scripts([
            'vendor/jquery/dist/jquery.min.js',
            'vendor/jquery-ui/jquery-ui.min.js',
            'vendor/jquery-validation/dist/jquery.validate.min.js',
            'vendor/jquery-validation/dist/additional-methods.min.js',
            'vendor/jqGrid/js/i18n/grid.locale-en.js',
            'vendor/jqGrid/js/jquery.jqGrid.min.js',
            'vendor/ui-multiselect/src/jquery.multiselect.js',
            'vendor/bootstrap/dist/js/bootstrap.min.js',
            'vendor/bootstrap-select/dist/js/bootstrap-select.min.js',
            'vendor/tablesorter/dist/js/jquery.tablesorter.min.js',
            'vendor/tablesorter/dist/js/jquery.tablesorter.widgets.js',
            'js/app.js',
            'js/grid.js'
        ], 'public/js/app.js', assetsDir)
        .copy(assetsDir + 'vendor/font-awesome/fonts', 'public/fonts')
        .copy(assetsDir + 'vendor/jquery-ui/themes/smoothness/images', 'public/css/images')
     });


