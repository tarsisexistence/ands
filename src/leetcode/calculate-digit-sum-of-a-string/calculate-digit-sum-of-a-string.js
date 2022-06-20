/**
 * Leetcode #2243
 * Difficulty: Easy
 * https://leetcode.com/problems/calculate-digit-sum-of-a-string/
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
export const digitSum = function (s, k) {
  while (s.length > k) {
    let res = '';
    const { length } = s;

    for (let i = 0; i < length; i += k) {
      let sum = 0;

      for (let j = 0; j < k; j += 1) {
        if (s[i + j]) {
          sum += Number(s[i + j]);
        }
      }

      res += sum;
    }

    s = res;
  }

  return s;
};
