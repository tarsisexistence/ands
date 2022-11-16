/**
 * Leetcode #572
 * Difficulty: Easy
 * https://leetcode.com/problems/subtree-of-another-tree
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
export const isSubtree = (root, subRoot) => {
  if (!root) return false;
  if (isSame(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);

  function isSame(r, s) {
    if (!r && !s) return true;
    if (!r || !s) return false;

    return r.val === s.val && isSame(r.left, s.left) && isSame(r.right, s.right);
  }
};
