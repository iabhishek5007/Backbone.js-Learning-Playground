/**
 * Backbone.js Parameterized Routing Example
 * 
 * This file demonstrates how to use parameterized routes in Backbone.js.
 * Parameterized routes allow you to capture parts of the URL as variables
 * that can be passed to your route handler functions.
 */

/**
 * Define three simple views for different pages
 * Each view just renders some basic HTML content
 */
var view1 = Backbone.View.extend({
  render: function () {
    // Renders content for the home page
    this.$el.html("This is home page");
  },
});

var view2 = Backbone.View.extend({
  render: function () {
    // Renders content for the about page
    this.$el.html("This is About Page");
  },
});

var view3 = Backbone.View.extend({
  render: function () {
    // Renders content for the contact page
    this.$el.html("This is Contact Page");
  },
});

/**
 * Define a router with parameterized routes
 * 
 * Routes can include parameters denoted by a colon (:)
 * These parameters are automatically passed to the handler functions
 */
var router = Backbone.Router.extend({
  routes: {
    // Route with one parameter - matches URLs like "#home/123"
    "home/:param1": "home",
    
    // Route with two parameters - matches URLs like "#about/john/doe"
    "about/:param2/:param3": "about",
    
    // Simple route without parameters - matches URL "#contact"
    contact: "contact",
  },

  // Handler for the home route
  home: function (param1) {
    // The parameter value is automatically passed to this function
    console.log(param1); // Outputs the value of param1 from the URL
    
    // Create and render the home view in the #container element
    var v1 = new view1({ el: "#container" });
    v1.render();
  },

  // Handler for the about route with two parameters
  about: function (param2, param3) {
    // Both parameter values are passed to this function in order
    console.log(param2, param3); // Outputs both parameter values
    
    // Create and render the about view in the #container2 element
    var v2 = new view2({ el: "#container2" });
    v2.render();
  },

  // Handler for the contact route (no parameters)
  contact: function () {
    // Create and render the contact view in the #container3 element
    var v3 = new view3({ el: "#container3" });
    v3.render();
  },
});

/**
 * Create an instance of the router and start Backbone history
 * 
 * Example URLs that would trigger the routes:
 * - http://yourapp.com/#home/user123 → calls home("user123")
 * - http://yourapp.com/#about/john/smith → calls about("john", "smith")
 * - http://yourapp.com/#contact → calls contact()
 */
var r = new router();
Backbone.history.start(); // Starts monitoring hashchange events and dispatches routes
