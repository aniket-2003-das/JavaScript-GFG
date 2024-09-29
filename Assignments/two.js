// Assignment 2: Create an input field and take string input in it from the user. 
// Render the input value on the viewport. 
// Create a button and on click of the button reverse the input and display it on the view.

const input = document.getElementById("input");
const button = document.getElementById("button");
const inputValue = document.getElementById("input-value");
const mirroedValue = document.getElementById("mirror-value");

input.addEventListener("keyup", () => {
    inputValue.innerText = input.value;
});
        
button.addEventListener("click", () => {
    if (input.value.length > 0) {
        mirroedValue.innerText = input.value.split("").reverse().join("");
    } 
    else {
        mirroedValue.innerText = "";
    }
});