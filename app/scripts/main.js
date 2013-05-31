require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrap: 'vendor/bootstrap',
        custom: 'custom',
        galleria: 'vendor/galleria/galleria',
        picasa: 'vendor/galleria/galleria.picasa'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery','bootstrap','custom'], function (app, $,custom) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});