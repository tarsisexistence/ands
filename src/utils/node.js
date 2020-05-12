export function ListNode(val) {
  this.val = val;
  this.next = null;
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
