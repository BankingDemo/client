/*global App, Backbone, Handlebars, MBP, $fh*/
var initialize = function(){
  MBP.preventZoom();
  MBP.enableActive();
  //FastClick.attach(document.body);
  App.routers.mainRoute = new App.Router.MainRoute();
  Backbone.history.start({pushState: true, root: document.location.pathname});
  $fh.cloud({
    path: 'recordActivity',
    data: {
      'action': 'Client App Started'
    }
  }, function() {}, function() {});
};

//check if cordova is available
//initialize the app when page is load
if(window.device && window.device.cordova){
  document.addEventListener('deviceready', initialize, false);
} else {
  $(initialize);
}

Handlebars.registerHelper('visibleClass', function(index){
  var visibleClass = [];
  if(index >= 2){
    visibleClass.push('hidden-xs');
  }
  if(index >= 3){
    visibleClass.push('hidden-sm');
  }
  if(index >= 4){
    visibleClass.push('hidden-md');
  }
  return visibleClass.join(' ');
});

