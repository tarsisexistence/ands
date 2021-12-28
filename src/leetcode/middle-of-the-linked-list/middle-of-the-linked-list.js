/**
 * Leetcode #876
 * Difficulty: Easy
 * https://leetcode.com/problems/middle-of-the-linked-list/
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const middleNode = head => {
  let single = head;
  let double = head;

  while (double && double.next) {
    single = single.next;
    double = double.next.next;
  }

  return single;
};

// const middleNode = head => {
//   const nodes = [];
//   let current = head;
//   let count = 0;
//
//   while (current !== null) {
//     count += 1;
//     nodes.push(current);
//     current = current.next;
//   }
//
//   return nodes[Math.floor(count / 2)];
// };

// const middleNode = head => {
//   let temp = head;
//   let length = 0;
//
//   while (temp) {
//     temp = temp.next;
//     length += 1;
//   }
//
//   const target = Math.floor(length / 2) + 1;
//
//   for (let i = 0; i < target; i += 1) {
//     if (i + 1 === target) {
//       return head;
//     }
//
//     head = head.next;
//   }
//
//
//   return head;
// };
