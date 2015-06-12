this["App"] = this["App"] || {};
this["App"]["Templates"] = this["App"]["Templates"] || {};

this["App"]["Templates"]["cloudcall"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += " "
    + "\n <div class=\"content_view\">\n  <div class=\"container\">\n    <h1>";
  if (stack1 = helpers.header) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.header; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n    <p>";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <p><a class=\"btn btn-primary btn-lg cloud-action-button\"><i class=\"icon-external-link-sign\"></i> ";
  if (stack1 = helpers.buttonText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.buttonText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></p>\n    <p class=\"response_content alert\"></p>\n    <p class=\"extra_response hidden\">\n      ";
  if (stack1 = helpers.extraRes) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.extraRes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </p>\n  </div>\n</div>";
  return buffer;
  });

this["App"]["Templates"]["databrowser"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += " "
    + "\n <div class=\"content_view\">\n  <div class=\"container\">\n    <h1>";
  if (stack1 = helpers.header) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.header; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n    <p>";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <form>\n      <div class=\"form-group\">\n        <label class=\"sr-only\" for=\"nameField\">";
  if (stack1 = helpers.inputFieldLabel) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.inputFieldLabel; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</label>\n        <input type=\"text\" class=\"form-control\" id=\"nameField\" placeholder=\"";
  if (stack1 = helpers.inputFieldLabel) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.inputFieldLabel; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n      </div>\n    </form>\n    <p class=\"alert alert-danger hidden\"></p>\n    <p><a class=\"btn btn-primary btn-lg save-data\"><i class=\"icon-save\"></i> ";
  if (stack1 = helpers.buttonText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.buttonText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></p>\n    <p class=\"response_content alert\"></p>\n    <p class=\"extra_response hidden\">\n      ";
  if (stack1 = helpers.extraRes) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.extraRes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </p>\n  </div>\n</div>";
  return buffer;
  });

this["App"]["Templates"]["integration"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <div class=\"col-xs-4 col-sm-3 col-md-2 plugins\">\n        <img src=\"img/plugins/"
    + escapeExpression(((stack1 = depth0.img),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"img-responsive\" />\n      </div>\n    ";
  return buffer;
  }

  buffer += " "
    + "\n <div class=\"content_view\">\n  <div class=\"container cloud_integration\">\n    <h1>";
  if (stack1 = helpers.header) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.header; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n    <p>";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <div class=\"row\">\n    ";
  stack1 = helpers.each.call(depth0, depth0.plugins, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  </div>\n</div>";
  return buffer;
  });

this["App"]["Templates"]["intro"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"col-xs-6 col-sm-4 ";
  if (stack1 = helpers.responsiveClass) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.responsiveClass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <div class=\"container start-menu-item ";
  if (stack1 = helpers.className) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.className; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n      <a class=\"btn start-menu-item-icon\">\n        <i class=\"icon-";
  if (stack1 = helpers.iconClass) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.iconClass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " icon-2x\"></i>\n      </a>\n      <h5>";
  if (stack1 = helpers.menuTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.menuTitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h5>\n      <h6>";
  if (stack1 = helpers.menuSubTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.menuSubTitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h6>\n    </div>\n  </div>\n  ";
  return buffer;
  }

  buffer += " "
    + "\n<div class=\"banner well center text-center\">\n<h1>";
  if (stack1 = helpers.header) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.header; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n<div class=\"fh-icon\">\n<img src=\"img/logo.png\"/ class=\"bannerLogo\">\n</div>\n<p>";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</div>\n<div class=\"row\">\n  ";
  stack1 = helpers.each.call(depth0, depth0.menuItems, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n\n\n";
  return buffer;
  });

this["App"]["Templates"]["navbar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "style=\"width: ";
  if (stack1 = helpers.titleWidth) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.titleWidth; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px\"";
  return buffer;
  }

  buffer += " "
    + "\n<nav class=\"navbar navbar-default\" role=\"navigation\">\n<div class=\"nav pull-left\">\n  <a class=\"btn back\"><i class=\"icon-chevron-left icon-2x\"></i></a>\n</div>\n<div class=\"navbar-title\" ";
  stack1 = helpers['if'].call(depth0, depth0.titleWidth, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n<div class=\"nav navbar-text\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n</div>\n<div class=\"fh-icon\"><img src=\"img/logo.png\"/ class=\"logo\">\n</div>\n</nav>";
  return buffer;
  });

this["App"]["Templates"]["node"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += " "
    + "\n <div class=\"content_view\">\n  <div class=\"container\">\n    <h1>";
  if (stack1 = helpers.header) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.header; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n    <img src=\"img/nodejs.png\" class=\"img-responsive\"/>\n    <p>";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  </div>\n</div>";
  return buffer;
  });

this["App"]["Templates"]["stats"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += " "
    + "\n <div class=\"content_view\">\n  <div class=\"container\">\n    <h1>";
  if (stack1 = helpers.header) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.header; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n    <p>";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  </div>\n</div>";
  return buffer;
  });

this["App"]["Templates"]["weather-data"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n    <div class=\"col-xs-6 col-sm-4 col-md-3 col-lg-2 ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.visibleClass || depth0.visibleClass),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "visibleClass", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n      <div class=\"container\">\n        <img src=\"";
  if (stack2 = helpers.icon) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.icon; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"img-circle\" />\n        <p>";
  if (stack2 = helpers.date) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.date; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\n        <p>";
  if (stack2 = helpers.low) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.low; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " - ";
  if (stack2 = helpers.high) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.high; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " (&deg;C)</p>\n        <p>";
  if (stack2 = helpers.desc) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.desc; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\n      </div>\n    </div>\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += " "
    + "\n<div class=\"row weather-info\">\n  ";
  stack1 = helpers.each.call(depth0, depth0.data, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["App"]["Templates"]["weather"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += " "
    + "\n <div class=\"content_view weather_page\">\n  <div class=\"container\">\n    <h1>";
  if (stack1 = helpers.header) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.header; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n    <p>";
  if (stack1 = helpers.geoText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.geoText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <p><a class=\"btn btn-primary btn-lg get-geo-btn\"><i class=\"icon-location-arrow\"></i> ";
  if (stack1 = helpers.geoButtonText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.geoButtonText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></p>\n    <form>\n      <div class=\"form-group\">\n        <label class=\"sr-only\" for=\"locationField\">";
  if (stack1 = helpers.geoLabelText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.geoLabelText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</label>\n        <input type=\"text\" class=\"form-control\" id=\"locationField\" placeholder=\"";
  if (stack1 = helpers.geoLabelText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.geoLabelText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n      </div>\n    </form>\n    <div class=\"hidden\">\n      <p class=\"get-weather-text\">\n        ";
  if (stack1 = helpers.getWeatherText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.getWeatherText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n      </p>\n      <p><a class=\"btn btn-primary btn-lg get-weather-btn\"><i class=\"icon-globe\"></i> ";
  if (stack1 = helpers.getWeatherButtonText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.getWeatherButtonText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></p>\n    </div>\n    <p class=\"response_content\"></p>\n  </div>\n</div>";
  return buffer;
  });