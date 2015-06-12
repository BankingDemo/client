/*global App, _, $fh*/
/* Backbone View */
App.View.WeatherSampleView = App.View.BaseView.extend({

  templateId: 'weather',
  model: App.models.weatherPage,

  events: {
    'click .get-geo-btn': 'getLocation',
    'click .get-weather-btn': 'getWeatherData'
  },

  initialize: function(){
    _.bindAll(this, 'getLocation', 'gotLocation', 'getWeatherData', 'gotWeatherData');
  },

  getLocation: function(){
    var self = this;
    self.dataReset();
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(pos){
        self.gotLocation(pos);
      }, function(err){
        self.dataError('Failed to get location : ' + err.message);
      }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      });
    }
  },

  gotLocation: function(pos){
    this.coords = pos.coords;
    this.$el.find('#locationField').val('lat = ' + this.coords.latitude + '; lon = ' + this.coords.longitude);
    this.$el.find('.hidden').removeClass('hidden');
  },

  getWeatherData: function(){
    var self = this;
    self.dataReset();
    var lat = this.coords.latitude;
    var lon = this.coords.longitude;
    $fh.cloud({
      path:'getWeather',
      data: {
        lat: lat,
        lon: lon
      }
    }, function(res){
      self.gotWeatherData(res);
    }, function(msg){
      self.dataError(msg);
    });
  },

  gotWeatherData: function(data){
    this.$el.find('.response_content').removeClass('alert-error').removeClass('alert').html(App.Templates['weather-data'](data));
  }
});