function countAndPrintMostRepeatedCharacter(str) {
  var charCounts = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    charCounts[char] = (charCounts[char] || 0) + 1;
  }
  var mostRepeatedChar = '';
  var highestCount = 0;
  for (var char in charCounts) {
    if (charCounts[char] > highestCount) {
      mostRepeatedChar = char;
      highestCount = charCounts[char];
    }
  }
  console.log("Character Counts:", charCounts);
  console.log("Most Repeated Character:", mostRepeatedChar);
}
var inputString = "abracadabra";
countAndPrintMostRepeatedCharacter(inputString);
