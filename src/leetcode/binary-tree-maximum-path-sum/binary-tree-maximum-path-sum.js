/**
 * Leetcode #124
 * Difficulty: Hard
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
export const maxPathSum = root => {
  let max = -Infinity;
  traverse(root);
  return max;

  function traverse(node) {
    if (node === null) {
      return 0;
    }

    const left = traverse(node.left);
    const right = traverse(node.right);
    const sum = node.val + left + right;
    max = Math.max(max, sum);
    return Math.max(0, node.val + left, node.val + right);
  }
};
