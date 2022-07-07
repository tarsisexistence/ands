/**
 * Leetcode #917
 * Difficulty: Easy
 * https://leetcode.com/problems/reverse-only-letters/
 */
/**
 * @param {string} s
 * @return {string}
 */
export const reverseOnlyLetters = s => {
  const arr = s.split('');

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const l = (s[left] >= 'a' && s[left] <= 'z') || (s[left] >= 'A' && s[left] <= 'Z');
    const r = (s[right] >= 'a' && s[right] <= 'z') || (s[right] >= 'A' && s[right] <= 'Z');

    if (l && r) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }

    if (!l || r) {
      left += 1;
    }

    if (!r || l) {
      right -= 1;
    }
  }

  return arr.join('');
};
