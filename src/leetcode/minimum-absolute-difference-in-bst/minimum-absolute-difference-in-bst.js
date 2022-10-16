/**
 * Leetcode #530
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-absolute-difference-in-bst/
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
export const getMinimumDifference = root => {
  let res = Infinity;
  const sorted = [];
  sortBS(root);

  for (let i = 0; i < sorted.length - 1; i += 1) {
    res = Math.min(res, sorted[i + 1] - sorted[i]);
  }

  return res;

  function sortBS(node) {
    if (!node) {
      return;
    }

    sortBS(node.left);
    sorted.push(node.val);
    sortBS(node.right);
  }
};
