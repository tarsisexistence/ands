/**
 * Leetcode #1716
 * Difficulty: Easy
 * https://leetcode.com/problems/calculate-money-in-leetcode-bank/
 */
/**
 * @param {number} n
 * @return {number}
 */
export const totalMoney = n => {
  let week = 1;
  let day = 0;
  let total = 0;

  while (n > 0) {
    total += week + day;
    day += 1;
    n -= 1;

    if (day === 7) {
      week += 1;
      day = 0;
    }
  }

  return total;
};
