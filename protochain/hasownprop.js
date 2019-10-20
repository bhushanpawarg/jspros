// still the foo from above
for (var i in foo) {
  if (foo.hasOwnProperty(i)) {
    console.log(i);
  }
}

// Poisoning Object.prototype
Object.prototype.bar = 1;

var foo = { moo: 2 };
for (var i in foo) {
  console.log(i); // prints both bar and moo
}

var foo = {
  hasOwnProperty: function() {
    return false;
  },
  bar: "Here be dragons"
};

foo.hasOwnProperty("bar"); // always returns false

// Use another Object's hasOwnProperty and call it with 'this' set to foo
({}.hasOwnProperty.call(foo, "bar")); // true

// It's also possible to use hasOwnProperty from the Object
// prototype for this purpose
Object.prototype.hasOwnProperty.call(foo, "bar"); // true
