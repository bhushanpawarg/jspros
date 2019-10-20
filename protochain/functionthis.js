// 1st Way
Foo.method = function() {
  var test = function() {
    // this now refers to Foo
  }.bind(this);
  test();
};

// 2 way to bind this inside test function as it will not have access to Foo

Foo.method = function() {
  var self = this;
  function test() {
    // Use self instead of this here
  }
  test();
};

//self is just a normal variable name, but it is commonly used
//for the reference to an outer this.In combination with closures,
//it can also be used to pass this values around.

//Assigning Methods
var test = someObject.methodTest;
test();
//Due to the first case, test now acts like a plain function call;
//therefore, this inside it will no longer refer to someObject.

function Foo() {}
Foo.prototype.method = function() {};

function Bar() {}
Bar.prototype = Foo.prototype;

new Bar().method();
//When method gets called on an instance of Bar,
//this will now refer to that very instance.
