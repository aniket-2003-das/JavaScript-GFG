// Assignment 7: Write a javaScript function to protect email addresses. 
// The part before ‘@’ should be clipped into half followed by 3 dots (...).

let emailId = "psakari123@gmail.com";

function protectEmail(email) {
    let secureEmail = "";
    let arr = email.split("@");
    secureEmail = arr[0].substring(0, arr[0].length / 2) + "...@" + arr[1];

    return secureEmail;
}

const protectedEmail = protectEmail(emailId);
console.log(emailId);
console.log(protectedEmail);