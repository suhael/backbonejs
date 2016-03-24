LibraryView = Backbone.View.extend({

    initialize: function(){
        console.log('View created');
        this.render();
    },
    template: Handlebars.compile($("#library-template").html()),
    render: function(){
        var self = this;
        var template = self.template({'library':self.collection.toJSON()});
        self.$el.append(template);
        return self;
    },
    alertBook: function(e){
        alert('Book clicked');
        router.navigate('hello/suhael', {trigger : true});
    }

});