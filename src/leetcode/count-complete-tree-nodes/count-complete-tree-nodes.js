/**
 * Leetcode #222
 * Difficulty: Easy
 * https://leetcode.com/problems/count-complete-tree-nodes/
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
export const countNodes = root => (root === null ? 0 : 1 + countNodes(root.left) + countNodes(root.right));
