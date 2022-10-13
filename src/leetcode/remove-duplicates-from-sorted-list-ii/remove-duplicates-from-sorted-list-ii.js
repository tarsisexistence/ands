/**
 * Leetcode #82
 * Difficulty: Medium
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const deleteDuplicates = head => {
  while (head && head.next && head.val === head.next.val) {
    const val = head.val;

    while (head && val === head.val) {
      head = head.next;
    }
  }

  let node = head;

  while (node) {
    if (!node.next || !node.next.next || node.next.val !== node.next.next.val) {
      node = node.next;
      continue;
    }

    const nextVal = node.next ? node.next.val : null;

    while (node.next && node.next.val === nextVal) {
      node.next = node.next.next;
    }
  }

  return head;
};
