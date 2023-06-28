const array = [10, 4, 5, 2, 5, 6, 9];
let median = array[((array.length + 1) / 2) - 1];
console.log("median = ", median);
let mode;
let maxFrequency = 0;
const frequencyCounter = {};
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;
  if (frequencyCounter[element] > maxFrequency) {
    mode = element;
    maxFrequency = frequencyCounter[element];
  }
}
console.log("mode = ", mode);

