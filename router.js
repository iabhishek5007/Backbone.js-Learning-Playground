/**
 * Backbone.js Router Example
 * 
 * This file demonstrates how to use Backbone's Router to create a simple
 * single-page application with multiple views and routes.
 */

/**
 * Define a view for the Home page
 */
var homeView = Backbone.View.extend({
  // Attach this view to the #container element
  el: "#container",
  
  // Initialize the view and render it immediately
  initialize: function () {
    this.render();
  },
  
  // Render the home page content
  render: function () {
    this.$el.html("This is home page");
  },
});

/**
 * Define a view for the About page
 */
var aboutView = Backbone.View.extend({
  // Attach this view to the #container2 element
  el: "#container2",
  
  // Initialize the view and render it immediately
  initialize: function () {
    this.render();
  },
  
  // Render the about page content
  render: function () {
    this.$el.html("This is About Page");
  },
});

/**
 * Define a view for the Contact page
 */
var contactView = Backbone.View.extend({
  // Attach this view to the #container3 element
  el: "#container3",
  
  // Initialize the view and render it immediately
  initialize: function () {
    this.render();
  },
  
  // Render the contact page content
  render: function () {
    this.$el.html("This is Contact Page");
  },
});

// ------------------------------------------------------------------------------------------------

/**
 * Define a Router to handle navigation between different views
 */
var routeExample = Backbone.Router.extend({
  // Define route patterns and their corresponding handler methods
  routes: {
    "": "home",         // Default route (empty URL fragment)
    home: "home",       // #home route
    about: "about",     // #about route
    contact: "contact", // #contact route
  },
  
  // Handler for the home route
  home: function () {
    // Create a new instance of the home view, which will render itself
    var home = new homeView();
  },
  
  // Handler for the about route
  about: function () {
    // Create a new instance of the about view, which will render itself
    var about = new aboutView();
  },
  
  // Handler for the contact route
  contact: function () {
    // Create a new instance of the contact view, which will render itself
    var contact = new contactView();
  },
});

/**
 * Create an instance of the router
 */
var router = new routeExample();

/**
 * Start the Backbone history, which will begin monitoring hashchange events
 * and dispatching routes
 * 
 * Example URLs that would trigger the routes:
 * - http://yourapp.com/ or http://yourapp.com/# → calls home()
 * - http://yourapp.com/#home → calls home()
 * - http://yourapp.com/#about → calls about()
 * - http://yourapp.com/#contact → calls contact()
 */
Backbone.history.start();

/**
 * Document ready handler (empty in this example)
 * This could be used for additional initialization when the DOM is ready
 */
$(document).ready(function () {});
