class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function isBalanced(treeRoot) {
  const stack = [treeRoot];
  let node;
  let depth = 0;
  let maxDepth = null;
  
  while (stack.length) {
    node = stack.pop();
    depth++;
    
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
    
    if (!node.left && !node.right) {
      if (!maxDepth) {
        maxDepth = depth;
      } else {
        if (Math.abs(maxDepth - depth) > 1) {
          return false;
        }
      }
      depth--;
    }
  }
  return true;
}
