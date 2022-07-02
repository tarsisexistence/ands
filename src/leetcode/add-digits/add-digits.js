/**
 * Leetcode #258
 * Difficulty: Easy
 * https://leetcode.com/problems/add-digits/
 */
/**
 * @param {number} num
 * @return {number}
 */
export const addDigits = num => {
  let str = String(num);

  while (str.length > 1) {
    let sum = 0;

    for (let i = 0; i < str.length; i += 1) {
      sum += Number(str[i]);
    }

    str = String(sum);
  }

  return Number(str);
};
