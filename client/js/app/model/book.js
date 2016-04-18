var com = com || {};
com.backbone = com.backbone || {};
com.backbone.model = com.backbone.model || {};

com.backbone.model.Book = Backbone.Model.extend({
    urlRoot: 'http://localhost:8080/books/',
    initialize: function(){
        console.log('a new book');
    },
    defaults: {
        name: 'Book Title',
        author: 'No One'
    },
    parse: function(model){

        return model;
    }
});