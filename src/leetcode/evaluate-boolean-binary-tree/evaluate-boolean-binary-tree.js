/**
 * Leetcode #2331
 * Difficulty: Easy
 * https://leetcode.com/problems/evaluate-boolean-binary-tree/
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export const evaluateTree = root => {
  if (root.val === 3) {
    return evaluateTree(root.left) && evaluateTree(root.right);
  }

  if (root.val === 2) {
    return evaluateTree(root.left) || evaluateTree(root.right);
  }

  return Boolean(root.val);
};
