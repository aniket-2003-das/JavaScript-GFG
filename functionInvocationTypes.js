// function invocation
function doSomething() {
    // do something here
}
doSomething(); 


// Method Invocation
// Functions, when defined as fields or properties of objects, are referred to as methods. 
let person = {
    name : "John",
    age : 31,
    logInfo : function() {
             console.log(this.name + " is " + this.age + " years old ");
        }
}
// logs John is 31 years old
person.logInfo();                           


// Constructor invocation
// Constructor invocation is performed when new keyword is followed by an function name.
// A set of opening and closing parentheses(with or without arguments). For example:
let person1= new People('John', 21);


