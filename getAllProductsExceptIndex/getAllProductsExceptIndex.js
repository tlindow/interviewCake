function getProductsOfAllIntsExceptAtIndex(intArray) {

  // Make a list of the products
  if (intArray.length <= 1) {
    throw new Error('Not enough integers');
  }
  
  const previousProducts = [1];
  for (let i = 0; i < intArray.length - 1; i++) {
    previousProducts.push(previousProducts[i] * intArray[i])
  }
  
  const previousProductsReverse = [1];
  for (let i = intArray.length - 1; i > 0; i--) {
    previousProductsReverse.unshift(previousProductsReverse[0] * intArray[i]);
  }
  
  let result = [];
  for (let i = 0; i < intArray.length; i++) {
    result.push(previousProducts[i] * previousProductsReverse[i]);
  }
  return result;
}
