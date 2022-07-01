/**
 * Leetcode #144
 * Difficulty: Easy
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export const preorderTraversal = root => {
  const values = [];
  traverse(root);
  return values;

  function traverse(node) {
    if (!node) {
      return;
    }

    values.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }
};
