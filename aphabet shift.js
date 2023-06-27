function encodeString(str, shift) {
  var encodedString = '';
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    var code = str.charCodeAt(i);
    if (code >= 97 && code <= 122) {
      var shiftedCode = ((code - 97 + shift) % 26) + 97;
      char = String.fromCharCode(shiftedCode);
    }
    if (code >= 65 && code <= 90) {
      var shiftedCode = ((code - 65 + shift) % 26) + 65;
      char = String.fromCharCode(shiftedCode);
    }
    encodedString += char;
  }
  return encodedString;
}
var str = 'neogcamp';
var shift = 2;
var encodedString = encodeString(str, shift);
console.log(encodedString);
