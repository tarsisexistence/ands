/**
 * Leetcode #415
 * Difficulty: Easy
 * https://leetcode.com/problems/add-strings
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
export const addStrings = (num1, num2) => {
  let res = '';
  let carry = 0;

  for (let i = 0; i < Math.max(num1.length, num2.length); i += 1) {
    const index = -(i + 1);
    let sum = Number(num1.at(index) ?? 0) + Number(num2.at(index) ?? 0);

    if (carry > 0) {
      carry = Math.floor(carry / 10);
      sum += 1;
    }

    if (sum > 9) {
      carry += 1;
      sum %= 10;
    }

    res = sum + res;
  }

  if (carry) {
    res = '1' + res;
  }

  return res;
};
