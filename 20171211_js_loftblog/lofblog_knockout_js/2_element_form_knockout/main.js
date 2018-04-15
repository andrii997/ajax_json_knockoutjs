function AppViewModel() {
var newsHeadersArray = ["main news!","newss","bad news!"],
    newsArray = [
    {
        title: "main news!",
        text: "text1 text1",
        isNew: true
    },
    {
        title: "newss",
        text: "text2 text2",
        isNew: false
    },
    {
        title: "bad news!",
        text: "text3 text3 text3",
        isNew: false
    }
];
this.newsHeaders = ko.observableArray(newsHeadersArray);
this.news = ko.observableArray(newsArray);
}

ko.applyBindings(new AppViewModel());