// Backbone.js Model Operations Example

/**
 * Creating a basic Backbone Model without any properties
 */
var Tutorial = Backbone.Model.extend();

/**
 * Example of creating a model with initial attributes (commented out)
 * This would create a model with name, author, and rating attributes
 */
// var bacbone = new Tutorial({
//   name: "Backbone",
//   author: "Jeremy Ashkenas",
//   rating: 5,
// });

/**
 * Creating a model with default values
 * Default values are used when a model is created without specifying those attributes
 */
var Tutorial = Backbone.Model.extend({
  defaults: {
    platform: "Web", // This attribute will be set by default
  },
});

/**
 * Creating a new instance of the Tutorial model
 * Since we defined a default value for 'platform', this model will have:
 * { platform: "Web" }
 */
var backbone = new Tutorial();

/**
 * Setting a single attribute (commented out example)
 * This would set only the 'name' attribute
 */
// backbone.set("name", "Backbone");

/**
 * Setting multiple attributes at once using an object
 * This is the preferred way to set multiple attributes
 * 
 * Expected result: The model now has these attributes:
 * { platform: "Web", name: "Backbone", author: "Jeremy Ashkenas", rating: 5 }
 */
backbone.set({
  name: "Backbone",
  author: "Jeremy Ashkenas",
  rating: 5,
});

/**
 * Getting individual attribute values
 * 
 * Expected outputs:
 * backbone.get("name") → "Backbone"
 * backbone.get("author") → "Jeremy Ashkenas"
 * backbone.get("rating") → 5
 */
backbone.get("name");
backbone.get("author");
backbone.get("rating");

/**
 * Getting all attributes as a JSON object
 * 
 * Expected output:
 * { platform: "Web", name: "Backbone", author: "Jeremy Ashkenas", rating: 5 }
 */
backbone.toJSON();

/**
 * Removing an attribute from the model
 * This removes the 'rating' attribute completely
 * 
 * Expected result: The model no longer has a 'rating' attribute
 */
backbone.unset("rating");

/**
 * Checking if an attribute exists on the model
 * Returns true if the attribute exists, false otherwise
 * 
 * Expected output: false (since we just removed it)
 */
backbone.has("rating");

/**
 * Checking if multiple attributes exist
 * 
 * Expected outputs:
 * backbone.has("name") → true
 * backbone.has("author") → true
 * backbone.has("rating") → false (since we removed it)
 */
backbone.has("name");
backbone.has("author");
backbone.has("rating");

/**
 * Clearing all attributes from the model (commented out)
 * This would reset the model to an empty state
 */
//backbone.clear();
