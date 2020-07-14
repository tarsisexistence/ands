/**
 * Leetcode #100
 * Difficulty: Easy
 * https://leetcode.com/problems/same-tree/
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
export const isSameTree = (p, q) => {
  const val1 = p === null ? null : p.val;
  const val2 = q === null ? null : q.val;
  const areEqual = val1 === val2;

  if (p === null || q === null || !areEqual) {
    return areEqual;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
