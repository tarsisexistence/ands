/**
 * Leetcode #1217
 * Difficulty: Easy
 * https://leetcode.com/problems/play-with-chips/
 */
/**
 * @param {number[]} chips
 * @return {number}
 */
export const minCostToMoveChips = chips => {
  let odds = 0;

  for (let i = 0; i < chips.length; i += 1) {
    if (chips[i] % 2 === 1) {
      odds += 1;
    }
  }

  return Math.min(odds, chips.length - odds);
};
