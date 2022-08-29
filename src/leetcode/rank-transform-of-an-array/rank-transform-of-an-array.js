/**
 * Leetcode #1331
 * Difficulty: Easy
 * https://leetcode.com/problems/rank-transform-of-an-array/
 */
/**
 * @param {number[]} arr
 * @return {number[]}
 */
export const arrayRankTransform = arr => {
  const slice = Array.from(new Set(arr)).sort((a, b) => a - b);
  const map = new Map();
  const res = [];

  for (let i = 0; i < slice.length; i += 1) {
    map.set(slice[i], i);
  }

  for (const num of arr) {
    const i = map.get(num);
    res.push(i + 1);
  }

  return res;
};
