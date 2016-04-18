$(function() {

    var bookView = new com.backbone.view.BookView({id: 98});
    var myView = new com.backbone.view.LibraryView();

    myView.delegateEvents({
        'click .book' : 'showBook'
    });

    //router.on("route:sayHello", function(page) {
    //    console.log("say hello route:  " + page)
    //});

    var router = new MyRouter();

    Backbone.history.start();

});
