/**
 * Leetcode #2315
 * Difficulty: Easy
 * https://leetcode.com/problems/count-asterisks/
 */
/**
 * @param {string} s
 * @return {number}
 */
export const countAsterisks = s => {
  let asterisks = 0;
  let canCount = true;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '|') {
      canCount = !canCount;
    } else if (s[i] === '*' && canCount) {
      asterisks += 1;
    }
  }

  return asterisks;
};
