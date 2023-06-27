function decimalToBinary(decimalNumber) {
  let binaryNumber = "";
  while (decimalNumber > 0) {
    binaryNumber = (decimalNumber % 2) + binaryNumber;
    decimalNumber = Math.floor(decimalNumber / 2);
  }
  return binaryNumber;
}
const inputDecimal = 116;
const binary = decimalToBinary(inputDecimal);
console.log("Binary of Given Number is = " + binary);
