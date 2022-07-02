/**
 * Leetcode #1137
 * Difficulty: Easy
 * https://leetcode.com/problems/n-th-tribonacci-number/
 */
/**
 * @param {number} n
 * @return {number}
 */
export const tribonacci = (n, cache = []) => {
  if (cache[n]) {
    return cache[n];
  }

  if (n < 2) {
    cache[n] = Math.max(n, 0);
  } else {
    cache[n] = tribonacci(n - 1, cache) + tribonacci(n - 2, cache) + tribonacci(n - 3, cache);
  }

  return cache[n];
};
