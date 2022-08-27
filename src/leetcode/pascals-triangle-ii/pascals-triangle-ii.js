/**
 * Leetcode #119
 * Difficulty: Easy
 * https://leetcode.com/problems/pascals-triangle-ii/
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
export const getRow = rowIndex => {
  let current = [1];
  let next;

  for (let i = 0; i < rowIndex; i += 1) {
    next = Array.from({ length: i + 2 }, () => 0);

    for (let j = 0; j < next.length - 1; j += 1) {
      next[j] += current[j];
      next[j + 1] += current[j];
    }

    current = next;
  }

  return current;
};
