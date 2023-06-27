function removeSpaces(S) {
  var removedSpacesString = S.replace(/\s+/g, '');
  return removedSpacesString;
}
var inputString = prompt("Enter a string:");
var result = removeSpaces(inputString);
console.log("String with spaces removed:", result);
