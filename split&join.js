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
