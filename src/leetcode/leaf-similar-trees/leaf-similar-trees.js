/**
 * Leetcode #872
 * Difficulty: Easy
 * https://leetcode.com/problems/leaf-similar-trees/
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
export const leafSimilar = (root1, root2) => {
  const leaves1 = [];
  const leaves2 = [];

  dfs(root1, leaves1);
  dfs(root2, leaves2);

  return (
    leaves1.length === leaves2.length &&
    leaves1.every((value, index) => value === leaves2[index])
  );

  function dfs(node, leaves) {
    const hasLeft = node.left !== null;
    const hasRight = node.right !== null;
    if (!hasLeft && !hasRight) {
      leaves.push(node.val);
      return;
    }

    if (hasLeft) {
      dfs(node.left, leaves);
    }

    if (hasRight) {
      dfs(node.right, leaves);
    }
  }
};

// const leafSimilar = (root1, root2) => {
//     return getIdentity(root1) === getIdentity(root2);

//     function getIdentity(root) {
//         const stack = [root];
//         const values = []

//         while (stack.length) {
//             const node = stack.pop();
//             const hasLeft = node.left !== null;
//             const hasRight = node.right !== null;

//             if (!hasLeft && !hasRight) {
//                 values.push(node.val);
//             } else {
//                 if (hasLeft) {
//                     stack.push(node.left);
//                 }

//                 if (hasRight) {
//                     stack.push(node.right);
//                 }
//             }
//         }

//         return values.toString();
//     }
// }
