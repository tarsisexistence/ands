/**
 * Leetcode #430
 * Difficulty: Medium
 * https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
 */

import { DoublyLinkedNode as Node } from '../../utils/node';

/**
 * @param {Node} head
 * @return {Node}
 */
export const flatten = head => {
  if (head === null) {
    return null;
  }

  let newHead = new Node(null, null, null, null);
  let current = newHead;
  traverse(head);
  newHead = newHead.next;
  newHead.prev = null;
  return newHead;

  function traverse(node) {
    if (node === null) {
      return;
    }

    const newNode = new Node(node.val, current, null, null);
    current.next = newNode;
    current = newNode;

    if (node.child !== null) {
      traverse(node.child);
    }

    traverse(node.next);
  }
};
