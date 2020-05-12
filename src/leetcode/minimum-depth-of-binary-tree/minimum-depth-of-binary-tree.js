/**
 * Leetcode #111
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/
 */
/**
 * @param {TreeNode} node
 * @param {number} depth
 * @return {number}
 */
export const minDepth = (node, depth = 0) => {
  if (node === null) {
    return depth;
  }

  const left = minDepth(node.left, depth);
  const right = minDepth(node.right, depth);

  if (left !== depth && right !== depth) {
    return 1 + Math.min(left, right);
  } else if (left !== depth) {
    return 1 + left;
  } else {
    return 1 + right;
  }
};
