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
