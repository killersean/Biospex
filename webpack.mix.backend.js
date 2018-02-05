let mix = require("laravel-mix");
let path = require("path");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.autoload({
        jquery: ["$", "window.jQuery", "jQuery", "window.$", "jquery", "window.jquery"]
    })
    .setPublicPath(path.normalize("public/backend"))
    .js("resources/assets/js/backend.js", "js/backend.js")
    .sass("resources/assets/sass/backend.scss", "css/backend.css")
    .extract([
        "jquery",
        "select2/dist/js/select2.full",
        "jquery-ui/ui/disable-selection",
        "jquery-ui/ui/widgets/selectable",
        "jquery-ui/ui/widgets/sortable",
        "jquery-ui/ui/widgets/draggable",
        "jquery-ui/ui/widgets/droppable",

        "bootstrap-sass",
        "bootstrap-notify/bootstrap-notify",
        "bootstrap-confirmation2/bootstrap-confirmation",
        "x-editable/dist/bootstrap3-editable/js/bootstrap-editable",
        "codemirror/lib/codemirror",
        "summernote/dist/summernote",
        "jquery-ujs/src/rails",
        "icheck",
        "admin-lte/dist/js/adminlte",
    ]);


/* Production settings */

if (mix.inProduction()) {
    mix.version();
    mix.disableNotifications();
}
