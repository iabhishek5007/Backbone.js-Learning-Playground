// Backbone.js Model Validation Example

/**
 * Creating a Backbone Model with validation rules
 * The validate method is automatically called by Backbone when set() or save() is called
 * If validation fails, the attributes are not set on the model and false is returned
 */
var Tutorial = Backbone.Model.extend({
  // The validate function receives the attributes being set/saved
  validate: function (attrs) {
    // Check if rating is greater than 5
    if (attrs.rating > 5) {
      return "Rating should be less than 5"; // Return error message if validation fails
    }
    // Check if name length is less than 5 characters
    if (attrs.name.length < 5) {
      return "Name should be atleast 5 characters"; // Return error message if validation fails
    }
    // If no return value, validation passes
  },
});

/**
 * Creating a new instance of the Tutorial model
 */
var backbone = new Tutorial();

/**
 * Setting attributes on the model
 * These values will pass validation:
 * - rating: 4 (less than or equal to 5)
 * - name: "Backbone" (length is 8, which is >= 5)
 * 
 * Expected behavior:
 * - The attributes will be set successfully
 * - No validation errors will occur
 * 
 * If we had tried to set invalid values like:
 * backbone.set({ rating: 6, name: "Back" });
 * The set would fail and return false
 */
backbone.set({
  rating: 4,
  name: "Backbone",
});
