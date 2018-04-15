define(['ko', 'bootstrap'], function (ko, $) {
var vm = {
    message: ko.observable($("#message").value()),
    openWindow: function () {
        $("#my-modal").modal("show");
    },
    closeWindow: function () {
        $("#my-modal").modal("hide");
    }

};
return vm;
});