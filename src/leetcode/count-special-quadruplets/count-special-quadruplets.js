/**
 * Leetcode #1995
 * Difficulty: Easy
 * https://leetcode.com/problems/count-special-quadruplets
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const countQuadruplets = nums => {
  const len = nums.length;
  let count = 0;

  for (let a = 0; a < len; a += 1) {
    for (let b = a + 1; b < len; b += 1) {
      for (let c = b + 1; c < len; c += 1) {
        for (let d = c + 1; d < len; d += 1) {
          if (nums[a] + nums[b] + nums[c] === nums[d]) {
            count += 1;
          }
        }
      }
    }
  }

  return count;
};
