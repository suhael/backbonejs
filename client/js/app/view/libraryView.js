var com = com || {};
com.backbone = com.backbone || {};
com.backbone.view = com.backbone.view || {};

com.backbone.view.LibraryView = Backbone.View.extend({

    initialize: function(){

        var self = this;

        //create a collection for this view to render
        self.collection = new com.backbone.collection.Library();
        //initial render
        self.render();

        //force the fetch to fire a reset event
        self.collection.fetch({reset:true});

        self.listenTo(self.collection, 'reset', self.render);
    },
    el: '#myLibraryViewSection',
    template: Handlebars.compile($("#library-template").html()),
    collection: null,
    render: function(){
        var self = this;
        var template = self.template({'library':self.collection.toJSON()});
        self.$el.append(template);
        return self;
    },
    showBook: function(options){
        var self =this,
        $target = $(options.currentTarget),
        id = $target.data('book');
        //router.navigate('hello/suhael', {trigger : true});
        var bookView = new com.backbone.view.BookView({id: id});
    }

});