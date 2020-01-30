/**
 * Leetcode #905
 * Difficulty: Easy
 * https://leetcode.com/problems/sort-array-by-parity/
 */
/**
 * @param {number[]} array
 * @return {number[]}
 */
export const sortArrayByParity = array => {
  const odds = [];
  const evens = [];

  for (let value of array) {
    if (value % 2 === 0) {
      evens.push(value);
    } else {
      odds.push(value);
    }
  }

  return evens.concat(odds);
};
