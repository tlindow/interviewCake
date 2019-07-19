function reverseWords(message) {
  let startIdx = 0;
  swap(0, message.length - 1);
  
  for (var i = 0; i < message.length; i++) {
    if (message[i] === ' ') {
      swap(startIdx, i - 1);
      startIdx = i + 1;
    }
    
    if (i === message.length - 1) {
      swap(startIdx, i)
    }
  }
       
  function swap(startIdx, endIdx) {
    while (startIdx < endIdx) {
      let tmp = message[startIdx];
      message[startIdx] = message[endIdx];
      message[endIdx] = tmp;
      startIdx++;
      endIdx--;
    }
  }
}
