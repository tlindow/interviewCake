function changePossibilities(amountLeft, denominations) { 
  let amountRemaining;
  const ways = {}
  for (let i = 0; i <= amountLeft; i++) {
    ways[i] = 0;
  }
  ways[0] = 1;

  denominations.forEach(coinVal => {
    for (let nextAmount = coinVal; nextAmount <= amountLeft; nextAmount++) {
      amountRemaining = nextAmount - coinVal;
      ways[nextAmount] += ways[amountRemaining];
    }
  });
  
  return ways[amountLeft];
}
