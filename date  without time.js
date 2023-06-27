function removeTimeFromDate(dateString) {
  var dateOnly = dateString.split(',')[0];
  return dateOnly.trim();
}
var inputDate = "Wed April 15, 7pm";
var result = removeTimeFromDate(inputDate);
console.log("Date without time:", result);
