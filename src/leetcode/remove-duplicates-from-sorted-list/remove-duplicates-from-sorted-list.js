/**
 * Leetcode #83
 * Difficulty: Easy
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const deleteDuplicates = head => {
  let node = head;

  while (node) {
    while (node.next && node.val === node.next.val) {
      node.next = node.next.next;
    }

    node = node.next;
  }

  return head;
};
