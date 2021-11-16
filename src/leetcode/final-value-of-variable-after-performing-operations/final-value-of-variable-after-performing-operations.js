/**
 * Leetcode #2011
 * Difficulty: Easy
 * https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
 */
/**
 * @param {string[]} operations
 * @return {number}
 */
export const finalValueAfterOperations = operations => {
  let x = 0;

  for (let i = 0; i < operations.length; i += 1) {
    const operation = operations[i];

    if (operation[0] === '+' || operation[1] === '+') {
      x += 1;
    } else {
      x -= 1;
    }
  }

  return x;
};
