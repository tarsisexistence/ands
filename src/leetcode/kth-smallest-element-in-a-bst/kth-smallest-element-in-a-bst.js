/**
 * Leetcode #230
 * Difficulty: Easy
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
export const kthSmallest = (root, k) => {
  const kSmallest = [];
  traverse(root);
  return kSmallest[k - 1];

  function traverse(node) {
    if (node === null || kSmallest.length >= k) {
      return;
    }

    traverse(node.left);
    kSmallest.push(node.val);
    traverse(node.right);
  }
};
