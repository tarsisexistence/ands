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
