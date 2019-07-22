class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  populateWordsToCounts(inputString) {
    const words = splitWords(inputString);
    for (let i = 0; i < words.length; i++) {
      addWordToHash.call(this, words[i]);
    }
    return this.wordsToCount;
    
    
    function addWordToHash(word) {
      if (!this.wordsToCounts.has(word)) {
        this.wordsToCounts.set(word, 0);
      }
      
      if (this.wordsToCounts.has(capitalize(word)) && word === word.toLowerCase()) {
        let capitalCount = this.wordsToCounts.get(capitalize(word));
        this.wordsToCounts.delete(capitalize(word));
        this.wordsToCounts.set(word, this.wordsToCounts.get(word) + capitalCount);
      }
      this.wordsToCounts.set(word, this.wordsToCounts.get(word) + 1);
    }
    
    function capitalize(word) {
      return word.slice(0, 1).toUpperCase() + word.slice(1, word.length);
    }
    
    function splitWords(inputString) {
      const words = [];
      
      let wordStartIdx = 0;
      let currentWordLength = 0;
      for (var i = 0; i <= inputString.length; i++) {
        if (!isLetter(inputString[i]) && !punctuationInWord(inputString[i - 1], inputString[i], inputString[i + 1]) ) {
          if (currentWordLength > 0) {
            let word = inputString.slice(wordStartIdx, wordStartIdx + currentWordLength);
            words.push(word);
          } 
          wordStartIdx = i + 1;
          currentWordLength = 0;
        } else {
          currentWordLength++;
        }
      }
      return words
    }
    
    function isLetter(char) {
      return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(char) > -1;
    }
    
    function punctuationInWord(charBefore, char, charAfter) {
      return isLetter( charBefore ) && isLetter( charAfter ) && char !== ' ';
    }
  }
}
