/**
 * Leetcode #2194
 * Difficulty: Easy
 * https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/
 */
/**
 * @param {string} s
 * @return {string[]}
 */
export const cellsInRange = s => {
  const answer = [];

  for (let j = s[0].charCodeAt() - 65; j < s[3].charCodeAt() - 65 + 1; j += 1) {
    for (let i = Number(s[1]); i < Number(s[4]) + 1; i += 1) {
      answer.push(String.fromCharCode(j + 65) + i);
    }
  }

  return answer;
};
