/**
 * Leetcode #2169
 * Difficulty: Easy
 * https://leetcode.com/problems/count-operations-to-obtain-zero/
 */
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
export const countOperations = (num1, num2) => {
  let operations = 0;

  while (num1 > 0 && num2 > 0) {
    if (num1 >= num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }

    operations += 1;
  }

  return operations;
};
