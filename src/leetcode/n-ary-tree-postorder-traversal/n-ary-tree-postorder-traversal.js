/**
 * Leetcode #590
 * Difficulty: Easy
 * https://leetcode.com/problems/n-ary-tree-postorder-traversal/
 */
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
export const postorder = root => {
  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();

    if (node !== null) {
      result.push(node.val);
      stack.push(...node.children);
    }
  }

  return result.reverse();
};

export const postorderRecursively = root => {
  const result = [];
  traverse(root);
  return result;

  function traverse(node) {
    if (node === null) {
      return;
    }

    for (let child of node.children) {
      traverse(child);
    }

    result.push(node.val);
  }
};
