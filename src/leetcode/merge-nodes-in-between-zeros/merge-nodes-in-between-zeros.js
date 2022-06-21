/**
 * Leetcode #2181
 * Difficulty: Medium
 * https://leetcode.com/problems/merge-nodes-in-between-zeros/
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const mergeNodes = head => {
  let leftNode = head;
  let rightNode = head.next;
  let sum = 0;

  while (rightNode) {
    if (rightNode.val > 0) {
      sum += rightNode.val;
    } else if (rightNode.next) {
      leftNode.val = sum;
      leftNode.next = rightNode;
      leftNode = rightNode;
      sum = 0;
    } else {
      leftNode.val = sum;
      leftNode.next = null;
    }

    rightNode = rightNode.next;
  }

  return head;
};
