function printAllSubstrings(str) {
  var substrings = [];
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j <= str.length; j++) {
      var substring = str.slice(i, j);
      substrings.push(substring);
    }
  }
  return substrings;
}
var inputString = prompt("Enter a string:");
var substrings = printAllSubstrings(inputString);

console.log("All Substrings:");
substrings.forEach(function(substring) {
  console.log(substring);
});
