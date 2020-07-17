/**
 * Leetcode #985
 * Difficulty: Easy
 * https://leetcode.com/problems/sum-of-even-numbers-after-queries/
 */
/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
export const sumEvenAfterQueries = (A, queries) => {
  const result = new Array(A.length);

  for (let i = 0; i < queries.length; i += 1) {
    const [inc, pos] = queries[i];
    let sum = 0;
    A[pos] += inc;

    for (let j = 0; j < A.length; j += 1) {
      if (A[j] % 2 === 0) {
        sum += A[j];
      }
    }

    result[i] = sum;
  }

  return result;
};
