function getProductsOfAllIntsExceptAtIndex(intArray) {
  if (intArray.length <= 1) throw new Error('Not enough elements');
  const products = [1];
  let currProduct = 1;
  for (let i = 0; i < intArray.length - 1; i++) {
    products.push(products[i] * intArray[i]);
  }
  for (let i = intArray.length - 2; i >= 0; i--) {
    currProduct *= intArray[i + 1];
    products[i] *= currProduct;
  }
  return products;
}
