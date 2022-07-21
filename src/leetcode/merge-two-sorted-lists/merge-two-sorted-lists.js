/**
 * Leetcode #21
 * Difficulty: Easy
 * https://leetcode.com/problems/merge-two-sorted-lists/
 */
import { ListNode as ListNode } from '../../utils/node';

/**
 * @param {ListNodeNext} list1
 * @param {ListNodeNext} list2
 * @return {ListNodeNext}
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

// export const mergeTwoLists = (list1, list2) => {
//   const core = new ListNode();
//   let list = core;
//
//   while (list1 && list2) {
//     if (list1.val < list2.val) {
//       list.next = new ListNode(list1.val);
//       list = list.next;
//       list1 = list1.next;
//     } else {
//       list.next = new ListNode(list2.val);
//       list = list.next;
//       list2 = list2.next;
//     }
//   }
//
//   if (list1) {
//     list.next = list1;
//   } else {
//     list.next = list2;
//   }
//
//   return core.next;
// };
