/**
 * Leetcode #303
 * Difficulty: Easy
 * https://leetcode.com/problems/range-sum-query-immutable/
 */
/**
 * @param {number[]} nums
 */
export const NumArray = function (nums) {
  this.sums = [nums[0]];

  for (let i = 1; i < nums.length; i += 1) {
    this.sums.push(this.sums[i - 1] + nums[i]);
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.sums[right] - (this.sums[left - 1] ?? 0);
};

// export const NumArray = function (nums) {
//   this.nums = nums;
// };
//
// NumArray.prototype.sumRange = function (left, right) {
//   let sum = 0;
//
//   for (let i = left; i <= right; i += 1) {
//     sum += this.nums[i];
//   }
//
//   return sum;
// };
