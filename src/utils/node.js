export function ListNode(val) {
  this.val = val;
  this.next = null;
}

export function ListNodeNext(val, next = null) {
  this.val = val;
  this.next = next;
}

export function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

export function Node(val, children = []) {
  this.val = val;
  this.children = children;
}

export function DoublyLinkedNode(val, prev, next, child) {
  this.val = val;
  this.prev = prev;
  this.next = next;
  this.child = child;
}
