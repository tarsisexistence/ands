/**
 * Leetcode #62
 * Difficulty: Medium
 * https://leetcode.com/problems/unique-paths/
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
export const uniquePaths = (m, n) => {
  const dp = Array.from({ length: n }, (_, i) => {
    if (i === 0) {
      return new Array(m).fill(1);
    }

    const row = new Array(m).fill(0);
    row[0] = 1;
    return row;
  });

  for (let i = 1; i < n; i += 1) {
    for (let j = 1; j < m; j += 1) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[n - 1][m - 1];
};

// it's not my solution, but I found it useful
// const uniquePaths = (m, n) => {
//   const dp = new Array(n + 1).fill(1);
//
//   for(let row = m - 1; row > 0; row--){
//     for(let col = n - 1; col > 0; col--){
//       dp[col] = dp[col] + dp[col + 1];
//     }
//   }
//   return dp[1];
// };
