/**
 * Leetcode #94
 * Difficulty: Easy
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} node
 * @return {number[]}
 */
export const inorderTraversal = node => {
  const ans = [];
  const stack = [];

  while (stack.length > 0 || node !== null) {
    if (node === null) {
      node = stack.pop();
      ans.push(node.val);
      node = node.right;
    } else {
      stack.push(node);
      node = node.left;
    }
  }

  return ans;
};

// const inorderTraversal = root => root ? [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)] : [];
