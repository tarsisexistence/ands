/**
 * Leetcode #1446
 * Difficulty: Easy
 * https://leetcode.com/problems/consecutive-characters/
 */
/**
 * @param {string} s
 * @return {number}
 */
export const maxPower = s => {
  let max = 0;
  let prev = '';
  let count = 0;

  for (let i = 0; i < s.length; i += 1) {
    count = s[i] === prev ? count + 1 : 1;
    prev = s[i];
    max = Math.max(max, count);
  }

  return max;
};
