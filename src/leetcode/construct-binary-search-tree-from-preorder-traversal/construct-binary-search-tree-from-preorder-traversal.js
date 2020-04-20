/**
 * Leetcode #1008
 * Difficulty: Medium
 * https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/
 */

import { TreeNode } from '../../utils/node';

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
export const bstFromPreorder = preorder => {
  if (preorder.length === 0) {
    return null;
  }

  const [root, ...rest] = preorder;
  const node = new TreeNode(root);
  node.left = bstFromPreorder(rest.filter(val => val < root));
  node.right = bstFromPreorder(rest.filter(val => val > root));
  return node;
};
