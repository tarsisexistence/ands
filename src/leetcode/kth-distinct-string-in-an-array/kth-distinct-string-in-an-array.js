/**
 * Leetcode #2053
 * Difficulty: Easy
 * https://leetcode.com/problems/kth-distinct-string-in-an-array/
 */
/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
export const kthDistinct = (arr, k) => {
  const map = new Map();
  const distincts = [];

  for (const s of arr) {
    map.set(s, (map.get(s) ?? 0) + 1);
  }

  for (const s of arr) {
    if (map.get(s) === 1) {
      distincts.push(s);
    }
  }

  return distincts[k - 1] ?? '';
};
