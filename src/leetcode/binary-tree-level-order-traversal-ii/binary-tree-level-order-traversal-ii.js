/**
 * Leetcode #107
 * Difficulty: Easy
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
export const levelOrderBottom = root => {
  const values = [];

  if (root === null) {
    return values;
  }

  dfs(root, 0);
  return values.reverse();

  function dfs(node, lvl = 0) {
    const hasLeft = node.left !== null;
    const hasRight = node.right !== null;

    if (values[lvl] === undefined) {
      values[lvl] = [node.val];
    } else {
      values[lvl].push(node.val);
    }

    if (hasLeft) {
      dfs(node.left, lvl + 1);
    }

    if (hasRight) {
      dfs(node.right, lvl + 1);
    }
  }
};
