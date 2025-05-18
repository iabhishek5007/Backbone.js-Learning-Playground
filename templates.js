/**
 * Backbone.js Templates Example
 * 
 * This file demonstrates how to use templates in Backbone.js views.
 * Templates allow you to separate HTML structure from JavaScript logic,
 * making your code more maintainable and easier to understand.
 * 
 * Backbone.js doesn't have its own templating system but works well with
 * Underscore.js templates (_.template) which are included with Backbone.
 */

var firstView = Backbone.View.extend({
  /**
   * Template options:
   * 
   * 1. Inline template (commented out)
   * This approach defines the template directly in the JavaScript code
   * Useful for simple templates but less maintainable for complex HTML
   */
  // template: _.template("<h1>This is a template example</h1>"),

  /**
   * 2. External template (active)
   * This approach gets the template from an HTML script tag with id="template"
   * Benefits:
   * - Separates HTML from JavaScript
   * - Allows HTML syntax highlighting in editors
   * - Easier to maintain complex templates
   */
  template: _.template($("#template").html()),

  // The DOM element where this view will be rendered
  el: "#container",
  
  // Initialize the view and render it immediately
  initialize: function () {
    this.render();
  },
  
  // Render the view using the template
  render: function () {
    // Apply the template and insert the resulting HTML into the view's element
    this.$el.html(this.template());
  },
});

/**
 * Create a new instance of the view
 * 
 * Expected Output:
 * - The #container element will be filled with the HTML from the #template script tag
 * - Based on index.html, this would include an h1, h2, and paragraph about templates
 * 
 * Note: The template in index.html contains:
 * <h1>Backbone JS Tutorial</h1>
 * <h2>Template</h2>
 * <p>This is external example of template...</p>
 */
var firstView = new firstView();
