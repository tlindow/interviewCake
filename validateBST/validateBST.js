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

function isBinarySearchTree(treeRoot) {

  // Determine if the tree is a valid binary search tree
  // in order depth first search
  const stack = [];
  let node = treeRoot;
  let prevVal = -Infinity;
  // loop as long as in the stack
  while (stack.length || node) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      if (prevVal > node.value) {
        return false;
      }
      prevVal = node.value;
      node = node.right;
    }
  }  
  return true;
}
