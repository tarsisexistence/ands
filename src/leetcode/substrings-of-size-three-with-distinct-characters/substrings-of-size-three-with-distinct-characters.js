/**
 * Leetcode #1876
 * Difficulty: Easy
 * https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
 */
/**
 * @param {string} s
 * @return {number}
 */
export const countGoodSubstrings = s => {
  let count = 0;

  for (let i = 0; i < s.length - 2; i += 1) {
    if (s[i] !== s[i + 1] && s[i] !== s[i + 2] && s[i + 1] !== s[i + 2]) {
      count += 1;
    }
  }

  return count;
};
