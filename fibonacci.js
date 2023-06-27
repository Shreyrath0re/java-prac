function generateFibonacciSeries(n) {
  var fibonacciSeries = [0, 1]; 
  for (var i = 2; i < n; i++) {
    var nextNumber = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    fibonacciSeries.push(nextNumber); 
  }
  return fibonacciSeries;
}
var length = parseInt(prompt("Enter the length of the Fibonacci series:"));
if (isNaN(length) || length < 1) {
  console.log("Invalid input. Please enter a valid positive integer.");
} else {
  var fibonacciSeries = generateFibonacciSeries(length);
  console.log(fibonacciSeries);
}
