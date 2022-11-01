/**
 * Leetcode #2455
 * Difficulty: Easy
 * https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const averageValue = nums => {
  let sum = 0;
  let len = 0;

  for (const num of nums) {
    if (num % 2 === 0 && num % 3 === 0) {
      sum += num;
      len += 1;
    }
  }

  return Math.floor(sum / (len || 1));
};
