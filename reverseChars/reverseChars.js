function reverse(arrayOfChars) {

  // Reverse the input array of characters in place
  let firstIdx = 0;
  let lastIdx = arrayOfChars.length - 1;
  
  while (lastIdx - firstIdx >= 1) {
    let tmp = arrayOfChars[lastIdx];
    arrayOfChars[lastIdx] = arrayOfChars[firstIdx];
    arrayOfChars[firstIdx] = tmp;
    lastIdx--;
    firstIdx++;
  }
  return arrayOfChars;
}
