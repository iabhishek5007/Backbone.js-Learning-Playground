/**
 * Backbone.js Advanced Router Example with Event Handling
 * 
 * This file demonstrates a more complex routing example with:
 * 1. Multiple views for different routes
 * 2. A catch-all default route
 * 3. Event-based navigation using data attributes
 * 4. Programmatic navigation with router.navigate()
 */

/**
 * Define a view for Pizza orders
 */
var pizza = Backbone.View.extend({
  render: function () {
    // Display a message when pizza is ordered
    this.$el.html("You ordered Pizza");
  },
});

/**
 * Define a view for Burger orders
 */
var burger = Backbone.View.extend({
  render: function () {
    // Display a message when burger is ordered
    this.$el.html("You ordered Burger");
  },
});

/**
 * Define a view for Momos orders
 */
var momos = Backbone.View.extend({
  render: function () {
    // Display a message when momos are ordered
    this.$el.html("You ordered Momos");
  },
});

//----------------------------------------------------------------------

/**
 * Define a Router to handle different food order routes
 */
var router = Backbone.Router.extend({
  // Define route patterns and their corresponding handler methods
  routes: {
    firstOrder: "pizzaOrder",   // #firstOrder route
    secondOrder: "burgerOrder", // #secondOrder route
    thirdOrder: "momosOrder",   // #thirdOrder route
    "*default": "default",     // Catch-all route for any unmatched routes
  },

  // Handler for the pizza order route
  pizzaOrder: function () {
    // Create and render the pizza view in the #container element
    var pizzaView = new pizza({ el: "#container" });
    pizzaView.render();
  },

  // Handler for the burger order route
  burgerOrder: function () {
    // Create and render the burger view in the #container element
    var burgerView = new burger({
      el: "#container",
    });
    burgerView.render();
  },

  // Handler for the momos order route
  momosOrder: function () {
    // Create and render the momos view in the #container element
    var momosView = new momos({
      el: "#container",
    });
    momosView.render();
  },

  // Handler for any unmatched routes
  default: function () {
    // Show an alert if the user navigates to an invalid route
    alert("Please select a valid option");
  },
});

/**
 * Create an instance of the router
 */
var router = new router();

/**
 * Start Backbone history to begin monitoring hashchange events
 */
Backbone.history.start();

/**
 * Define a view to handle navigation events from the food court menu
 * This demonstrates how to trigger route changes from user interactions
 */
var foodCourt = Backbone.View.extend({
  // Define events for this view
  events: {
    click: "onClick", // Handle any click within this view's element
  },

  // Event handler for clicks
  onClick: function (e) {
    // Get the clicked element using jQuery
    var $li = $(e.target);
    
    /**
     * Navigate to a new route programmatically
     * 
     * router.navigate() changes the URL fragment
     * The { trigger: true } option tells Backbone to execute the route handler
     * 
     * This gets the data-url attribute from the clicked element
     * and uses it as the route to navigate to
     */
    router.navigate($li.attr("data-url"), { trigger: true });
  },
});

/**
 * Create an instance of the food court view
 * 
 * Expected HTML structure (from index.html):
 * <nav id="orderNav">
 *   <ul>
 *     <li data-url="firstOrder">First Order</li>
 *     <li data-url="secondOrder">Second Order</li>
 *     <li data-url="thirdOrder">Third Order</li>
 *   </ul>
 * </nav>
 * 
 * Expected Behavior:
 * 1. When a user clicks on "First Order", the URL changes to #firstOrder
 *    and the pizzaOrder() handler is called, displaying "You ordered Pizza"
 * 2. When a user clicks on "Second Order", the URL changes to #secondOrder
 *    and the burgerOrder() handler is called, displaying "You ordered Burger"
 * 3. When a user clicks on "Third Order", the URL changes to #thirdOrder
 *    and the momosOrder() handler is called, displaying "You ordered Momos"
 */
var foodCourtView = new foodCourt({
  el: "#orderNav", // Attach to the navigation menu element
});
