/**
 * Leetcode #2363
 * Difficulty: Easy
 * https://leetcode.com/problems/merge-similar-items/
 */
/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
export const mergeSimilarItems = (items1, items2) => {
  const map = new Map(items2);
  const ret = [];

  for (const [value, weight] of items1) {
    const weight2 = map.get(value);
    const weights = weight2 === undefined ? weight : weight + weight2;
    ret.push([value, weights]);
    map.delete(value);
  }

  for (const [value, weight] of map) {
    ret.push([value, weight]);
  }

  ret.sort((a, b) => a[0] - b[0]);

  return ret;
};
