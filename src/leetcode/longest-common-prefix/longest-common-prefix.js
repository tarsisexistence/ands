/**
 * Leetcode #14
 * Difficulty: Easy
 * https://leetcode.com/problems/longest-common-prefix
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
export const longestCommonPrefix = strs => {
  let res = '';

  for (let i = 0; i < strs[0].length; i += 1) {
    const char = strs[0][i];

    for (let j = 0; j < strs.length; j += 1) {
      if (strs[j][i] !== char) {
        return res;
      }
    }

    res += char;
  }

  return res;
};
