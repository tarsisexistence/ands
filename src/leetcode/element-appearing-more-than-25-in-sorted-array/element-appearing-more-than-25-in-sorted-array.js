/**
 * Leetcode #1287
 * Difficulty: Easy
 * https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
export const findSpecialInteger = arr => {
  const map = new Map();

  for (const num of arr) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  for (const [num, count] of map) {
    const freq = count / arr.length;

    if (freq > 0.25) {
      return num;
    }
  }

  return null;
};
