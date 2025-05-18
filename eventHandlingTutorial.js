/**
 * Backbone.js Event Handling Tutorial
 * 
 * This file demonstrates how to handle DOM events in Backbone.js views
 * using a template and event binding.
 */

/**
 * Define a view that handles button click events
 */
var firstView = Backbone.View.extend({
  /**
   * The events hash maps DOM events to handler methods
   * Format: "event selector": "methodName"
   * 
   * In this case, when an element with id="btnEvent" is clicked,
   * the onClickButton1 method will be called
   */
  events: {
    "click #btnEvent": "onClickButton1",
  },
  
  /**
   * Event handler for the button click
   * This method will be called when the button is clicked
   */
  onClickButton1: function () {
    // Replace the entire content of the view with a welcome message
    this.$el.html("welcome to Backbone JS");
  },
  
  /**
   * Use an external template from the HTML document
   * The template is defined in a script tag with id="eventConatiner"
   * In index.html, this template contains a button with id="btnEvent"
   */
  template: _.template($("#eventConatiner").html()),
  
  /**
   * Note: There are two el properties defined here, which is incorrect.
   * The second one (#container2) will override the first one.
   * In a real application, you should only have one el property.
   */
  el: "#container",  // This will be overridden
  el: "#container2", // This will be used
  
  /**
   * Initialize the view and render it immediately
   */
  initialize: function () {
    this.render();
  },
  
  /**
   * Render the view using the template
   */
  render: function () {
    // Apply the template and insert the resulting HTML into the view's element
    this.$el.html(this.template());
  },
});

/**
 * Create a new instance of the view
 * 
 * Expected Output:
 * 1. Initial state:
 *    - The #container2 element will contain a button with the text "Click Me"
 *    - This comes from the #eventConatiner template in index.html
 * 
 * 2. After clicking the button:
 *    - The entire content will be replaced with "welcome to Backbone JS"
 *    - The button will no longer be visible
 */
var fv = new firstView();
