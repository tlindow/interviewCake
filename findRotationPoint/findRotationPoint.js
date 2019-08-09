function findRotationPoint(arr) {
  if (arr.length === 0) return null;
  let begin = 0;
  let mid = Math.floor(arr.length/2);
  while(mid) {
    if (arr[mid - 1] > arr[mid]) {
      return mid;
    }
    
    if (arr[begin] > arr[mid]) {
      mid = Math.floor((mid - beg - 1)/2);
    } else {
      beg = mid + 1;
      mid = Math.floor((arr.length - beg)/2 + beg);
    }
  }
  return 0;
}
