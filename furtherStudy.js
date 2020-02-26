"use strict";


function wordsInCommon(words1, words2) {
  // Replace this with your code

  const setWords1 = new Set(words1);
  const setWords2 = new Set(words2);

  const result = new Set();

  let newArray = [...result];

  for (const word of setWords1) {
    if (setWords2.has(word)) {
      result.add(word);
    }
    return newArray;
    console.log(newArray);
  }
}

function kidsGame(names) {
  // Replace this with your code
}

