/**
 * Leetcode #2160
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/
 */
/**
 * @param {number} num
 * @return {number}
 */
export const minimumSum = num => {
  const [d1, d2, d3, d4] = num.toString().split('').sort();

  // return Number(`${d1}${d3}`) + Number(`${d2}${d4}`);
  return d1 * 10 + d2 * 10 + Number(d3) + Number(d4);
};
