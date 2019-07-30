class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverse(headOfList) {

  // Reverse the linked list in place
  let node = headOfList;
  let prevNode = null;
  let nextNode = null;
  
  while (node) {
    nextNode = node.next;
    node.next = prevNode;
    
    prevNode = node;
    node = nextNode;
  }
  return prevNode;
}
