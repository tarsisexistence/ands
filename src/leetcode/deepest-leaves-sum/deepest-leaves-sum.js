/**
 * Leetcode #1302
 * Difficulty: Medium
 * https://leetcode.com/problems/deepest-leaves-sum/
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
export const deepestLeavesSum = root => {
  const sumsByLevel = [];

  dfs(root, 0);

  return sumsByLevel[sumsByLevel.length - 1];

  function dfs(node, level) {
    if (!node) {
      return;
    }

    const sum = sumsByLevel[level] ?? 0;
    sumsByLevel[level] = sum + node.val;

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }
};
