/**
 * Leetcode #2176
 * Difficulty: Easy
 * count-equal-and-divisible-pairs-in-an-array
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const countPairs = (nums, k) => {
  let answer = 0;

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (0 <= i && i <= j && nums[i] === nums[j] && (i * j) % k === 0) {
        answer += 1;
      }
    }
  }

  return answer;
};
