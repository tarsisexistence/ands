/**
 * Leetcode #1539
 * Difficulty: Medium
 * https://leetcode.com/problems/kth-missing-positive-number
 */
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
export const findKthPositive = (arr, k) => {
  const set = new Set(arr);
  let num = 0;

  while (k !== 0) {
    num += 1;

    if (!set.has(num)) {
      k -= 1;
    }
  }

  return num;
};
