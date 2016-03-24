MyRouter = Backbone.Router.extend({
    routes: {
        '' : 'start',
        'hello/:name' : 'sayHello',
        '*default' : 'start'
    },
    start: function(){
        console.log('Initial route invoked');
    },
    sayHello: function(name){
        console.log('Saying hello to ' + name);
    }
});