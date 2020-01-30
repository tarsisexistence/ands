/**
 * Leetcode #942
 * Difficulty: Easy
 * https://leetcode.com/problems/di-string-match/
 */
/**
 * @param {string} S
 * @return {number[]}
 */
export const diStringMatch = S => {
  const result = [];
  let min = 0;
  let max = S.length;
  S = S + S.slice(-1);

  for (let char of S) {
    result.push(char === 'I' ? min++ : max--);
  }

  return result;
};
