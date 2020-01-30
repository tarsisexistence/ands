/**
 * Leetcode #617
 * Difficulty: Easy
 * https://leetcode.com/problems/merge-two-binary-trees/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
export const mergeTrees = (t1, t2) => {
  if (t1 === null) {
    return t2;
  }

  if (t2 !== null) {
    t1.val = t1.val + t2.val;
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
  }

  return t1;
};
