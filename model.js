// Backbone.js Model Example

/**
 * Creating a Backbone Model by extending Backbone.Model
 * Models are the basic data object in Backbone.js - they represent a logical piece of data
 * and the logic around it (validation, conversions, computed properties, etc.)
 */
var Tutorial = Backbone.Model.extend({
  // The initialize function is called when a new instance of the model is created
  initialize: function () {
    console.log("Tutorial model initialized");
    // This message will be logged to the console when a new Tutorial model is created
  },
});

/**
 * Creating a new instance of the Tutorial model
 * When this line executes, the initialize function will be called automatically
 *
 * Expected output in console:
 * > "Tutorial model initialized"
 */
var bacbone = new Tutorial();
