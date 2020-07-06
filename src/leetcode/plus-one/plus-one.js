/**
 * Leetcode #66
 * Difficulty: Easy
 * https://leetcode.com/problems/plus-one/
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
export const plusOne = digits => {
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    const incremented = digits[i] + 1;

    if (incremented < 10) {
      digits[i] = incremented;
      return digits;
    }

    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
};
