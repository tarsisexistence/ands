/**
 * Leetcode #226
 * Difficulty: Easy
 * https://leetcode.com/problems/invert-binary-tree/
 */
/**
 * @param {TreeNode} node
 * @return {TreeNode}
 */
export const invertTree = (node) => {
  if (node === null) {
    return node;
  }

  const temp = node.left;
  node.left = node.right;
  node.right = temp;

  invertTree(node.left);
  invertTree(node.right);

  return node;
};

// const invertTree = root => {
//   const stack = [root];
//
//   while(stack.length) {
//     const node = stack.pop();
//
//     if (node !== null) {
//       const temp = node.left;
//       node.left = node.right;
//       node.right = temp;
//       stack.push(node.left, node.right);
//     }
//   }
//
//   return root
// };
