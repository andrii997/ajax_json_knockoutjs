var vm = {
    openForm:ko.observable(false),
    itemsInPage:ko.observable(6),
    page:ko.observable(1),
    totalPages:ko.observable(),
    totalItems:ko.observable(),
    editable: null,
    currentUser: ko.observableArray([]),
    userList: ko.observableArray([]),
    loadUserList: function () {
        $.getJSON("api/users/" + vm.page() + "/" + vm.itemsInPage(), function (userList) {
            vm.userList(userList.data);
            vm.page(userList.page);
            vm.totalPages(userList.totalPages);
            vm.totalItems(userList.totalItems);
        } );
    },
    countryList: ko.observableArray([]),
    loadCountryList: function () {
        $.getJSON("api/countries", function (countryList) {
            vm.countryList(countryList);
        } );
    },

    load:function () {
        $("#uploadImageItem").click();
        $("#uploadImageItem").change(function() {
            vm.readURL(this);
        });
    },

    readURL:function (input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                vm.currentUser().photo = e.target.result;
            };
            reader.readAsDataURL(input.files[0]);
        }
    },

    removeUser: function () {
        $.ajax({url:"api/users/" + vm.currentUser().id,
            type: "delete",
            success: vm.lastPage
        });
        vm.closeForm();
    },
    goToNextPage: function () {
        cureent.page += this.page;
        return vm.closeForm();
    },
    pressCreateBtn:function() {
        vm.currentUser().photo="img/400x400.gif";
        vm.openingForm();
    },
    openingForm: function () {
        vm.openForm(true);
    },
    closeForm: function () {
        vm.openForm(false);
        vm.editable= null;
        vm.currentUser([]);
    },
    sendForm:function () {
        if (vm.editable){
            $.ajax({url:"api/users/",
                type:"put",
                dataType: "json",
                data:  ko.toJSON(vm.currentUser),
                contentType:"application/json",
                success: vm.loadUserList
            });
            vm.editable= null;
        }
        else{
            $.ajax({url:"api/users",
                type:"post",
                dataType: "json",
                data: ko.toJSON(vm.currentUser),
                contentType:"application/json",
                success: vm.loadUserList
            });
        }
        vm.closeForm();
    },
    editUser: function (user) {
        vm.openingForm();
        vm.editable = user;
        vm.currentUser(user);
    },

};
vm.currentUser.subscribe(function (value) {
    console.log(value);
});
ko.applyBindings(vm);
vm.loadUserList();
vm.loadCountryList();

// var vm = {
//     title: ko.observable("Pagination"),
//     users: ko.observableArray([]),
//     currentUser: ko.observable(null),
//     paginationInfo: {
//         page: ko.observable(1),
//         total: ko.observable(0),
//         count: ko.observable(0),
//         pages: ko.observableArray([])
//     },
//
//     activateUser: function (user) {
//       vm.currentUser(user)
//     },
//
//     isOnFirstPage: ko.pureComputed(function () {
//         return vm.paginationInfo.page() === 1;
//     }),
//
//     isOnLastPage: ko.pureComputed(function () {
//         return vm.paginationInfo.page() >= vm.paginationInfo.total()
//     }),
//
//     removeCurrentUser: function (user) {
//       $.ajax({
//           url: "api/users/" + user.id,
//           type: "delete"
//       }).done(function () {
//           if (vm.paginationInfo.count() % 5 === 1) {
//               vm.goToPrevPage();
//           }
//           else {
//               vm.loadData();
//           }
//       });
//     },
//
//     goToPage: function (pageNum) {
//       vm.paginationInfo.page(pageNum);
//       vm.loadData();
//     },
//
//     goToFirstPage: function() {
//         vm.goToPage(1);
//     },
//
//     goToLastPage: function() {
//         vm.goToPage(vm.paginationInfo.total());
//     },
//
//     goToPrevPage: function () {
//         if (this.paginationInfo.page() < 2) {
//             return;
//         }
//         vm.goToPage(vm.paginationInfo.page() -1);
//     },
//     goToNextPage: function () {
//         if (this.paginationInfo.page() >= vm.paginationInfo.total()) {
//             return;
//         }
//         vm.goToPage(vm.paginationInfo.page() +1);
//     },
//
//     loadData: function () {
//         return $.getJSON(`api/users/${vm.paginationInfo.page()}/5`)
//             .done(function (response) {
//                 vm.paginationInfo.count(response.totalItems);
//                 vm.paginationInfo.total(response.totalPages);
//                 vm.paginationInfo.page(response.page);
//                 vm.users(response.data);
//                 vm.generatePages();
//             });
//     },
//
//     generatePages: function () {
//         var pages = [];
//         for (var i = 0; i < vm.paginationInfo.total(); i++) {
//             pages.push(i + 1);
//         }
//         vm.paginationInfo.pages(pages);
//     }
// };
// 	vm.loadData();
//
// ko.applyBindings(vm);