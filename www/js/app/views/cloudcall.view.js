/*global App, _, $fh*/
/* Backbone View */
App.View.CloudcallView = App.View.BaseView.extend({

  templateId: 'cloudcall',
  model: App.models.cloudcallPage,

  events: {
    'click .cloud-action-button': 'cloudCall'
  },

  initialize: function(){
    _.bindAll(this, 'gotData', 'dataError');
  },

  cloudCall: function(){
    var self = this;
    $fh.cloud(
      {
        path: 'hello',
      },
      function(res){
        self.gotData(res);
      },
      function(code, errorprops, params){
        self.dataError(code, params);
    });
  },

  gotData: function(res){
    this.$el.find('.hidden').removeClass('hidden');
    this.$el.find('.response_content').removeClass('alert-error').addClass('alert-success').html('Response: ' + res.text);
    this.$el.find('.extra_response').removeClass('hidden');
  }

});