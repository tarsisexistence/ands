/**
 * Leetcode #1758
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/
 */
/**
 * @param {string} s
 * @return {number}
 */
export const minOperations = s => {
  let a = s[0] === '0' ? 0 : 1;
  let b = s[0] === '0' ? 1 : 0;
  const arrA = s.split('');
  const arrB = s.split('');
  arrA[0] = '0';
  arrB[0] = '1';

  for (let i = 1; i < arrA.length; i += 1) {
    if (arrA[i] === arrA[i - 1]) {
      arrA[i] = arrA[i - 1] === '0' ? '1' : '0';
      a += 1;
    }

    if (arrB[i] === arrB[i - 1]) {
      arrB[i] = arrB[i - 1] === '0' ? '1' : '0';
      b += 1;
    }
  }

  return Math.min(a, b);
};
