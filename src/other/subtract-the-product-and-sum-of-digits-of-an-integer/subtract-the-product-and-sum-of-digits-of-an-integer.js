/**
 * Leetcode #1281
 * https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
 */
/**
 * @param {number} num
 * @return {number}
 */
export const subtractProductAndSum = num => {
  const digits = String(num);
  let mul = 1;
  let sum = 0;

  for (let i = 0; i < digits.length; i += 1) {
    const digit = Number(digits[i]);
    mul *= digit;
    sum += digit;
  }

  return mul - sum;
}
