/**
 * Leetcode #147
 * https://leetcode.com/problems/insertion-sort-list/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const insertionSortList = (head) => {
  if (!head || !head.next) {
    return head;
  }

  const arr = [head.val];
  let copy = head;

  while (!!copy.next) {
    copy = copy.next;
    arr.push(copy.val);
  }

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    let j = i - 1;

    for (; j >= 0 && arr[j] > value; j -= 1) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = value;
  }


  const list = new ListNode(arr[0]);
  copy = list;

  for (let i = 1; i < arr.length; i++) {
    copy.next = new ListNode(arr[i]);
    copy = copy.next;
  }

  return list;
};
