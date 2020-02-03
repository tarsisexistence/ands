/**
 * Leetcode #700
 * Difficulty: Easy
 * https://leetcode.com/problems/search-in-a-binary-search-tree/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = (root, val) => {
  switch (true) {
    case root === null:
      return null;

    case root.val > val:
      return searchBST(root.left, val);

    case root.val < val:
      return searchBST(root.right, val);

    default:
      return root;
  }
};
