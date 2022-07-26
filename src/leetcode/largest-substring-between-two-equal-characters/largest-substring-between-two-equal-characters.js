/**
 * Leetcode #368
 * Difficulty: Medium
 * https://leetcode.com/problems/largest-divisible-subset/
 */
/**
 * @param {string} s
 * @return {number}
 */
export const maxLengthBetweenEqualCharacters = s => {
  const mem = new Map();
  let max = -1;

  for (let i = 0; i < s.length; i += 1) {
    const j = mem.get(s[i]);

    if (j === undefined) {
      mem.set(s[i], i);
    } else {
      max = Math.max(max, i - j - 1);
    }
  }

  return max;
};
