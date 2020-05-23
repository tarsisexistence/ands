/**
 * Leetcode #637
 * Difficulty: Easy
 * https://leetcode.com/problems/average-of-levels-in-binary-tree/
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export const averageOfLevels = (root) => {
  const count = [];
  const sum = [];

  dfs(root, 0);

  for (let i = 0; i < sum.length; i += 1) {
    sum[i] = sum[i] / count[i];
  }

  return sum;

  function dfs(node, depth) {
    if (node === null) {
      return;
    }

    count[depth] = (count[depth] || 0) + 1;
    sum[depth] = (sum[depth] || 0) + node.val;

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }
};
