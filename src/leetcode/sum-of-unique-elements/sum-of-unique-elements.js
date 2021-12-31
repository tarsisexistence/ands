/**
 * Leetcode #1748
 * Difficulty: Easy
 * https://leetcode.com/problems/sum-of-unique-elements/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const sumOfUnique = nums => {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  let sum = 0;

  for (const num of nums) {
    const count = map.get(num);

    if (count === 1) {
      sum += num;
    }
  }

  return sum;
};
