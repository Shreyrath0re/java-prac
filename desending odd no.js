var n = parseInt(prompt("enter a positive number:"));
function printOddNumbersDescending(n) {
  for (let i = n * 2 - 1; i >= 1; i -= 2) {
    console.log(i);
  }
}
printOddNumbersDescending(n);
