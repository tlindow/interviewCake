function getMaxProfit(stockPrices) {

  let max = -Infinity;
  let currMax = 0;
  let isLocalMax = false;
  // Calculate the max profit
  if (stockPrices.length === 1) {
    throw new Error('Only one price');
  } else if (stockPrices.length === 0) {
    throw new Error('Empty price array');
  }
  
  for (let i = 0; i < stockPrices.length - 1; i++) {
    currMax = stockPrices[i + 1] - stockPrices[i];
    if (isLocalMax && max >= 0) {
      currMax += max;
    }
    
    if (currMax > max) {
      max = currMax;
      isLocalMax = true;
    } else {
      isLocalMax = false;
    }
  }

  return max;
}
