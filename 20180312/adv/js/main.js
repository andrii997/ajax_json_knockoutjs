requirejs.config({
    paths: {
        jquery: "node_modules/dist/jquery.min",
        bootstrap: "node_modules/bootstrap/dist/js/bootstrap.min",
        ko: "node_modules/knockout/build/knockout-latest.debug"
    },
    shim: {
        jquery: {
            exports: "jQuery"
        },
        bootstrap: {
            deps: ["jquery"],
            exports: "jQuery"
        },
        ko: {
            exports: "ko"
        }
    }
});

requirejs(["viewmodal/home.viewmodal", "ko"], function (hvm, ko) {
    ko.applyBindings(hvm);
});