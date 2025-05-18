// Backbone.js Model Inheritance Example

/**
 * Creating a base Backbone Model
 * This will serve as the parent model that we'll extend later
 */
var kapilSharma = Backbone.Model.extend({
  // Defining a method in the parent model
  show: function () {
    console.log("colorsTV");
  },
});

/**
 * Extending/inheriting from another Backbone model
 * Backbone allows models to inherit from other models using the extend() method
 * This creates a new model class that inherits all properties and methods from the parent
 */
var kapilSharmaShow = kapilSharma.extend(
  // Overriding the show method from the parent model
  {
    show: function () {
      // Calling the parent class method using prototype
      // This demonstrates how to access parent methods when overriding them
      kapilSharma.prototype.show.apply();

      // Adding additional functionality in the child model's method
      console.log("sabTV");
    },
  }
);

/**
 * Creating an instance of the child model
 * This instance will have all properties and methods from both the parent and child models
 */
var k = new kapilSharmaShow();

/**
 * Calling the show method on the child model instance
 * 
 * Expected output in console:
 * > "colorsTV"  (from the parent model's show method)
 * > "sabTV"     (from the child model's show method)
 * 
 * This demonstrates method overriding while still maintaining parent functionality
 */
k.show();
