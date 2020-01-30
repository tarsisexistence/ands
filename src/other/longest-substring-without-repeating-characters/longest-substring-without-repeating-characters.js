/**
 * Leetcode #3
 * Difficulty: Medium
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLongestSubstring = s => {
  let maxLength = 0;
  let subString = '';

  for (let i = 0; i < s.length; i += 1) {
    const index = subString.lastIndexOf(s[i]);
    subString = index > -1 ? subString.slice(index + 1) + s[i] : subString + s[i];
    maxLength = Math.max(subString.length, maxLength);
  }

  return maxLength;
};
