function highestProductOf3(arrayOfInts) {
  if (arrayOfInts.length < 3) {
    throw new Error('not enough integers')
  }
  
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);
  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let lowest2 = lowest * arrayOfInts[1];
  let highest2 = lowest2;
  let highest3 = lowest2 * arrayOfInts[2];
  let curr2;
  
  for (let i = 2; i < arrayOfInts.length; i++) {
    curr1 = arrayOfInts[i];
    
    highest3 = Math.max(highest3, curr1 * highest2, curr1 * lowest2);
    
    highest2 = Math.max(highest2, curr1 * highest, curr1 * lowest)
    lowest2 = Math.min(lowest2, curr1 * highest, curr1 * lowest);
    
    lowest = Math.min(lowest, curr1);
    highest = Math.max(highest, curr1)
  }
  
  return highest3;
}
