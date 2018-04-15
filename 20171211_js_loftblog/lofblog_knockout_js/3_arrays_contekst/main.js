function AppViewModel() {
    this.firstName = ko.observable();
    this.lastName = ko.observable();
    this.age = ko.observable();
    this.isAdmin = ko.observable(false);
    this.admin_stat = ko.observable('');
    this.country = ko.observable();
    this.countryOption = ['q','w','e','r','t'];

    this.fullName = ko.computed(function () {
     return this.firstName() + ' ' + this.lastName();
    },this);
    this.notEmpty = ko.computed(function () {
        return !!this.age() || !!this.country() || !!this.firstName() || !!this.lastName() || !!this.isAdmin();
    },this);
    this.reset = function () {
        this.firstName('');
        this.lastName('');
        this.age(null);
        this.country(null);
        this.isAdmin(false);
    };
    this.save = function () {
        event.preventDefault();//перезагрузка
        if (this.notEmpty()) {
        console.log('all save');
        this.reset();
        }
    };

}

ko.applyBindings(new AppViewModel());