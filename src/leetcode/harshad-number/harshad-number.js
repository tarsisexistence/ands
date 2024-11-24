/**
 * Leetcode #3312
 * Difficulty: Easy
 * https://leetcode.com/problems/harshad-number
 */

/**
 * @param {number} x
 * @return {number}
 */
export const sumOfTheDigitsOfHarshadNumber = x => {
  const s = String(x);
  let sum = 0;

  for (const c of s) {
    sum += Number(c);
  }

  return x % sum === 0 ? sum : -1;
};
