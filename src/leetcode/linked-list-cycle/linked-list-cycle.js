/**
 * Leetcode #141
 * Difficulty: Easy
 * https://leetcode.com/problems/linked-list-cycle/
 */
export const hasCycle = head => {
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    head = head.next;

    if (fast === head) {
      return true;
    }
  }

  return false;
};

// export const hasCycle = head => {
//   const ws = new WeakSet();
//   let node = head;
//
//   while (node) {
//     if (ws.has(node)) {
//       return true;
//     }
//
//     ws.add(node);
//     node = node.next;
//   }
//
//   return false;
// };
