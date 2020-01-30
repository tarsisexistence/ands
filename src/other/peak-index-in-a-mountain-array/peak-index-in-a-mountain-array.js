/**
 * Leetcode #852
 * Difficulty: Easy
 * https://leetcode.com/problems/regular-expression-matching/
 */
/**
 * @param {number[]} A
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
export const peakIndexInMountainArray = (A, low = 0, high = A.length - 1) => {
  if (low === high) {
    return low;
  }

  const middle = Math.ceil((low + high) / 2);

  if (A[middle] > A[middle - 1]) {
    return peakIndexInMountainArray(A, middle, high);
  } else {
    return peakIndexInMountainArray(A, low, middle - 1);
  }
};
