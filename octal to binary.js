function octalToDecimal(octalNumber) {
  let decimalNumber = 0;
  let power = 0;
  while (octalNumber > 0) {
    const digit = octalNumber % 10;
    decimalNumber += digit * Math.pow(8, power);
    octalNumber = Math.floor(octalNumber / 10);
    power++;
  }
  return decimalNumber;
}
const inputOctal = 100;
const decimal = octalToDecimal(inputOctal);
console.log("Octal of Given Number = " + decimal + " in decimal");
