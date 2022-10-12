/**
 * Leetcode #2027
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-moves-to-convert-string
 */
/**
 * @param {string} s
 * @return {number}
 */
export const minimumMoves = s => {
  let res = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === 'X') {
      i += 2;
      res += 1;
    }
  }

  return res;
};
