function isPalindrome(inputString) {
    let arr = inputString.split("");
    let reversedArr = arr.reverse();
    let reversedString = reversedArr.join("");
    return inputString === reversedString;
}

let inputString = "madam";
console.log(isPalindrome(inputString)); // true

inputString = "hello";
console.log(isPalindrome(inputString)); // false



function func() { 
    var a = [ 1, 2, 3, 4, 5, 6 ]; 
    console.log(a.join()); 
    console.log(a.join('')); 
}  
func(); 