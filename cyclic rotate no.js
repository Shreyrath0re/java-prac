function cyclicallyRotateNumber(number, rotations) {
  let numString = number.toString();
  let length = numString.length;
  rotations = rotations % length;
  let rotatedNumber = numString.slice(rotations) + numString.slice(0, rotations);
  return rotatedNumber;
}
const inputNumber = 1234;
const inputRotations = 2;
const rotatedNumber = cyclicallyRotateNumber(inputNumber, inputRotations);
console.log("Output:", rotatedNumber);
