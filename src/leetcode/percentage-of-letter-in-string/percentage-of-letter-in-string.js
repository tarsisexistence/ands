/**
 * Leetcode #2278
 * Difficulty: Easy
 * https://leetcode.com/problems/percentage-of-letter-in-string/
 */
/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
export const percentageLetter = (s, letter) => {
  let count = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === letter) {
      count += 1;
    }
  }

  return Math.floor((count / s.length) * 100);
};
