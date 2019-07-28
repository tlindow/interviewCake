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

  // Find the second largest item in the binary search tree
  let node = treeRoot;
  let parent;
  let hasSubtree = false;
  
  if (!node || (!node.right && !node.left)) {
    throw new Error('Not enough nodes!');
  }
  
  while(true) {
    if (node.right) {
      parent = node;
      node = node.right;
    } else {
      if (!node.left && !hasSubtree) {
        return parent.value;
      }
      
      if (hasSubtree && !node.right) {
        return node.value;
      } 
      
      parent = node.left;
      node = node.left;
      hasSubtree = true;
      if (!node.right) {
        return parent.value;
      }
    }
  }
}
