/**
 * Backbone.js Custom Events Example
 * 
 * This file demonstrates how to use Backbone's Events system with regular JavaScript objects.
 * Backbone.Events is a module that can be mixed into any object to provide custom event handling.
 */

/**
 * Create a regular JavaScript object with properties and a method
 */
var person = {
  name: "John",
  age: 22,
  // Method that will trigger a custom event
  test: function () {
    // The trigger method will be available after extending with Backbone.Events
    this.trigger("change");
  },
};

/**
 * Extend the person object with Backbone.Events functionality
 * 
 * _.extend() is an Underscore.js utility that copies properties from one object to another
 * This adds event methods like .on(), .off(), .trigger(), .listenTo(), etc. to the person object
 */
_.extend(person, Backbone.Events);

/**
 * Bind an event handler to the "change" event
 * 
 * The .on() method attaches an event handler that will be called whenever the event is triggered
 * First parameter: event name
 * Second parameter: callback function to execute when the event occurs
 */
person.on("change", function () {
  console.log("Custom Event Fired");
});

/**
 * Call the test method which triggers the "change" event
 * 
 * Expected Output:
 * - "Custom Event Fired" will be logged to the console
 */
person.test();

/**
 * Additional examples (not included in this code):
 * 
 * // Trigger an event directly
 * person.trigger("customEvent");
 * 
 * // Remove an event handler
 * person.off("change");
 * 
 * // Bind multiple events at once
 * person.on({
 *   "change": function() { console.log("Changed"); },
 *   "customEvent": function() { console.log("Custom"); }
 * });
 */
