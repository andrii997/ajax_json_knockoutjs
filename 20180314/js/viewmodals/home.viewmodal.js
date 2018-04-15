define(["ko", //"datepicker",
"tokenfield", "select2", "jqValid", "im", "jquery"], function (ko, //_,
 _2, _3, _4, _5, $) {
    var vm = {
        step: ko.observable(1),
        user: {
           email: ko.observable(""),
            password: ko.observable(""),
            confirm: ko.observable(""),
            fname: ko.observable("John"),
            phone: ko.observable("+123(45)678-910"),
            addr: ko.observable("61 Park Street"),
            country: ko.observable("USA"),
            hobbies: ko.observable("programing gaming"),
            bday: ko.observable("12/12/1990")
        },
        countries: ko.observableArray([
            {id: "UA", name: "Ukraine"},
            {id: "USA", name: "USA"}
        ]),
        isFirstStep: ko.pureComputed(function () {
            return vm.step() === 1;
        }),
        isSecondStep: ko.pureComputed(function () {
            return vm.step() === 2;
        }),
        isThirdStep: ko.pureComputed(function () {
            return vm.step() === 3;
        }),
        isDone: ko.pureComputed(function () {
            return vm.step() === 4;
        }),
        nextStep: function () {
            vm.step(vm.step() + 1);
            if($('#form_valid').valid() === true) {
                vm.step(vm.step() + 1);
            }
        },
        prevStep: function () {
            vm.step(vm.step() - 1);
        },
        init: function () {
            // $("#bday").datepicker();
            $("#hobbies").tokenfield();
            $("#phone").inputmask({ mask: "+99 (999) 99-99-99"});
            $("#country").select2();

            $(function () {
                $.validator.addMethod("strongPassword", function (value, element) {
                    return this.optional(element) || value.length >= 6;
                }, "Your pass must be at least 6 characters.");

                $.validator.addMethod("fullN", function (value, element) {
                    return this.optional(element) || value.length >= 6
                        && /^[A-z][a-z0-9_-]{3,19}$/i.test(value);
                }, "Your full name 6 characters and a-zA-Z");

                $.validator.addMethod("birthday", function (value, element) {
                    return this.optional(element) || value.length >= 6
                        && /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/i.test(value);
                }, "Your number 01/12/2020");

                $.validator.addMethod("address", function (value, element) {
                    return this.optional(element) || value.length >= 6
                        && /^\d+\s[A-z]+\s[A-z]+/g.test(value);
                }, "(253 N. Cherry St. )");

                // $.validator.addMethod("pHone", function (value, element) {
                //     return this.optional(element) && /^(\+[1-9][0-9]*(\([0-9]*\)|-[0-9]*-))?[0]?[1-9][0-9\- ]*$/
                //             .test(value);
                // }, "+123(45)678-910");



                $("#form_valid").validate({
                    rules: {
                        email: {
                            required: true,
                            email: true
                        },
                        password: {
                            required: true,
                            strongPassword: true
                        },
                        confirm: {
                            required: true,
                            equalTo: "#password"
                        },
                        fname: {
                            required: true,
                            fullN: true
                        },
                        bday: {
                            required: true,
                            birthday: true
                        },
                        addr: {
                            required: true,
                            address: true
                        }
                        // phone: {
                        //     required: true,
                        //     pHone: true
                        // }

                },
                messages: {
                    email: {
                        required: 'Please enter an email address',
                        email: 'Please enter a <em>valid email</em> address'
                    }
                }

                });
            });
        }
    };

    return vm;
});