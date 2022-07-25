/**
 * Leetcode #235
 * Difficulty: Easy
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
export const lowestCommonAncestor = (root, p, q) => {
  if (p.val > q.val) {
    const exP = p;
    p = q;
    q = exP;
  }

  return traverse(root);

  function traverse(node) {
    if (!node) {
      return;
    }

    // in any case it could be ancestor or the branch of the ancestor
    if (node.val === p.val || node.val === q.val) {
      return node;
    }

    const l = traverse(node.left);
    const r = traverse(node.right);

    return l && r ? node : l || r;
  }
};
