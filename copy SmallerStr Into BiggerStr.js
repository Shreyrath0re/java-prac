function copySmallerStringIntoBiggerString(string1, string2) {
  var biggerString = string1.length >= string2.length ? string1 : string2;
  var smallerString = string1.length < string2.length ? string1 : string2;
  return biggerString.slice(0, smallerString.length) + smallerString;
}
var string1 = prompt("Enter the first string:");
var string2 = prompt("Enter the second string:");
var result = copySmallerStringIntoBiggerString(string1, string2);
console.log("Result:", result);
