/**
 * Leetcode #1337
 * Difficulty: Easy
 * https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
 */
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
export const kWeakestRows = (mat, k) =>
  mat
    .map((m, i) => ({ i, soldiers: m.reduce((acc, bin) => acc + bin, 0) }))
    .sort((a, b) => (a.soldiers !== b.soldiers ? a.soldiers - b.soldiers : a.i - b.i))
    .map(v => v.i)
    .slice(0, k);
