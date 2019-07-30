function isValid(code) {
  let stack = [];
  let openers = '({[';
  let closers = ')}]';
  let opener;
  let closer;
  let valids = ['()', '{}', '[]'];
    
  for (let i = 0; i < code.length; i++) {
    if (openers.includes(code[i])) {
      opener = code[i];
      stack.push(opener);
    }
    
    if (closers.includes(code[i])) {
      opener = stack.pop();
      closer = code[i];
      if (!valids.includes(opener + closer)) {
        return false;
      }
    }
  }
  
  if (stack.length) {
    return false;
  }
  

  return true;
}
