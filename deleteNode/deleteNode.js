class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function deleteNode(node) {

  // Delete the input node from the linked list
  if (!node.next) {
    node = null;
    throw new Error('Should be able to delete by setting node to null')
  } else {
    node.value = node.next.value;
    node.next = node.next.next;
  }

}
