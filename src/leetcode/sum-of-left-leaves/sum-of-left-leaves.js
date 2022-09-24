/**
 * Leetcode #404
 * Difficulty: Easy
 * https://leetcode.com/problems/sum-of-left-leaves/
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
export const sumOfLeftLeaves = root => {
  let sum = 0;
  traverse(root);
  return sum;

  function traverse(node) {
    if (!node) {
      return;
    }

    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
      traverse(node.right);
    } else {
      traverse(node.left);
      traverse(node.right);
    }
  }
};
