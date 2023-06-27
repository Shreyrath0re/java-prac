function reverseCharactersOfWord(sentence) {
  var words = sentence.split(' ');
  var reversedWords = [];
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var reversedWord = reverseWord(word);
    reversedWords.push(reversedWord);
  }
  var reversedSentence = reversedWords.join(' ');
  return reversedSentence;
}
function reverseWord(word) {
  return word.split('').reverse().join('');
}
var sentence = 'we are neoGrammers';
var reversedSentence = reverseCharactersOfWord(sentence);
console.log(reversedSentence);
