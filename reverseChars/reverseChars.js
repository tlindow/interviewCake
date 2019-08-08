function reverse(arrayOfChars) {
  let i = 0;
  let j = arrayOfChars.length - 1;
  let tmp;
  while (j - i > 0) {
    tmp = arrayOfChars[i];
    arrayOfChars[i] = arrayOfChars[j];
    arrayOfChars[j] = tmp;
    i++;
    j--;
  }
}
