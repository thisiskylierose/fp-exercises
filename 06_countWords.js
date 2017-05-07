function countWords(inputWords) {
  return inputWords.reduce(function (allWords, word) {
    allWords[word] = ++allWords[word] || 1;

    return allWords;
  }, {});
}

module.exports = countWords;
