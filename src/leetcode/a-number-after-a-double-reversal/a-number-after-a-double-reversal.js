/**
 * Leetcode #2119
 * Difficulty: Easy
 * https://leetcode.com/problems/a-number-after-a-double-reversal/
 */
/**
 * @param {number} num
 * @return {boolean}
 */
export const isSameAfterReversals = num => num === 0 || num % 10 !== 0;

// const isSameAfterReversals = num => {
//   const str = num.toString();
//
//   return num === 0 || str[str.length - 1] !== '0';
// };
