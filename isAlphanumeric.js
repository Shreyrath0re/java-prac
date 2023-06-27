function isAlphanumeric (string){
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    return alphanumericRegex.test(string);
}
const inputString = prompt("enter a string:");
const isStringAlphanumeric = isAlphanumeric(inputString);
console.log(isStringAlphanumeric);