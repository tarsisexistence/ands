/**
 * Leetcode #653
 * Difficulty: Easy
 * https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
export const findTarget = (root, k) => {
  const set = new Set();
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    if (set.has(k - node.val)) {
      return true;
    }

    set.add(node.val);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return false;
};
