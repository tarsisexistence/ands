/**
 * Leetcode #344
 * Difficulty: Easy
 * https://leetcode.com/problems/reverse-string/
 */
/**
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
export const reverseString = s => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left += 1;
    right -= 1;
  }
};
