/**
 * Leetcode #678
 * Difficulty: Medium
 * https://leetcode.com/problems/valid-parenthesis-string/
 */
/**
 * @param {string} s
 * @return {boolean}
 */
export const checkValidString = s => {
  const wildcards = [];
  const balance = [];

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '(') {
      balance.push(i);
    } else if (s[i] === '*') {
      wildcards.push(i);
    } else {
      if (balance.length > 0) {
        balance.pop();
      } else if (wildcards.length > 0) {
        wildcards.pop();
      } else {
        return false;
      }
    }
  }

  while (balance[balance.length - 1] < wildcards[wildcards.length - 1]) {
    balance.pop();
    wildcards.pop();
  }

  return balance.length <= 0;
};

// export const checkValidString = s => {
//   let low = 0;
//   let high = 0;
//
//   for (const char of s) {
//     low += char === '(' ? 1 : -1;
//     high += char === ')' ? -1 : 1;
//
//     if (high < 0) {
//       return false;
//     }
//
//     low = Math.max(low, 0);
//   }
//
//   return low === 0;
// };
