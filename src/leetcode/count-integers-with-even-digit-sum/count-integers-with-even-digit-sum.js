/**
 * Leetcode #2180
 * Difficulty: Easy
 * https://leetcode.com/problems/count-integers-with-even-digit-sum/
 */
/**
 * @param {number} num
 * @return {number}
 */
export const countEven = num => {
  let count = 0;

  for (let i = 2; i <= num; i += 1) {
    const str = String(i);
    let sum = 0;

    for (let j = 0; j < str.length; j += 1) {
      sum += Number(str[j]);
    }

    if (sum % 2 === 0) {
      count += 1;
    }
  }

  return count;
};
