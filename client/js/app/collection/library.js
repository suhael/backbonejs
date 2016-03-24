var Library = Backbone.Collection.extend({model: Book,
    url: 'http://localhost:8080/books/',
    initialize: function(){
        console.log('Creating a new library collection');
    }
});