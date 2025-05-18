/**
 * Backbone.js Event Handler Example
 * 
 * This file demonstrates how to handle DOM events in Backbone.js views.
 * Backbone provides a declarative way to bind DOM events to view methods.
 */

/**
 * Define a simple model for a song
 */
var firstModel = Backbone.Model.extend();

/**
 * Create a new instance of the model with initial data
 */
var fm = new firstModel({
  Title: "Juggnuu",
  artist: "Badshah",
});

/**
 * Define a view for displaying and interacting with a song
 */
var SongView = Backbone.View.extend({
  // Specify the DOM element to attach this view to
  el: "#container",
  
  // Called when the view is first created
  initialize: function () {
    // Render the view immediately upon initialization
    this.render();
  },
  
  /**
   * The events hash maps DOM events to handler methods
   * Format: "event selector": "methodName"
   * 
   * This automatically sets up event listeners when the view is created
   */
  events: {
    "click .btnPlay": "onClickPlay", // When .btnPlay is clicked, call onClickPlay
    "click .btnStop": "onCLickStop", // When .btnStop is clicked, call onCLickStop
  },
  
  // Handler for the play button click
  onClickPlay: function () {
    alert("Playing");
  },
  
  // Handler for the stop button click
  onCLickStop: function (e) {
    // Prevent the event from bubbling up to parent elements
    e.stopPropagation(); // This prevents any parent handlers from being triggered
    alert("Play Stopped");
  },
  
  // Render the view with the model data and interactive buttons
  render: function () {
    // Get the title from the model and add play/stop buttons
    this.$el.html(
      this.model.get("Title") +
        " " +
        "<button class='btnPlay'>Play</button>" +
        "<button class='btnStop'>Stop</button>"
    );
  },
});

/**
 * Create a new instance of the SongView
 * Pass the model so the view can access its data
 * 
 * Expected Output:
 * - The #container element will display "Juggnuu" followed by Play and Stop buttons
 * - Clicking the Play button will show an alert with "Playing"
 * - Clicking the Stop button will show an alert with "Play Stopped"
 */
var song = new SongView({
  model: fm,
});
