Book = Backbone.Model.extend({
    //urlRoot: 'http://localhost:8080/books/',
    initialize: function(){
        console.log('a new book');
    },
    defaults: {
        name: 'Book Title',
        author: 'No One'
    }
});