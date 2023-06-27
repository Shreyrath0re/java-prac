function isPalindrome(string) {
  var alphanumericString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  var reversedString = alphanumericString.split('').reverse().join('');
  return alphanumericString === reversedString;
}
var inputString = prompt("Enter a string:");
var result = isPalindrome(inputString);
console.log("Is Palindrome:", result);
