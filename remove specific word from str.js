function removeWordFromString(sentence, word) {
  var regex = new RegExp("\\b" + word + "\\b", "gi");
  var removedWordSentence = sentence.replace(regex, "");
  return removedWordSentence.trim();
}
var inputString = "programming camp are amazing";
var wordToRemove = "programming";
var result = removeWordFromString(inputString, wordToRemove);
console.log("Modified Sentence:", result);
