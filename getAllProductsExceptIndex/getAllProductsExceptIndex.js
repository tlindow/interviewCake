function getProductsOfAllIntsExceptAtIndex(intArray) {
  const allProducts = [1];
  let productFromRight = 1;

  if (intArray.length <= 1) {
    throw new Error('Not enough integers');
  }

  for (let i = 0; i < intArray.length - 1; i++) {
    productsFromLeft.push(productsFromLeft[i] * intArray[i])
  }

  for (let i = intArray.length - 1; i >= 0; i--) {
    allProducts[i] *= productFromRight;
    productFromRight *= intArray[i];
  }

  return allProducts;
}
