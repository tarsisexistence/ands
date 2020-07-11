/**
 * Leetcode #669
 * Difficulty: Easy
 * https://leetcode.com/problems/trim-a-binary-search-tree/
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
export const trimBST = (root, L, R) => {
  if (root === null) {
    return null;
  }

  if (root.val > R) {
    return trimBST(root.left, L, R);
  } else if (root.val < L) {
    return trimBST(root.right, L, R);
  }

  root.left = trimBST(root.left, L, R);
  root.right = trimBST(root.right, L, R);

  return root;
};

// export const trimBST = (root, L, R) => {
//   root = find(root);
//
//   traverse(root);
//
//   return root;
//
//   function traverse(node) {
//     if (node === null) {
//       return null;
//     }
//
//     if (node.left !== null && node.left.val < L) {
//       node.left = find(node.left);
//     }
//     if (node.right !== null && node.right.val > R) {
//       node.right = find(node.right);
//     }
//
//     traverse(node.left);
//     traverse(node.right);
//   }
//
//   function find(node) {
//     while (node !== null && (node.val < L || node.val > R)) {
//       if (node.val > R) {
//         node = node.left;
//       } else if (node.val < L) {
//         node = node.right;
//       }
//     }
//
//     return node;
//   }
// };
