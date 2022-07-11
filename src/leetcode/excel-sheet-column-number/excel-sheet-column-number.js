/**
 * Leetcode #171
 * Difficulty: Easy
 * https://leetcode.com/problems/excel-sheet-column-number/
 */
/**
 * @param {string} columnTitle
 * @return {number}
 */
export const titleToNumber = columnTitle => {
  let value = 0;

  for (let i = 0; i < columnTitle.length; i += 1) {
    const diff = columnTitle[i].charCodeAt() - 'A'.charCodeAt() + 1;

    value = 26 * value + diff;
  }

  return Number(value);
};
