/**
 * Leetcode #104
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */
/**
 * @param {TreeNode} root
 * @param {number} depth
 * @return {number}
 */
export const maxDepth = (root, depth = 0) => {
  if (root === null) {
    return depth;
  }

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return Math.max(left, right) + 1;
};
