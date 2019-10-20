var menuArray = [
  { name: "deluxe", cost: 3.1 },
  { name: "special", cost: 2.0 },
  { name: "cheeseburger", cost: 1.75 },
  { name: "regular hamburger", cost: 1.4 },
  { name: "fries", cost: 1.75 },
  { name: "shakes", cost: 2.5 },
  { name: "milk", cost: 1.25 },
  { name: "small soda", cost: 1.4 },
  { name: "medium soda", cost: 1.7 },
  { name: "large soda", cost: 1.9 },
  { name: "rootbeer float", cost: 2.5 },
  { name: "coffee", cost: 1.25 },
  { name: "hot chocolate", cost: 1.25 },
  { name: "ice cream sundae", cost: 2.3 },
  { name: "kid cone", cost: 1.3 },
  { name: "single cone", cost: 1.9 },
  { name: "double cone", cost: 2.8 },
  { name: "onions", cost: 0.05 },
  { name: "ketchup", cost: 0.05 },
  { name: "tartar sauce", cost: 0.05 }
];

/* 
  arrays of menu item names and costs, to be used as needed
*/

var allItemsNames = menuArray.map(function(menuName) {
  return menuName.name;
});

var allItemsCost = menuArray.map(function(menuCost) {
  return menuCost.cost.toFixed(2);
});
