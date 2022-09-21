/**
 * Leetcode #783
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-distance-between-bst-nodes/
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
export const minDiffInBST = root => {
  const sorted = [];
  sortBS(root);

  let min = Infinity;

  for (let i = 0; i < sorted.length - 1; i += 1) {
    min = Math.min(min, sorted[i + 1] - sorted[i]);
  }

  return min;

  function sortBS(node) {
    if (!node) {
      return;
    }

    sortBS(node.left);
    sorted.push(node.val);
    sortBS(node.right);
  }
};
