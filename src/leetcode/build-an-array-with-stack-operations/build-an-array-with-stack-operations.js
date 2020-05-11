/**
 * Leetcode #1441
 * Difficulty: Easy
 * https://leetcode.com/problems/build-an-array-with-stack-operations/
 */
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
export const buildArray = (target, n) => {
  const operations = [];
  const targetMap = new Map();

  for (let i = 0; i < target.length; i += 1) {
    targetMap.set(target[i], true);
  }

  for (let i = 1; i <= target[target.length - 1]; i += 1) {
    if (targetMap.has(i)) {
      operations.push('Push');
    } else {
      operations.push('Push');
      operations.push('Pop');
    }
  }

  return operations;
};
