/**
 * Leetcode #112
 * Difficulty: Easy
 * https://leetcode.com/problems/path-sum
 */
/**
 * @param {TreeNode} node
 * @param {number} targetSum
 * @return {boolean}
 */
export const hasPathSum = (node, targetSum) => {
  if (!node) {
    return false;
  }

  const current = targetSum - node.val;

  if (!node.left && !node.right) {
    return current === 0;
  }

  return hasPathSum(node.left, current) || hasPathSum(node.right, current);
};

// /**
//  * @param {TreeNode} root
//  * @param {number} targetSum
//  * @return {boolean}
//  */
// export const hasPathSum = (root, targetSum) => {
//   return traverse(root, 0);
//
//   function traverse(node, path) {
//     if (!node) {
//       return false;
//     }
//
//     const current = path + node.val;
//
//     if (!node.left && !node.right) {
//       return current === targetSum;
//     }
//
//     return traverse(node.left, current) || traverse(node.right, current);
//   }
// };
