function convertFirstCharactersToCapitalCase(string) {
  var firstSixChars = string.slice(0, 6);
  var remainingChars = string.slice(6);
  var convertedString = firstSixChars.toUpperCase() + remainingChars;
  return convertedString;
}
var inputString = "tic tac toe is a fun game";
var result = convertFirstCharactersToCapitalCase(inputString);
console.log("Converted String:", result);
