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

  const ancestor = traverse(root);

  return ancestor ?? { val: Infinity };

  function traverse(node) {
    if (!node) {
      return;
    }

    const isLeft = node.val === p.val;
    const isRight = node.val === q.val;
    const isMatch = isLeft || isRight;

    if (isMatch) {
      return node;
    }

    const l = traverse(node.left);
    const r = traverse(node.right);

    return isMatch || (l && r) ? node : l || r;
  }
};
