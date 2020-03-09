/**
 * Leetcode #922
 * Difficulty: Easy
 * https://leetcode.com/problems/sort-array-by-parity-ii/
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
export const sortArrayByParityII = A => {
  const result = new Array(A.length);

  for (let i = 0, even = 0, odd = 1; i < A.length; i += 1) {
    if (A[i] % 2 === 0) {
      result[even] = A[i];
      even += 2;
    } else {
      result[odd] = A[i];
      odd += 2;
    }
  }

  return result;
};
