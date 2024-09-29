// Assignment 8: Given an input string S that contains multiple words
// you need to remove all the spaces present in the input string. 
// There can be multiple spaces present after any word’

let message = "     I am      a     Web    Developer   ";

function filterString(string) {
    let targetString = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
        targetString += string[i];
        }
    }
    return targetString;
}

const filteredString = filterString(message);
console.log(filteredString);

