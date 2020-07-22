/**
 * Leetcode #102
 * Difficulty: Medium
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
export const levelOrder = root => {
  const order = [];
  dfs(root, 0);
  return order;

  function dfs(node, lvl) {
    if (node === null) {
      return;
    }

    if (order[lvl] === undefined) {
      order[lvl] = [];
    }

    order[lvl].push(node.val);

    dfs(node.left, lvl + 1);
    dfs(node.right, lvl + 1);
  }
};
