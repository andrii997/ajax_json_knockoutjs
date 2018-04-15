requirejs.config({
    paths: {
        jquery: "node_modules/jquery/dist/jquery.min",
        bootstrap: "node_modules/bootstrap/dist/js/bootstrap.min"
    },
    shim: {
        jquery: {
            exports: "jQuery"
        },
        bootstrap: {
            deps: ["jquery"],
            exports: "jQuery"
        }
    }
});

requirejs(["bootstrap"], function ($) {
   $("#root").text("loaded!");
});