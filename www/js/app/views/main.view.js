/*global App, Backbone, _, Effeckt*/
/* Backbone View */
App.View.MainView = Backbone.View.extend({

  events: function(){
    var eventName  = 'click';
    var hash = {};
    hash[eventName + ' .cloud-action'] = 'cloudActionPage';
    hash[eventName + ' .data-browser'] = 'dataBrowserPage';
    hash[eventName + ' .nodejs-page'] = 'nodePage';
    hash[eventName + ' .cloud-integration'] = 'cloudIntegrationPage';
    hash[eventName + ' .weather-sample'] = 'weatherPage';
    hash[eventName + ' .stats-analytics'] = 'analyticsPage';
    hash[eventName + ' .btn.back'] = 'backToIntro';
    return hash;
  },

  initialize: function(options){
    this.mainViewContainer = options.mainContainer;
    this.pageViewContainer = options.pageContainer;
    _.bindAll(this, 'cloudActionPage', 'dataBrowserPage', 'nodePage', 'cloudIntegrationPage', 'weatherPage', 'analyticsPage', 'backToIntro');
  },

  render: function(){
    var introView = new App.View.IntroView();
    this.introView = introView.render();
    this.mainViewContainer.html(this.introView);
  },

  cloudActionPage: function(){
    if(!this.cloudCallView){
      var cloudCallView = new App.View.CloudcallView();
      this.cloudCallView = cloudCallView.render();
    }
    this.showPage(this.cloudCallView);
  },

  dataBrowserPage: function(){
    if(!this.databrowserView){
      var databrowserView = new App.View.DatabrowserView();
      this.databrowserView = databrowserView.render();
    }
    this.showPage(this.databrowserView);
  },

  nodePage: function(){
    if(!this.nodeView){
      var nodeView = new App.View.NodeView();
      this.nodeView = nodeView.render();
    }
    this.showPage(this.nodeView);
  },

  cloudIntegrationPage: function(){
    if(!this.integrationView){
      var integrationView = new App.View.IntegrationView();
      this.integrationView = integrationView.render();
    }
    this.showPage(this.integrationView);
  },

  weatherPage: function(){
    if(!this.weatherView){
      var weatherView = new App.View.WeatherSampleView();
      this.weatherView = weatherView.render();
    }
    this.showPage(this.weatherView);
  },

  analyticsPage: function(){
    if(!this.statsView){
      var statsView = new App.View.StatsView();
      this.statsView = statsView.render();
    }
    this.showPage(this.statsView);
  },

  showPage: function(toPage){
    this.pageViewContainer.html(toPage);
    this.doTransition(this.mainViewContainer, this.pageViewContainer, 'slide-from-right', 'slide-to-left');
  },

  backToIntro: function(){
    this.doTransition(this.pageViewContainer, this.mainViewContainer, 'slide-from-left', 'slide-to-right');
  },

  doTransition: function(fromPage, toPage, transitionInEffect, transitionOutEffect){
    toPage.addClass('effeckt-page-animating effeckt-page-active');
    fromPage.addClass('effeckt-page-active effeckt-page-animating');
    fromPage.addClass(transitionOutEffect);
    toPage.addClass(transitionInEffect);
    var isNextPageEnd = false;
    var isCurrentPageEnd = false;
    var resetTransition = function(){
      fromPage.removeClass('effeckt-page-animating effeckt-page-active ' + transitionOutEffect);
      toPage.removeClass('effeckt-page-animating ' + transitionInEffect);
    };

    toPage.on( Effeckt.transitionAnimationEndEvent, function() {
      toPage.off( Effeckt.transitionAnimationEndEvent );
      isNextPageEnd = true;
      if ( isCurrentPageEnd ) {
        resetTransition();
      }
    });

    fromPage.on( Effeckt.transitionAnimationEndEvent, function () {
      fromPage.off( Effeckt.transitionAnimationEndEvent );
      isCurrentPageEnd = true;
      if ( isNextPageEnd ) {
        resetTransition();
      }
    });
  }
});