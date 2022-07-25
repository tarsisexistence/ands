/**
 * Leetcode #110
 * Difficulty: Easy
 * https://leetcode.com/problems/balanced-binary-tree/
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export const isBalanced = root => {
  let result = true;

  traverse(root, 0);

  return result;

  function traverse(node, prevLvl) {
    if (!node) {
      return prevLvl;
    }

    const currentLvl = prevLvl + 1;
    const l = traverse(node.left, currentLvl);
    const r = traverse(node.right, currentLvl);

    if (Math.abs(l - r) > 1) {
      result = false;
    }

    return Math.max(l, r);
  }
};
