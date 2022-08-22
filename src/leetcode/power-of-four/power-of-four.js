/**
 * Leetcode #342
 * Difficulty: Easy
 * https://leetcode.com/problems/power-of-four/
 */
/**
 * @param {number} n
 * @return {boolean}
 */
export const isPowerOfFour = n => Number.isInteger(Math.log(n) / Math.log(4));
/**
 * @param {number} n
 * @return {boolean}
 */
// export const isPowerOfFour = n => {
//   if (n === 0) {
//     return false;
//   }
//
//   while (n !== 1) {
//     if (n % 4 !== 0) {
//       return false;
//     }
//
//     n /= 4;
//   }
//
//   return true;
// };

// const isPowerOfFour = n => {
//   if (n === 0) {
//     return false;
//   }
//
//   if (n === 1) {
//     return true;
//   }
//
//   return n % 4 === 0 ? isPowerOfFour(n / 4) : false;
// }
