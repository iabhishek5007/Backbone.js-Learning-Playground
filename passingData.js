/**
 * Backbone.js Data Passing Example
 * 
 * This file demonstrates how to pass data from a Backbone Model to a View.
 * Models contain the data and business logic, while Views handle the presentation.
 * This separation follows the MVC (Model-View-Controller) pattern.
 */

/**
 * Define a simple Player model
 * Models store data and provide methods for data manipulation
 */
var Player = Backbone.Model.extend();

/**
 * Create a new Player instance with initial attributes
 * The attributes are passed as an object to the constructor
 */
var player = new Player({
  name: "John",
  age: 22,
});

/**
 * Define a PlayerView that will display the Player model data
 */
var PlayerView = Backbone.View.extend({
  render: function () {
    // Log a message to confirm the render method is called
    console.log("Working");
    
    // First set some generic text (this will be immediately overwritten)
    this.$el.html("Passing Data to View");
    
    // Then replace the content with the player's name from the model
    // this.model refers to the model passed to the view when instantiated
    // .get() is used to retrieve specific attributes from the model
    this.$el.html(this.model.get("name"));
  },
});

/**
 * Create a new PlayerView instance
 * We pass two important parameters:
 * - el: The DOM element where the view will be rendered
 * - model: The model instance that contains the data for this view
 */
var playerView = new PlayerView({
  el: "#container",
  model: player, // Pass the player model to the view
});

/**
 * Call the render method to display the view
 * 
 * Expected Output:
 * - "Working" will be logged to the console
 * - The #container element will display "John" (the player's name)
 */
playerView.render();

/**
 * Additional examples (not included in this code):
 * 
 * // Update the model data
 * player.set("name", "Mike");
 * 
 * // Re-render the view to reflect the changes
 * playerView.render();
 * 
 * // The #container would now display "Mike"
 */
