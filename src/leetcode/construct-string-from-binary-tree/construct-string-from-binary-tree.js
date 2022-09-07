/**
 * Leetcode #606
 * Difficulty: Easy
 * https://leetcode.com/problems/construct-string-from-binary-tree/
 */
/**
 * @param {TreeNode} node
 * @return {string}
 */
export const tree2str = node => {
  if (!node) {
    return '';
  }

  let state = String(node.val);

  if (node.left) {
    state += `(${tree2str(node.left)})`;
  } else if (node.right) {
    state += '()';
  }

  if (node.right) {
    state += `(${tree2str(node.right)})`;
  }

  return state;
};
