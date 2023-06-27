function reverseStringWordWise(str) {
  var words = str.split(" ");
  var reversedWords = words.reverse();
  var reversedString = reversedWords.join(" ");
  return reversedString;
}
var inputString = "Welcome to NeoG Camp";
var result = reverseStringWordWise(inputString);
console.log("Reversed String:", result);
