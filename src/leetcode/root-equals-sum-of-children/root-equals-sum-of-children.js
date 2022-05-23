/**
 * Leetcode #2236
 * Difficulty: Easy
 * https://leetcode.com/problems/root-equals-sum-of-children/
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export const checkTree = root => root.val === root.left.val + root.right.val;
