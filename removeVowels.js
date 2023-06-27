function removeVowels(string) {
  const vowels = 'aeiouAEIOU';
  let stringWithoutVowels = '';
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (!vowels.includes(char)) {
      stringWithoutVowels += char;
    }
  }
  return stringWithoutVowels;
}
const inputString = prompt("Enter a string: ");
if (inputString.length <= 80) {
  const result = removeVowels(inputString);
  console.log("String without vowels:", result);
} else {
  console.log("String length exceeds the limit (80 characters).");
}
