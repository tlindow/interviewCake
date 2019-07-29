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

function findSecondLargest(treeRoot) {
  const stack = [];
  let node = treeRoot;
  let count = 1;
  let parent;
  
  if (!node) {
    throw new Error('empty tree')
  }
  
  while (stack.length || node) {
    if (node) {
      if (!node.right) {
        stack.push(parent);
        stack.push(node);
      }
      parent = node;
      node = node.right;
    } else {
      node = stack.pop();
      if (count === 2) {
        return node.value;
      }
      
      node = node.left;
      count++;
    }
  }
}
