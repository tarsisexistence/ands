/**
 * Leetcode #1290
 * Difficulty: Easy
 * https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} list
 * @return {number}
 */
export const getDecimalValue = list => {
  let value = '';

  while (list !== null) {
    value += list.val;
    list = list.next;
  }

  return parseInt(value, 2);
};
