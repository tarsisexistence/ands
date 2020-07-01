/**
 * Leetcode #806
 * Difficulty: Easy
 * https://leetcode.com/problems/number-of-lines-to-write-string/
 */
/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
export const numberOfLines = (widths, S) => {
  let currentLine = 0;
  let lines = 1;

  for (let i = 0; i < S.length; i += 1) {
    const width = widths[S.charCodeAt(i) - 97];
    currentLine += width;

    if (currentLine > 100) {
      lines += 1;
      currentLine = width;
    }
  }

  return [lines, currentLine];
};
