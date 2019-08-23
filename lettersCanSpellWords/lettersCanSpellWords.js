function lettersCanSpellWords(letters, words) {
  const letterCounts = {}
  for (let i = 0; i < letters.length; i++) {
    if (!letterCounts[letters[i]]) {
      letterCounts[letters[i]] = 0;
    }
    letterCounts[letters[i]]++;
  }

  const letterCountsCopy = JSON.parse(JSON.stringify(letterCounts));
  let word;
  let letter;
  for (let i = 0; i < words.length; i++) {
    word = words[i];
    for (let j = 0; j < word.length; j++) {
      letter = word[j];
      if (!letterCountsCopy[letter]) {
        return false;
      } else {
        letterCountsCopy[letter]--;
      }
    }
    for (let char in letterCountsCopy) {
      letterCountsCopy[char] = letterCounts[char];
    }
  }
  return true;
}

console.log('one word cannot spell FALSE', lettersCanSpellWords('hello', ['ra']));
console.log('one word can spell TRUE', lettersCanSpellWords('hello', ['he']));
console.log('two words can spell TRUE', lettersCanSpellWords('hello', ['hel', 'ell']));
console.log('three words can spell last TRUE', lettersCanSpellWords('hello', ['hel', 'ell', 'hello']));
console.log('three words cannot spell last FALSE', lettersCanSpellWords('hello', ['hel', 'ell', 'helllo']));
console.log('not words and can spell TRUE', lettersCanSpellWords('hello', ['']));
console.log('no letters cannot spell FALSE', lettersCanSpellWords('', ['he']));
console.log('no letters or words TRUE', lettersCanSpellWords('', []));