/**
 * Leetcode #441
 * Difficulty: Easy
 * https://leetcode.com/problems/arranging-coins/
 */
/**
 * @param {number} n
 * @return {number}
 */
export const arrangeCoins = n => {
  let stairs = 0;

  while (n >= stairs) {
    n -= stairs;
    stairs += 1;
  }

  return stairs - 1;
};

// const arrangeCoins = (n, step = 0) =>  step > n ? step - 1 : arrangeCoins(n - step, step + 1);
