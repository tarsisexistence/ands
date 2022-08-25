/**
 * Leetcode #563
 * Difficulty: Easy
 * https://leetcode.com/problems/binary-tree-tilt/
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
export const findTilt = root => {
  return traverse(root);

  function sum(node) {
    return node ? node.val + sum(node.left) + sum(node.right) : 0;
  }

  function traverse(node) {
    if (!node) {
      return 0;
    }

    const tiltSum = Math.abs(sum(node.left) - sum(node.right));

    return tiltSum + traverse(node.left) + traverse(node.right);
  }
};

// export const findTilt = root => {
//   const ref = { value: 0 };
//   traverse(root, ref);
//
//   return ref.value;
//
//   function sum(node) {
//     return node ? node.val + sum(node.left) + sum(node.right) : 0;
//   }
//
//   function traverse(node, ref) {
//     if (!node) {
//       return 0;
//     }
//
//     ref.value += Math.abs(sum(node.left) - sum(node.right));
//
//     return traverse(node.left, ref) + traverse(node.right, ref);
//   }
// };
