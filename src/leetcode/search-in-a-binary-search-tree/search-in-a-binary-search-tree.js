/**
 * Leetcode #700
 * Difficulty: Easy
 * https://leetcode.com/problems/search-in-a-binary-search-tree/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = (root, val) => {
  if (root !== null) {
    if (root.val === val) {
      return root;
    }

    const leftSubtree = searchBST(root.left, val);

    if (leftSubtree) {
      return leftSubtree;
    }

    const rightSubtree = searchBST(root.right, val);

    if (rightSubtree) {
      return rightSubtree;
    }
  }

  return null;
  // const searchBST = (root, val) => {
  //   if (root === null) {
  //     return null
  //   }
  //
  //   if (root.val === val) {
  //     return root;
  //   }
  //
  //   const nextSubtree = val > root.val ? root.right : root.left;
  //   return searchBST(nextSubtree, val);
  // };
};
