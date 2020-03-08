/**
 * Leetcode #589
 * Difficulty: Easy
 * https://leetcode.com/problems/n-ary-tree-preorder-traversal/
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
export const preorder = root => {
  const result = [];
  const stack = [];

  if (root === null) {
    return result;
  }

  stack.push(root);

  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);

    for (let i = node.children.length - 1; i >= 0; i -= 1) {
      stack.push(node.children[i]);
    }
  }

  return result;
};

export const preorderRecursively = root => {
  const result = [];
  traverse(root);
  return result;

  function traverse(node) {
    if (node === null) {
      return;
    }

    result.push(node.val);

    for (let child of node.children) {
      traverse(child);
    }
  }
};
