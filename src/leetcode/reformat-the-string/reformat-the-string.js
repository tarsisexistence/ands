/**
 * Leetcode #1417
 * Difficulty: Easy
 * https://leetcode.com/problems/reformat-the-string/
 */
/**
 * @param {string} s
 * @return {string}
 */
export const reformat = s => {
  let nums = '';
  let strs = '';

  for (let i = 0; i < s.length; i += 1) {
    if (Number.isInteger(Number(s[i]))) {
      nums += s[i];
    } else {
      strs += s[i];
    }
  }

  if (Math.abs(nums.length - strs.length) > 1) {
    return '';
  }

  const length = Math.max(nums.length, strs.length);
  let res = '';

  for (let i = 0; i < length; i += 1) {
    if (nums.length >= strs.length) {
      res += nums[i] ?? '';
      res += strs[i] ?? '';
    } else {
      res += strs[i] ?? '';
      res += nums[i] ?? '';
    }
  }

  return res;
};
