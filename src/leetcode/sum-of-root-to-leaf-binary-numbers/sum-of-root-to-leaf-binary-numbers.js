/**
 * Leetcode #1160
 * Difficulty: Easy
 * https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
export const sumRootToLeaf = ({ val, left, right }, bits = '0') => {
  if (left === null && right === null) {
    return Number.parseInt(bits + val, 2);
  }

  let sum = 0;

  sum += left === null ? 0 : sumRootToLeaf(left, bits + val);
  sum += right === null ? 0 : sumRootToLeaf(right, bits + val);

  return sum;
};

// export const sumRootToLeaf = root => {
//   let sum = 0;
//
//   if (root !== null) {
//     dfs(root);
//   }
//
//   return sum;
//
//   function dfs(node, bits = '') {
//     const nextBits = `${bits}${node.val}`
//     const hasLeft = node.left !== null;
//     const hasRight = node.right !== null;
//
//     if (!hasLeft && !hasRight) {
//       sum += parseInt(nextBits, 2);
//       return;
//     }
//
//     if (hasLeft) {
//       dfs(node.left, nextBits);
//     }
//
//     if (hasRight) {
//       dfs(node.right, nextBits);
//     }
//   }
// };
