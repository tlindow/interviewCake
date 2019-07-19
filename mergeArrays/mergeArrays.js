function mergeArrays(myArray, alicesArray) {

  // Combine the sorted arrays into one large sorted array
  // two pointers i and j
  // if i and j are not at end
  // if value is less in one of the arrays, push into new array
  // increment pointer on array where value was pushed
  const merged = [];
  let i = 0;
  let j = 0;
  while (i < myArray.length || j < alicesArray.length) {
    if (myArray[i] < (alicesArray[j] ? alicesArray[j] : Infinity)) {
      merged.push(myArray[i])
      i++;
    } else {
      merged.push(alicesArray[j]);
      j++;
    }
  }
  return merged;
}
