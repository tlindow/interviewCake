function isFirstComeFirstServed(takeOut, dineIn, servedOrders) {

  // Check if we're serving orders first-come, first-served
  // two pointers on the two arrays
  // check if the currently next id is equal to the one on served orders
  let i = 0;
  let j = 0;
  let servedId = 0;
  
  if (servedOrders.length !== takeOut.length + dineIn.length) {
    return false;
  }
  
  while (i < takeOut.length || j < dineIn.length) {
    if (takeOut.length && takeOut[i] < (dineIn[j] ? dineIn[j] : Infinity)) {
      if (takeOut[i] !== servedOrders[servedId]) {
        return false;
      }
      i++;
    } else {
      if (dineIn.length && dineIn[j] !== servedOrders[servedId]) {
        return false;
      }
      j++
    }
    servedId++;
  }

  return true;
}
