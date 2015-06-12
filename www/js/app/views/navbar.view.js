/*global App, Backbone, _*/
/* Backbone View */
App.View.NavbarView = Backbone.View.extend({

  templateId: 'navbar',
  initialize: function(opts){
    this.model = new Backbone.Model({title: opts.title, titleWidth: opts.titleWidth});
    this.listenTo(this.model, 'change:title', this.render);
    _.bindAll(this, 'setTitle');
  },
  
  render: function(){
    var source = $("#" + this.templateId).html();
    var template = Handlebars.compile(source);
    this.$el = template(this.model.toJSON());
    return this.$el;
  },

  setTitle: function(title){
    this.model.set('title', title);
  }
});