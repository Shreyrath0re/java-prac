function printStarPattern(rows) {
  for (var i = 1; i <= rows; i++) {
    var stars = "";
    for (var j = 1; j <= i; j++) {
      stars += "* ";
    }
    console.log(stars);
  }
}
var numRows = 5;
printStarPattern(numRows);
