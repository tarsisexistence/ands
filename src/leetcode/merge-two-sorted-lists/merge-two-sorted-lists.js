/**
 * Leetcode #21
 * Difficulty: Easy
 * https://leetcode.com/problems/merge-two-sorted-lists/
 */
import { ListNode } from '../../utils/node';

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
export const mergeTwoLists = (list1, list2) => {
  if (list1 === null && list2 !== null) {
    list1 = list2;
    list2 = null;
  }

  const head = list1;

  while (list1 !== null && list2 !== null) {
    if (list1.val > list2.val) {
      const tempVal = list1.val;
      list1.val = list2.val;
      list2 = list2.next;
      list1.next = new ListNode(tempVal, list1.next);
    } else if (list1.next === null) {
      list1.next = list2;
      list2 = null;
    } else {
      list1 = list1.next;
    }
  }

  return head;
};
