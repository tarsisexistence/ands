/**
 * Leetcode #237
 * Difficulty: Easy
 * https://leetcode.com/problems/delete-node-in-a-linked-list/
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
export const deleteNode = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;
};
