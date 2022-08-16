/**
 * Leetcode #257
 * Difficulty: Easy
 * https://leetcode.com/problems/binary-tree-paths/
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
export const binaryTreePaths = root => {
  const result = [];

  traverse(root, String(root.val));

  return result;

  function traverse(node, path) {
    if (node.left) {
      traverse(node.left, `${path}->${node.left.val}`);
    }

    if (node.right) {
      traverse(node.right, `${path}->${node.right.val}`);
    }

    if (!node.left && !node.right) {
      result.push(path);
    }
  }
};
