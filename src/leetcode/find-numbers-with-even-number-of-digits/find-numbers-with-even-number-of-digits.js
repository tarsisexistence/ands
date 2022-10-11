/**
 * Leetcode #1295
 * Difficulty: Easy
 * https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const findNumbers = nums => nums.filter(num => String(num).length % 2 === 0).length;

// const findNumbers = nums => {
//     let count = 0;
//
//     for (const num of nums) {
//         if (String(num).length % 2 === 0) {
//             count += 1;
//         }
//     }
//
//     return count;
// }

// export const findNumbers = nums => nums.reduce((acc, num) => (String(num).length % 2 === 0 ? acc + 1 : acc), 0);
