/**
 * Leetcode #559
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
 */
/**
 * @param {Node} root
 * @return {number}
 */
export const maxDepth = root => {
  let depth = 0;

  if (root === null) {
    return depth;
  }

  for (let i = 0; i < root.children.length; i += 1) {
    depth = Math.max(depth, maxDepth(root.children[i]));
  }

  return depth + 1;
};

// const maxDepth = root => {
//   if (root === null) {
//     return 0;
//   }
//
//   let count = 1;
//   dfs(root, count)
//
//   return count;
//
//   function dfs(node, depth) {
//     count = Math.max(count, depth);
//
//     node.children.forEach(child => {
//       dfs(child, depth + 1);
//     });
//   }
// };
