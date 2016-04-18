var com = com || {};
com.backbone = com.backbone || {};
com.backbone.view = com.backbone.view || {};

com.backbone.view.BookView = Backbone.View.extend({

    initialize: function(options){
        var self = this;
        self.model = new com.backbone.model.Book({id: options.id});
        self.render();
        //force the fetch to fire a reset event
        self.model.fetch({});
        self.listenTo(self.model, 'change', self.render);
    },
    el: '#myBookViewSection',
    model: null,
    template: Handlebars.compile($("#book-template").html()),
    render: function(){
        var self = this;
        var template = self.template({'book':self.model.toJSON()});
        self.$el.html(template);
        return self;
    }

});