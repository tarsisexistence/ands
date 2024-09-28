/**
 * Leetcode #3110
 * Difficulty: Easy
 * https://leetcode.com/problems/score-of-a-string
 */
/**
 * @param {string} s
 * @return {number}
 */
export function scoreOfString(s) {
  let result = 0;

  for (let i = 0; i < s.length - 1; i += 1) {
    result += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }

  return result;
}
