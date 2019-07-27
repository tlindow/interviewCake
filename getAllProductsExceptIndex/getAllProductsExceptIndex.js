function getProductsOfAllIntsExceptAtIndex(intArray) {
  const productsFromLeft = [1];
  let counterLeft = 0;
  const productsFromRight = [1];
  let counterRight = intArray.length - 1;
  let allProducts = [];

  if (intArray.length <= 1) {
    throw new Error('Not enough integers');
  }

  for (let i = 0; i < intArray.length - 1; i++) {
    productsFromLeft.push(productsFromLeft[i] * intArray[i])
  }

  for (let i = intArray.length - 1; i > 0; i--) {
    productsFromRight.push(productsFromRight[counterLeft] * intArray[i]);
    counterLeft++;
  }

  for (let i = 0; i < intArray.length; i++) {
    allProducts.push(productsFromLeft[i] * productsFromRight[counterRight]);
    counterRight--;
  }

  return allProducts;
}
