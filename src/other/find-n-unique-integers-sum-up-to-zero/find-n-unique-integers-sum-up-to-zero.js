/**
 * Leetcode #1304
 * https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
 */
/**
 * @param {number} n
 * @return {number[]}
 */
export const sumZero = n => {
  const result = [];

  if (n % 2 !== 0) {
    result.push(0);
  }

  for (let i = 1; i < n; i += 2) {
    result.push(i, -i);
  }

  return result;
};
