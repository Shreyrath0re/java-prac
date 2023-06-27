function maskString(string) {
  var maskedString = '';
  var lastFourChars = string.slice(-4);
  for (var i = 0; i < string.length - 4; i++) {
    maskedString += '#';
  }
  return maskedString + lastFourChars;
}
var inputString = "5565534276455423";
var result = maskString(inputString);
console.log("Masked String:", result);
