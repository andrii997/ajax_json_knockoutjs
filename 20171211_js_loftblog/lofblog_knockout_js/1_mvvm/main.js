function AppViewModel() {
    this.firstName = ko.observable();
    this.lastName = ko.observable();
}

ko.applyBindings(new AppViewModel());