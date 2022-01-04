/**
 * Leetcode #2124
 * Difficulty: Easy
 * https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/
 */
/**
 * @param {string} s
 * @return {boolean}
 */
export const checkString = s => !s.includes('ba');

// export const checkString = s => {
//   for (let i = 0; i < s.length; i += 1) {
//     if (s[i] === 'b' && s[i + 1] === 'a') {
//       return false;
//     }
//   }
//
//   return true;
// }
