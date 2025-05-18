//=============================================================================
// BACKBONE.JS COLLECTION EXAMPLE
//=============================================================================

//=============================================================================
// WHAT IS A COLLECTION?
//=============================================================================
// Collection is a group of models (similar to an array of model instances).
// Collection is a special type of model which contains multiple models and
// can be used to perform operations on multiple models at once.
// Collections help manage a group of related models, providing helper functions
// for common operations like sorting, filtering, and iterating over models.

//=============================================================================
// OPERATIONS PERFORMED ON COLLECTION
//=============================================================================
// 1. Add - Adds model(s) to the collection
// 2. Remove - Removes model(s) from the collection
// 3. Sort - Sorts the models in the collection
// 4. Filter - Filters models based on criteria
// 5. Reset - Replaces all models in the collection
// 6. Fetch - Retrieves models from the server
// 7. Save - Saves all models to the server
// 8. Destroy - Destroys all models in the collection
// 9. Set - Updates the collection with the passed models
// 10. Get - Gets a model by id
// 11. At - Gets a model at a specific index
// 12. First - Gets the first model
// 13. Last - Gets the last model
// 14. Rest - Gets all models except the first n models
// 15. Shift - Removes and returns the first model
// 16. Pop - Removes and returns the last model
// 17. Push - Adds one or more models to the end
// 18. Unshift - Adds one or more models to the beginning
// 19. IndexOf - Returns the index of a model
// 20. LastIndexOf - Returns the last index of a model
// 21. Contains - Checks if a model is in the collection
// 22. Where - Returns models matching attributes
// 23. Pluck - Extracts an attribute from each model
// 24. Max - Returns the model with the maximum value of an attribute
// 25. Min - Returns the model with the minimum value of an attribute
// 26. Count - Returns the number of models matching criteria
// 27. Size - Returns the number of models in the collection
// 28. Length - Property that returns the number of models
// 29. ToJSON - Converts the collection to a JSON object

//=============================================================================
// CREATING A MODEL
//=============================================================================
// Define a Team model using Backbone.Model.extend()
// This creates a new model class that we can instantiate
var Team = Backbone.Model.extend();

// Create two instances of the Team model with different attributes
// player1 represents Virat Kohli with jersey number 18
var player1 = new Team({
  name: "Virat Kohli",
  jerseyNo: 18,
});

// player2 represents Rohit Sharma with jersey number 45
var player2 = new Team({
  name: "Rohit Sharma",
  jerseyNo: 45,
});

// Output the JSON representation of player1
console.log(player1.toJSON());
// Expected output: {"name":"Virat Kohli","jerseyNo":18}

// Output the JSON representation of player2
console.log(player2.toJSON());
// Expected output: {"name":"Rohit Sharma","jerseyNo":45}

//=============================================================================
// CREATING A COLLECTION
//=============================================================================
// Alternative way to create a collection (commented out)
//var players = new Backbone.Collection([player1, player2]);

// Define a custom collection class by extending Backbone.Collection
var players = Backbone.Collection.extend();

// Create an instance of the players collection with initial models
var playersCollection = new players([player1, player2]);

// Output the JSON representation of the entire collection
console.log(playersCollection.toJSON());
// Expected output: [{"name":"Virat Kohli","jerseyNo":18},{"name":"Rohit Sharma","jerseyNo":45}]

//=============================================================================
// COLLECTION OPERATIONS EXAMPLES
//=============================================================================

// 1. ADD - Adds a new model to the collection
// Create a new Team model instance and add it to the collection
playersCollection.add(new Team({ name: "Bittu", jerseyNo: 17 }));
// Output the updated collection
console.log(playersCollection.toJSON());
// Expected output: [{"name":"Virat Kohli","jerseyNo":18},{"name":"Rohit Sharma","jerseyNo":45},{"name":"Bittu","jerseyNo":17}]

// 2. REMOVE - Removes a model from the collection
// Remove player1 (Virat Kohli) from the collection
playersCollection.remove(player1);
// Output the updated collecti on
console.log(playersCollection.toJSON());
// Expected output: [{"name":"Rohit Sharma","jerseyNo":45},{"name":"Bittu","jerseyNo":17}]

// 3. UNSHIFT - Adds a model to the beginning of the collection
// Add a new Team model to the beginning of the collection
playersCollection.unshift(new Team({ name: "Bittu", jerseyNo: 17 }));
// Output the updated collection
console.log(playersCollection.toJSON());
// Expected output: [{"name":"Bittu","jerseyNo":17},{"name":"Rohit Sharma","jerseyNo":45},{"name":"Bittu","jerseyNo":17}]

// 4. POP - Removes and returns the last model in the collection
// Remove the last model (Bittu with jerseyNo 17) from the collection
playersCollection.pop();
// Output the updated collection
console.log(playersCollection.toJSON());
// Expected output: [{"name":"Bittu","jerseyNo":17},{"name":"Rohit Sharma","jerseyNo":45}]

// 5. PUSH - Adds a model to the end of the collection
// Add a new Team model to the end of the collection
playersCollection.push(new Team({ name: "Bittu", jerseyNo: 17 }));
// Output the updated collection
console.log(playersCollection.toJSON());
// Expected output: [{"name":"Bittu","jerseyNo":17},{"name":"Rohit Sharma","jerseyNo":45},{"name":"Bittu","jerseyNo":17}]

// 6. SHIFT - Removes and returns the first model in the collection
// Remove the first model (Bittu with jerseyNo 17) from the collection
playersCollection.shift();
// If we were to log the collection now, it would show:
// [{"name":"Rohit Sharma","jerseyNo":45},{"name":"Bittu","jerseyNo":17}]

//7. SIZE - Returns the number of models in the collection
// Output the size of the collection
console.log(playersCollection.size());
// Expected output: 2

//8. LENGTH - Property that returns the number of models
// Output the length of the collection
console.log(playersCollection.length);
// Expected output: 2

//9. Where - Returns models matching attributes
// Find players with jerseyNo 17
var jersey17 = playersCollection.where({ jerseyNo: 17 });
// Output the players with jerseyNo 17
console.log(jersey17);
// Expected output: [{"name":"Bittu","jerseyNo":17},{"name":"Bittu","jerseyNo":17}]

//10. Each - Iterates over each model in the collection
// Iterate over each model in the collection and output its attributes
playersCollection.each(function (player) {
  console.log(player.attributes);
});
// Expected output:
// {name: "Bittu", jerseyNo: 17}
// {name: "Rohit Sharma", jerseyNo: 45}
// {name: "Bittu", jerseyNo: 17}

//11. Filter - Filters models based on criteria
// Filter players with jerseyNo greater than 17
var jerseyGreaterThan17 = playersCollection.filter(function (player) {
  return player.get("jerseyNo") > 17;
});
// Output the filtered players
console.log(jerseyGreaterThan17);
// Expected output: [{"name":"Rohit Sharma","jerseyNo":45}]
