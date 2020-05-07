/**
 * Leetcode #993
 * Difficulty: Easy
 * https://leetcode.com/problems/cousins-in-binary-tree/
 */

import { TreeNode } from '../../utils/node';

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

export const isCousins = (root, x, y) => {
  const X = {};
  const Y = {};

  traverse(root, new TreeNode(), 0);

  return X.depth === Y.depth && X.parent !== Y.parent;

  function traverse(node, parent, depth) {
    if (node === null) {
      return;
    }

    if (node.val === x) {
      X.depth = depth;
      X.parent = parent.val;
    } else if (node.val === y) {
      Y.depth = depth;
      Y.parent = parent.val;
    }

    const nextDepth = depth + 1;
    traverse(node.left, node, nextDepth);
    traverse(node.right, node, nextDepth);
  }
};
