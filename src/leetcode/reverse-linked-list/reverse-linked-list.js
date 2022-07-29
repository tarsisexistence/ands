/**
 * Leetcode #206
 * Difficulty: Easy
 * https://leetcode.com/problems/reverse-linked-list/
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const reverseList = head => {
  let reversed = null;

  while (head !== null) {
    reversed = {
      val: head.val,
      next: reversed
    };
    head = head.next;
  }

  return reversed;
};

// export var reverseList = function (head, previous = null) {
//   if (head === null) {
//     return previous;
//   }
//   const { next } = head;
//   head.next = previous;
//   return reverseList(next, head);
// };

// export var reverseList = function (head, previous = null) {
//   if (head === null) {
//     return previous;
//   }
//   return reverseList(head.next, {
//     val: head.val,
//     next: previous
//   });
// };

// const reverseList = head => {
//   let reversed = null;
//
//   while (head !== null) {
//     const { next } = head;
//     head.next = reversed;
//     reversed = head
//     head = next;
//   }

//
//   return reversed;
// };

// const reverseList = head => {
//     if (head === null) {
//         return null
//     }

//     const values = [];

//     while (head !== null) {
//         values.push(head.val);
//         head = head.next;
//     }

//     head = new ListNode(values.pop());
//     let current = head;

//     while (values.length > 0) {
//         current.next = new ListNode(values.pop());
//         current = current.next;
//     }

//     return head;
// };

// const reverseList = head => {
//   if (!head || !head.next) {
//     return head;
//   }

//   const reversed = reverseList(head.next);
//   head.next.next = head;
//   head.next = null
//   return reversed;
// };
