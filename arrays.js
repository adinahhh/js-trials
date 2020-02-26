"use strict";


// 1. printIndices
function printIndices(items) {
  // Replace this with your code

  let counter = 0;  
  for (const item of items) {
    console.log(item, counter++);
  }
  }

// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code

  const result = []

  for (const i in items) {
    if (i % 2 == 0) {
      result.push(items[i]);
    }
  }

  console.log(result);
}


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  const nItems = items.sort((a, b) => a - b).slice(0, n);
  const dscNItems = nItems.reverse();

  console.log(dscNItems);
}
