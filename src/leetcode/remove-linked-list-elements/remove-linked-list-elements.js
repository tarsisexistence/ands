/**
 * Leetcode #203
 * Difficulty: Easy
 * https://leetcode.com/problems/remove-linked-list-elements/
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
export const removeElements = (head, val) => {
  while (head !== null && head.val === val) {
    head = head.next;
  }

  if (head === null) {
    return null;
  }

  let current = head;

  while (current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};

// export const removeElements = (head, val) => {
//   let prev = null;
//   let current = head;
//
//   while (current !== null) {
//     const isMatch = current.val === val;
//     const isLastNode = current.next === null;
//
//     if (isMatch && isLastNode) {
//       if (prev === null) {
//         head = null;
//       } else {
//         prev.next = null;
//       }
//       current = null;
//     } else if (isMatch) {
//       current.val = current.next.val;
//       current.next = current.next.next;
//     } else {
//       prev = current;
//       current = current.next;
//     }
//   }
//
//   return head;
// };
