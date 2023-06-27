var inputString = prompt("Enter a string:");
var c1 = prompt("Enter the character to replace:");
var c2 = prompt("Enter the replacement character:");
function replaceCharacters(S, c1, c2) {
  var replacedString = "";
  for (var i = 0; i < S.length; i++) {
    if (S[i] === c1) {
      replacedString += c2;
    } else {
      replacedString += S[i];
    }
  }
  return replacedString;
}
var result = replaceCharacters(inputString, c1, c2);
console.log("Replaced String:", result);