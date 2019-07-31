function getMaxProfit(stockPrices) {
  let min = stockPrices[0];
  let maxDiff = stockPrices[1] - min;
  
  if (stockPrices.length <= 1) {
    throw new Error('Not enough stocks to evaluate');
  }
  
  for (let i = 1; i < stockPrices.length - 1; i++) {
    min = Math.min(min, stockPrices[i]);
    maxDiff = Math.max(maxDiff, stockPrices[i + 1] - min);
  }
  return maxDiff;
}
