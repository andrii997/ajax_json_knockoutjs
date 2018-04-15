requirejs.config({
   baseUrl: "js",
   paths: {
       jquery: "/node_modules/jquery/dist/jquery.min",
       bootstrap: "/node_modules/bootstrap/dist/js/bootstrap.min",
       datepicker: "/node_modules/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min",
       ko: "/node_modules/knockout/build/output/knockout-latest.debug",
       moment: "/node_modules/moment/min/moment-with-locales",
       tokenfield: "/node_modules/bootstrap-tokenfield/dist/bootstrap-tokenfield.min",
       im: "/node_modules/inputmask/dist/jquery.inputmask.bundle",
       select2: "/node_modules/select2/dist/js/select2",
       jqValid: "/node_modules/jquery-validation/dist/jquery.validate.min"
   },
    shim: {
       jquery: {
           exports: "jQuery"
       },
        bootstrap: {
           deps: [
               "jquery"
           ],
            exports: "jQuery"
        },
        datepicker: {
           deps: ["bootstrap", "moment"],
            exports: "jQuery"
        },
        tokenfield: {
            deps: ["bootstrap"],
            exports: "jQuery"
        },
        ko: {
           exports: "ko"
        },
        im: {
            deps: [
                "jquery"
            ],
            exports: "jQuery"
        },
        select2: {
            deps: ["bootstrap"],
            exports: "jQuery"
        },
        jqValid: {
            deps: ["jquery"],
            exports: "jQuery"
        }
    }
});

requirejs(["viewmodals/home.viewmodal", "ko"], function (vm, ko) {
    vm.init();
    ko.applyBindings(vm);
});