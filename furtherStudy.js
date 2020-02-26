"use strict";


function wordsInCommon(words1, words2) {
  // Replace this with your code

  setWords1 = new Set(words1);
  setWords2 = new Set(words2);

  result = new Set();

  for (const word of setWords1) {
    if (setWords2.has(word)) {
      result.add(word);
    }
    return result.from();
  }
}

function kidsGame(names) {
  // Replace this with your code
}

