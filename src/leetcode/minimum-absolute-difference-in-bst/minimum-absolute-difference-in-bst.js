/**
 * Leetcode #530
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-absolute-difference-in-bst/
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
export const getMinimumDifference = root => {
  const stack = [root];
  const values = [];

  while (stack.length > 0) {
    const node = stack.pop();

    if (!node) {
      continue;
    }

    values.push(node.val);
    stack.push(node.left);
    stack.push(node.right);
  }

  values.sort((a, b) => a - b);

  let min = Infinity;

  for (let i = 0; i < values.length - 1; i += 1) {
    min = Math.min(min, values[i + 1] - values[i]);
  }

  return min;
};
