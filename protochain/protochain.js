function Foo() {
    this.value = 42;
}
Foo.prototype = {
    method: function() {}
};

function Bar() {}

// Set Bar's prototype to a new instance of Foo
Bar.prototype = new Foo();
Bar.prototype.foo = 'Hello World';

// Make sure to list Bar as the actual constructor
Bar.prototype.constructor = Bar;

var test = new Bar(); // create a new bar instance

// The resulting prototype chain
test [instance of Bar]
    Bar.prototype [instance of Foo]
        { foo: 'Hello World' }
        Foo.prototype
            { method: ... }
            Object.prototype
{ toString: ... /* etc. */ }

/*In the code above, the object test will inherit from both 
Bar.prototype and Foo.prototype; hence, it will have access to 
the function method that was defined on Foo. It will also have 
access to the property value of the one Foo instance that is its prototype.
It is important to note that new Bar() does not create a new Foo instance,
but reuses the one assigned to its prototype; thus, all Bar instances will
share the same value property.*/

