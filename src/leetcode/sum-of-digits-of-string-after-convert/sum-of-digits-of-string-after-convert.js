/**
 * Leetcode #1945
 * Difficulty: Easy
 * https://leetcode.com/problems/sum-of-digits-of-string-after-convert/
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
export const getLucky = (s, k) => {
  let result = '';

  for (let i = 0; i < s.length; i += 1) {
    result += s[i].charCodeAt() - 96;
  }

  for (let i = 0; i < k; i += 1) {
    let nums = 0;

    for (let j = 0; j < result.length; j += 1) {
      nums += Number(result[j]);
    }

    result = String(nums);
  }

  return Number(result);
};
