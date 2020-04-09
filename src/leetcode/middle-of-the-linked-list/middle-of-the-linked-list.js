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

  while (double !== null && double.next !== null) {
    single = single.next;
    double = double.next ? double.next.next : null;
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
