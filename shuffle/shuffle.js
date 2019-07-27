function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(array) {

  // Shuffle the input in place
  let ceiling = array.length - 1;
  let randomIdx;
  let randomNum;
  let i = 0;
  let tmp;
  
  if (array.length < 2) {
    return;
  }
  
  while (i < ceiling) {
    randomIdx = getRandom(i, ceiling);
    randomNum = array[randomIdx]
    tmp = array[i];
    array[i] = randomNum;
    array[randomIdx] = tmp;
    i++;
  }
  return array;
}
