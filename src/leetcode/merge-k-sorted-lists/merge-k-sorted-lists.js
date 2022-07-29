/**
 * Leetcode #23
 * Difficulty: Hard
 * https://leetcode.com/problems/merge-k-sorted-lists/
 */
import { ListNode } from '../../utils/node';

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
export const mergeKLists = lists => {
  if (lists.length === 0) {
    return null;
  }

  const head = new ListNode(-Infinity);
  let current = head;

  while (true) {
    let min = -1;

    for (let i = 0; i < lists.length; i += 1) {
      const list = lists[i];
      const a = list && min === -1;
      const b = list && min !== -1 && lists[i].val < lists[min].val;

      if (a || b) {
        min = i;
      }
    }

    if (min === -1) {
      break;
    }

    const node = lists[min];

    current.next = new ListNode(node.val);
    current = current.next;

    if (node.next) {
      node.val = node.next.val;
      node.next = node.next.next;
    } else {
      lists[min] = null;
    }
  }

  return head.next;
};
