/**
 * Leetcode #1380
 * Difficulty: Easy
 * https://leetcode.com/problems/lucky-numbers-in-a-matrix/
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
export const luckyNumbers = matrix => {
  const luckyNumbers = [];

  for (let i = 0; i < matrix.length; i += 1) {
    let minId = 0;
    let min = matrix[i][minId];

    for (let j = minId; j < matrix[i].length; j += 1) {
      if (min > matrix[i][j]) {
        min = matrix[i][j];
        minId = j;
      }
    }

    let max = min;

    for (let j = 0; j < matrix.length; j += 1) {
      if (matrix[j][minId] > max) {
        max = matrix[j][minId];
        break;
      }
    }

    if (max === min) {
      luckyNumbers.push(min);
    }
  }

  return luckyNumbers;
};
