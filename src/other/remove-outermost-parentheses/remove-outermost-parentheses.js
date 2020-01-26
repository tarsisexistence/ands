/**
 * Leetcode #1021
 * https://leetcode.com/problems/remove-outermost-parentheses/
 */
/**
 * @param {string} S
 * @return {string}
 */
export const removeOuterParentheses = S => {
  let result = '';
  let balance = 0;

  for (let char of S) {
    if (char === '(') {
      if (balance !== 0) {
        result += char;
      }

      balance += 1;
    } else {
      balance -= 1;

      if (balance !== 0) {
        result += char;
      }
    }
  }

  return result;
};
