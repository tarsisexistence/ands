import { TreeNode } from '../../utils/node';

/**
 * @param {(string|number|null)[]} values
 * @return {TreeNode}
 */
export const createTree = values => {
  if (values.length === 0) {
    return null;
  }

  const root = new TreeNode(values.shift());
  const queue = [root];

  while (values.length > 0) {
    const node = queue.shift();

    const leftValue = values.shift();
    if (leftValue !== null) {
      node.left = new TreeNode(leftValue);
      queue.push(node.left);
    }

    const rightValue = values.shift();
    if (rightValue !== null && rightValue !== undefined) {
      node.right = new TreeNode(rightValue);
      queue.push(node.right);
    }
  }

  return root;
};
