/**
 * Leetcode #938
 https://leetcode.com/problems/range-sum-of-bst/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} node
 * @param {number} L
 * @param {number} R
 * @param {number} sum
 * @return {number}
 */
export const rangeSumBST = (node, L, R, sum = 0) => {
    if (node === null) {
        return 0;
    }

    const rangeValue = node.val >= L && node.val <= R ? node.val : 0;
    const left = rangeSumBST(node.left, L, R, sum);
    const right = rangeSumBST(node.right, L, R, sum);

    return sum + rangeValue + left + right;
};
