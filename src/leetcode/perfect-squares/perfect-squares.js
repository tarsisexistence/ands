/**
 * Leetcode #279
 * Difficulty: Medium
 * https://leetcode.com/problems/perfect-squares/
 */
/**
 * @param {number} n
 * @return {number}
 */

export const numSquares = n => {
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j * j <= i; j += 1) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }

  return dp[n];
};
