function findRotationPoint(words) {

  // Find the rotation point in the vector
  
  // Edge cases
  if (words.length === 1) {
    return 0;
  } else if (words.length === 0 || words.length === undefined) {
    return null;
  }
  
  // Rotation point at 0th index
  if (words[0] < words[words.length - 1]) {
    return 0;
  }
  
  let middleIdx = Math.floor(words.length/2);
  while (true) {
    if (words[middleIdx - 1] > words[middleIdx]) {
      return middleIdx;
    } else {
      if (words[0] > words[middleIdx]) {
        middleIdx = Math.floor(middleIdx/2);
      } else {
        middleIdx = Math.floor( (words.length - middleIdx)/2 + middleIdx );
      }
    }
  }
}
