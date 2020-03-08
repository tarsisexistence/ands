/**
 * Leetcode #944
 * Difficulty: Easy
 * https://leetcode.com/problems/delete-columns-to-make-sorted/
 */
/**
 * @param {string[]} A
 * @return {number}
 */
/**
 * @param {string[]} A
 * @return {number}
 */
export const minDeletionSize = A => {
  const deletedColumns = [];

  for (let i = 1; i < A.length; i += 1) {
    for (let j = 0; j < A[i].length; j += 1) {
      if (
        A[i - 1].charCodeAt(j) > A[i].charCodeAt(j) &&
        !deletedColumns.includes(j)
      ) {
        deletedColumns.push(j);
      }
    }
  }

  return deletedColumns.length;
};
