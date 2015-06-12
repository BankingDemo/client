/*global App, Backbone*/
/* Define Backbone Models */
App.Model.PageModel = Backbone.Model.extend({

});

App.models.introPage = new App.Model.PageModel({
  title: 'Welcome',
  header: 'Welcome To FeedHenry',
  text: 'Learn about and interact with our platform',
  nextButtonText: 'Let\'s Start',
  menuItems: [{className: 'cloud-action', imgPath: '/img/touch/apple-touch-icon.png', menuTitle: 'Cloud Action', menuSubTitle: 'Try it now', responsiveClass: 'col-md-3 col-lg-2', iconClass: 'cloud'},
              {className: 'data-browser', imgPath: '/img/touch/apple-touch-icon.png', menuTitle: 'Data Browser', menuSubTitle: 'Use MongoDB', responsiveClass: 'col-md-3 col-lg-2', iconClass: 'table'},
              {className: 'nodejs-page', imgPath: '/img/touch/apple-touch-icon.png', menuTitle: 'Powered By Nodejs', menuSubTitle: 'Cloud code', responsiveClass: 'col-md-3 col-lg-2', iconClass: 'bolt'},
              {className: 'cloud-integration', imgPath: '/img/touch/apple-touch-icon.png', menuTitle: 'Cloud Integration', menuSubTitle: 'Use Plugins', responsiveClass: 'col-md-3 col-lg-2', iconClass: 'gears'},
              {className: 'weather-sample', imgPath: '/img/touch/apple-touch-icon.png', menuTitle: 'Example', menuSubTitle: 'Use Location', responsiveClass: 'col-md-2 col-md-offset-2 col-lg-2 col-lg-offset-0', iconClass: 'sun'},
              {className: 'stats-analytics', imgPath: '/img/touch/apple-touch-icon.png', menuTitle: 'Stats', menuSubTitle: 'See the data', responsiveClass: 'col-md-2 col-md-offset-4 col-lg-2 col-lg-offset-0', iconClass: 'bar-chart'} ]
});

App.models.cloudcallPage = new App.Model.PageModel({
  title: 'Cloud Action',
  header: 'Cloud Action',
  text: 'This client App is now connected to its matching Node.js cloud code on FeedHenry. Tap the button to request a response from the cloud.',
  buttonText: 'Call Cloud',
  extraRes: 'Now check your stats page in the studio to see that this cloud call happen.'
});

App.models.statsPage = new App.Model.PageModel({
  title: 'Stats',
  header: 'Stats',
  titleWidth: '50',
  text: 'In addition to all of our App install/usage Analytics, you can also instrument your cloud code to see exactly how it is performing. Go to the Stats section of the Studio and see if your device has been detected.'
});

App.models.nodePage = new App.Model.PageModel({
  title: 'Powered By Nodejs',
  header: 'Powered By Nodejs',
  text: 'FeedHenry Apps are made much more powerful by our Node.js cloud code. You have all of the functionality of Node available to you including all of its modules. This means you get powerful responsive business logic doing all the heavy lifting for your application.',
  titleWidth: '150'
});

App.models.databrowserPage = new App.Model.PageModel({
  title: 'Data Browser',
  header: 'Data Browser',
  text: 'Enter your name and then tap the button to save your name in our cloud database',
  moreInfo: 'Now go to the Data Browser section of the App Studio and see if you can find your name stored there.',
  inputFieldLabel: 'Please Enter Your Name',
  buttonText: 'Save',
  extraRes: 'Your data is now saved. Please go to studio and see your data using the Data Browser.'
});

App.models.weatherPage = new App.Model.PageModel({
  title: 'Location Example',
  header: 'Location Example',
  geoText: 'Let’s grab your location and do something with it. Tap the button to find your location',
  geoButtonText : 'Get My Location',
  geoLabelText: 'My Location',
  getWeatherText: 'Now we are going to use that location to request weather information from an online web-service via our cloud code. Tap the button to do this.',
  getWeatherButtonText: 'Get My Weather Info',
  titleWidth: '150'
});

App.models.integrationPage = new App.Model.PageModel({
  title: 'Cloud Integration',
  header: 'Cloud Integration',
  titleWidth: '121',
  text: 'You can easily integrate with all of your existing back-end systems using Cloud Plugins. Check out the the App Studio to see how to connect to Databases, Messaging, Analytics, SaaS, eCommerce, Logging, Data Storage, File Storage, Testing, Tools and File Storage. A few examples including:',
  plugins:[{img:'mysql.png'},
          {img: 'oracle.png'},
          {img: 'stripe.png'},
          {img: 'loggly.png'},
          {img: 's3.png'},
          {img: 'mixpanel.png'},
          {img: 'salesforce.png'},
          {img: 'sendgrid.png'},
          {img: 'paypal.png'}]
});