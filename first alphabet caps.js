function toSentenceCase(sentence) {
  var words = sentence.split(' ');
  var capitalizedWords = [];
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedWords.push(capitalizedWord);
  }
  var result = capitalizedWords.join(' ');
  return result;
}
var sentence = 'we are neoGrammers';
var sentenceCase = toSentenceCase(sentence);
console.log(sentenceCase);
