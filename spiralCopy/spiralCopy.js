function spiralCopy(inputMatrix) {
  let topRowIdx = 0;
  let rightColIdx = inputMatrix[0].length - 1;
  let bottomRowIdx = inputMatrix.length - 1;
  let leftColIdx = 0;
  const arrSpiralOrder = [];
  const inputMatrixSize = inputMatrix.length * inputMatrix[0].length;
  let count = 0;
  
  if (inputMatrix.length === 1) {
    return inputMatrix[0];
  }
  
  while (count < inputMatrixSize) {
    for (let i = leftColIdx; i <= rightColIdx; i++) {
      arrSpiralOrder.push(inputMatrix[topRowIdx][i]);
      count++;
    }
    topRowIdx++;

    for (let i = topRowIdx; i <= bottomRowIdx; i++) {
      arrSpiralOrder.push(inputMatrix[i][rightColIdx]);
      count++;
    }
    rightColIdx--;
  
    for (let i = rightColIdx; i >= leftColIdx; i--) {
      arrSpiralOrder.push(inputMatrix[bottomRowIdx][i]);
      count++;
    }
    bottomRowIdx--;
          console.log(arrSpiralOrder);
    for (let i = bottomRowIdx; i >= topRowIdx; i--) {
      arrSpiralOrder.push(inputMatrix[i][leftColIdx]);
      count++;
    }
    leftColIdx++;
  }
  return arrSpiralOrder;
}
