/**
 * Leetcode #1338
 * Difficulty: Medium
 * https://leetcode.com/problems/reduce-array-size-to-the-half/
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
export const minSetSize = arr => {
  const map = new Map();
  const set = new Set(arr);

  for (const num of arr) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  const sorted = [...set].sort((a, b) => map.get(b) - map.get(a));
  let res = 0;
  let removed = 0;

  for (const num of sorted) {
    const count = map.get(num);
    res += 1;
    removed += count;

    if (removed >= arr.length / 2) {
      break;
    }
  }

  return res;
};
