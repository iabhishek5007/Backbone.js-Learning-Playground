// Backbone.js Data Change Events Example

/**
 * Creating a Backbone Model with event binding
 * Backbone provides a rich events API that allows models to trigger and respond to events
 * This example demonstrates how to listen for data changes in a model
 */
var students = Backbone.Model.extend({
  initialize: function () {
    // The initialize function is the perfect place to set up event listeners
    
    // This event listener will be triggered whenever any attribute in the model changes
    // The bind() method is an alias for on() in newer versions of Backbone
    this.bind("change", function () {
      console.log("student model changed");
    });

    /**
     * Example of listening for changes to a specific attribute (commented out)
     * This would only trigger when the 'name' attribute changes
     */
    // this.bind("change:name", function () {
    //   console.log("student name changed");
    // });

    /**
     * Example of listening for changes to multiple specific attributes (commented out)
     * This would trigger when either 'name' or 'age' attributes change
     */
    // this.bind("change:name change:age", function () {
    //   console.log("student name or age changed");
    // });

    /**
     * Another example of listening for any attribute change (commented out)
     * This is redundant with the first event listener above
     */
    // this.bind("change", function () {
    //   console.log("student model changed");
    // });
  },
});

/**
 * Creating a new instance of the students model with initial attributes
 * 
 * Expected behavior:
 * - The model is created with these initial attributes
 * - No change events are triggered during initialization
 * 
 * If we later call student.set() to change any attribute, the "change" event
 * will be triggered and "student model changed" will be logged to the console
 * 
 * Example:
 * student.set("age", 22); // This would trigger the "change" event
 * student.set({name: "John"}); // This would also trigger the "change" event
 */
var student = new students({
  name: "Abhishek",
  age: 21,
  address: "Bihar",
});
