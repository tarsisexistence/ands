/**
 * Leetcode #897
 * Difficulty: Easy
 * https://leetcode.com/problems/increasing-order-search-tree/
 */

import { TreeNode } from '../../utils/node';

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
export const increasingBST = root => {
  const nodesEntity = {};
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    if (node !== null) {
      nodesEntity[node.val] = new TreeNode(node.val);
      stack.push(node.left);
      stack.push(node.right);
    }
  }

  const keys = Object.keys(nodesEntity);
  const headNode = nodesEntity[keys[0]];
  let currentNode = headNode;

  for (let i = 1; i < keys.length; i += 1) {
    currentNode.right = nodesEntity[keys[i]];
    currentNode = nodesEntity[keys[i]];
  }

  return headNode;
};
