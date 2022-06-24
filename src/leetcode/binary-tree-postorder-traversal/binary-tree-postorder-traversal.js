/**
 * Leetcode #145
 * Difficulty: Easy
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export const postorderTraversal = root => {
  const result = [];

  dfs(root);

  return result;

  function dfs(node) {
    if (!node) {
      return;
    }

    dfs(node.left);
    dfs(node.right);
    result.push(node.val);
  }
};
