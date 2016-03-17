Book = Backbone.Model.extend({
    urlRoot: 'http://localhost:8080/books/',
    initialize: function(){
        console.log('a new book');
    },
    defaults: {
        name: 'Book Title',
        author: 'No One'
    }
});

var thisBook = new Book();
thisBook.fetch({
    success: function(model, response, options){
        console.log('Fetch success');
    },
    error: function(model, response, options){
        console.log('Fetch error');
    }
});