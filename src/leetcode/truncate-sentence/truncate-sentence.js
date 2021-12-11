/**
 * Leetcode #1816
 * Difficulty: Easy
 * https://leetcode.com/problems/truncate-sentence/
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
export const truncateSentence = (s, k) => s.split(' ').slice(0, k).join(' ');

// const truncateSentence = (s, k) => {
//   const split = s.split(' ');
//   let ans = '';
//
//   for (let i = 0; i < k - 1; i += 1) {
//     ans += `${split[i]} `;
//   }
//
//   if (k > 0) {
//     ans += split[k - 1];
//   }
//
//   return ans;
// }
