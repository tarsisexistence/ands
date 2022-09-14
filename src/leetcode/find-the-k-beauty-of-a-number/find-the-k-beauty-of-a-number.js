/**
 * Leetcode #2269
 * Difficulty: Easy
 * https://leetcode.com/problems/find-the-k-beauty-of-a-number/
 */
/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
export const divisorSubstrings = (num, k) => {
  const s = String(num);
  let res = 0;

  for (let i = 0; i < s.length - k + 1; i += 1) {
    if (num % Number(s.slice(i, i + k)) === 0) {
      res += 1;
    }
  }

  return res;
};
