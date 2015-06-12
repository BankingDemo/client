/*global App, Backbone*/
/* Define Backbone Routes */
App.Router.MainRoute = Backbone.Router.extend({

  routes : {
    '': 'mainPage',
    'main': 'mainPage'
  },

  mainPage: function(){
    var mainView = new App.View.MainView({
      el: $('body')[0],
      mainContainer: $('#main_page'),
      pageContainer: $('#page_view_container')
    });
    mainView.render();
  }
});