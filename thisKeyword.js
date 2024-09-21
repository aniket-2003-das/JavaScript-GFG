const person = {
    name: 'John',
    greet: function() {
        console.log(this.name); // `this` refers to the person object
    }
};
person.greet(); // Output: 'John'

