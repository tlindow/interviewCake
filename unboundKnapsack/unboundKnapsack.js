function maxDuffelBagValue(cakeTypes, weightCapacity) {

  // Calculate the maximum value we can carry
  const highestVals = [0];
  
  for (i = 0; i < cakeTypes.length; i++) {
    if (cakeTypes[i].weight === 0) {
      if (cakeTypes[i].value > 0) {
        return Infinity;
      } else if (cakeTypes[i].value < 0) {
        return -Infinity;
      }
    }
  }
  
  for (let i = 1; i <= weightCapacity; i++) {
    let currentMaxValue = 0;
    cakeTypes.forEach(cake => {
      if (cake.weight <= i && cake.weight !== 0) {
        currentMaxValue = Math.max(cake.value + highestVals[i - cake.weight], currentMaxValue);
      }
    });
    highestVals[i] = currentMaxValue;
  }

  return highestVals[weightCapacity];
}
