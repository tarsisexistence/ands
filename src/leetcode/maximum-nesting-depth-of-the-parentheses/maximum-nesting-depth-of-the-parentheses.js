/**
 * Leetcode #1614
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
 */
/**
 * @param {string} s
 * @return {number}
 */
export const maxDepth = s => {
  let currentDepth = 0;
  let maxDepth = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '(') {
      currentDepth += 1;
      maxDepth = Math.max(maxDepth, currentDepth);
    } else if (s[i] === ')') {
      currentDepth -= 1;
    }
  }

  return maxDepth;
};
