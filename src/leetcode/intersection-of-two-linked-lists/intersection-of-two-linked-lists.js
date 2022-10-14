/**
 * Leetcode #160
 * Difficulty: Easy
 * https://leetcode.com/problems/intersection-of-two-linked-lists
 */
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
export const getIntersectionNode = (headA, headB) => {
  const set = new Set();
  let node = headA;

  while (node !== null) {
    set.add(node);
    node = node.next;
  }

  node = headB;

  while (node !== null) {
    if (set.has(node)) {
      return node;
    }

    node = node.next;
  }

  return null;
};

// const getIntersectionNode = (headA, headB) => {
//   let h1 = headA;
//   let h2 = headB;
//
//   while (h1 !== h2) {
//     h1 = h1 === null ? headB : h1.next;
//     h2 = h2 === null ? headA : h2.next;
//   }
//
//   return h1;
// };
