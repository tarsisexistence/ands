/**
 * Leetcode #70
 * Difficulty: Easy
 * https://leetcode.com/problems/climbing-stairs/
 */
/**
 * @param {number} n
 * @return {number}
 */
export const climbStairs = n => {
  if (n < 2) {
    return 1;
  }

  const cache = [1, 1, 2];

  while (cache.length <= n) {
    const i = cache.length;
    cache[i] = cache[i - 1] + cache[i - 2];
  }

  return cache[cache.length - 1];
};
