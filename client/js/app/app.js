//var thisBook = new Book({id: 98});
//thisBook.fetch({
//    success: function(model, response, options){
//        console.log('Fetch success' + model.get('name'));
//    },
//    error: function(model, response, options){
//        console.log('Fetch error');
//    }
//});

var bookOne = new Book({name: 'Beginning Backbone', author: 'James Sugrue', year: 2013});
var bookTwo = new Book({name: 'Pro Javascript Design Patterns', author:'Dustin Diaz, Ross Harmes', year: 2012});

var myLibrary = new Library([bookOne, bookTwo]);

myLibrary.forEach(function(model){
    console.log("Book is called " + model.get('name'));
});

var myView = new LibraryView({
    collection: myLibrary,
    el: '#myLibraryViewSection'
});

myView.delegateEvents({
    'click #book' : 'alertBook'
});

var router = new MyRouter();

Backbone.history.start();

router.on("route:sayHello", function(page) {
    console.log("say hello route:  " + page)
});