// Regular Function.
function Greet() {
    console.log("Welcome to GFG!");
}
Greet();



// IIFE creation and execution.
(function() { console.log("Welcome to GFG!"); })();


// IIFE is defined within a function, will only be immediately invoked if we call the Parent Function.
function myFunc(){
    console.log("Welcome to");
    (function() { console.log("GeeksForGeeks!"); })();
    console.log("Hi There!");
}
myFunc();