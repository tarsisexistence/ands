/**
 * Leetcode #19
 * Difficulty: Medium
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
export const removeNthFromEnd = (head, n) => {
  if (!head || (!head.next && n === 1)) {
    return null;
  }

  let fast = head;
  let slow = head;

  for (let i = 0; i < n; i += 1) {
    fast = fast.next;
  }

  if (!fast) {
    return head.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return head;
};
