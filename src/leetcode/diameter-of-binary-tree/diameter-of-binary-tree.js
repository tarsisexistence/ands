/**
 * Leetcode #543
 * Difficulty: Easy
 * https://leetcode.com/problems/diameter-of-binary-tree/
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
export const diameterOfBinaryTree = root => {
  let diameter = 0;
  depthFirstSearch(root);
  return diameter;

  function depthFirstSearch(node) {
    if (node === null) {
      return 0;
    }

    const left = depthFirstSearch(node.left);
    const right = depthFirstSearch(node.right);

    diameter = Math.max(diameter, left + right);
    return Math.max(left, right) + 1;
  }
};
