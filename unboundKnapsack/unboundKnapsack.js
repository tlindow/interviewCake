function maxDuffelBagValue(cakeTypes, maxCap) {
  const maxVals = [0];
  for (let i = 1; i <= maxCap; i++) {
    maxVals[i] = maxVals[i - 1];
    let currMaxCap = i;
    for (let j = 0; j < cakeTypes.length; j++) {
      let cake = cakeTypes[j];
      if (!cake.weight && cake.value) {
        return Infinity;
      }
      if (cake.weight <= currMaxCap) {
        let weightLeft = currMaxCap - cake.weight;
        maxVals[i] = Math.max(maxVals[i], cake.value + maxVals[weightLeft]);
      }
    }
  }
  return maxVals[maxCap];
}
