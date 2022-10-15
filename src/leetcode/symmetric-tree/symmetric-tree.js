/**
 * Leetcode #101
 * Difficulty: Easy
 * https://leetcode.com/problems/symmetric-tree
 */
export const isSymmetric = (a, b = a) => {
  if (!a && !b) {
    return true;
  }

  if (!a || !b || a.val !== b.val) {
    return false;
  }

  return isSymmetric(a.left, b.right) && isSymmetric(a.right, b.left);
};
