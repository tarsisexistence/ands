export function ListNode(val) {
  this.val = val;
  this.next = null;
}

export function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

export function Node(val, children) {
  this.val = val;
  this.children = children;
}
