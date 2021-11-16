/**
 * Leetcode #1455
 * Difficulty: Easy
 * https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/
 */
/**
 * @param {number[][]} accounts
 * @return {number}
 */
export const maximumWealth = accounts => {
  let max = 0;

  for (let i = 0; i < accounts.length; i += 1) {
    let sum = 0;

    for (let j = 0; j < accounts[i].length; j += 1) {
      sum += accounts[i][j];
    }

    if (sum > max) {
      max = sum;
    }
  }

  return max;
};
