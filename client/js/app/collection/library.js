var com = com || {};
com.backbone = com.backbone || {};
com.backbone.collection = com.backbone.collection || {};

com.backbone.collection.Library = Backbone.Collection.extend({
    model: com.backbone.model.Book,
    url: 'http://localhost:8080/books/',
    initialize: function(){
        console.log('Creating a new library collection');
    }
});