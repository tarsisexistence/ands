/**
 * Leetcode #1385
 * Difficulty: Easy
 * https://leetcode.com/problems/find-the-distance-value-between-two-arrays/
 */
/**
 * @param {TreeNode} root
 * @param {number} val (custom)
 * @return {boolean}
 */
export const isUnivalTree = (root, val = root.val) =>
  root === null ||
  (val === root.val &&
    isUnivalTree(root.left, root.val) &&
    isUnivalTree(root.right, root.val));
