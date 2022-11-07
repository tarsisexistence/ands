/**
 * Leetcode #1323
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-69-number/
 */
/**
 * @param {number} num
 * @return {number|string}
 */
export const maximum69Number = num => num.toString().replace('6', '9');

// const maximum69Number = num => {
//     const digits = num.toString().split('');
//
//     for (let i = 0; i < digits.length; i += 1) {
//         if (digits[i] === '6') {
//             digits[i] = 9;
//             return Number(digits.join(''));
//         }
//     }
//
//     return num;
// };
