function isFirstComeFirstServed(takeOut, dineIn, servedOrders) {

  // Check if we're serving orders first-come, first-served
  // Look at servedOrders, is equal to first place in either of takeOut/dineIn?
  let i = 0;
  let j = 0;
  let k = 0;
  
  if (takeOut.length + dineIn.length !== servedOrders.length) {
    return false;
  }
  
  while (i < takeOut.length && j < dineIn.length) {
    if (takeOut[i] < dineIn[j]) {
      if (servedOrders[k] !== takeOut[i]) {
        return false;
      }
      i++;
    } else {
      if (servedOrders[k] !== dineIn[j]) {
        return false;
      }
      j++;
    }
    k++
  }

  if (i === takeOut.length) {
    while (j < dineIn.length) {
      if (servedOrders[k] !== dineIn[j]) {
        return false;
      }
      j++;
      k++;
    }

  } else {
    while (i < takeOut.length) {
      if (servedOrders[k] !== takeOut[i]) {
        return false;
      }
      i++;
      k++;
    }
  }

  return true;
}

