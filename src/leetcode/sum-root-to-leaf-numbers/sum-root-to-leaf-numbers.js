/**
 * Leetcode #129
 * Difficulty: Medium
 * https://leetcode.com/problems/sum-root-to-leaf-numbers/
 */
/**
 * @param {TreeNode} root
 * @param {string} nums
 * @return {number}
 */
export const sumNumbers = (root, sum = 0) => {
  if (!root) {
    return 0;
  }

  const newSum = sum * 10 + root.val;

  if (!root.left && !root.right) {
    return newSum;
  }

  return sumNumbers(root.left, newSum) + sumNumbers(root.right, newSum);
};

// export const sumNumbers = (root, nums = '') => {
//   if (root === null) {
//     return 0;
//   }
//
//   const value = nums + root.val;
//
//   return Boolean(root.left || root.right)
//     ? sumNumbers(root.left, value) + sumNumbers(root.right, value)
//     : Number(value);
// };

// const sumNumbers = root => {
//     let sum = 0;
//     dfs(root, '');
//     return sum;

//     function dfs(node, chars) {
//         if (node === null) {
//             sum += chars.length > 1 ? Number(chars) : 0;
//             return;
//         }

//         const tempSum = chars + node.val;
//         const hasLeft = node.left !== null;
//         const hasRight = node.right !== null;

//         if (hasLeft || hasRight) {
//             hasLeft && dfs(node.left, tempSum);
//             hasRight && dfs(node.right, tempSum);
//         } else {
//             sum += Number(tempSum);
//         }
//     }
// }
