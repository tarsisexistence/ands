/**
 * Leetcode #2210
 * Difficulty: Easy
 * https://leetcode.com/problems/count-hills-and-valleys-in-an-array/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const countHillValley = nums => {
  const arr = [];
  let res = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== nums[i + 1]) {
      arr.push(nums[i]);
    }
  }

  for (let i = 1; i < arr.length - 1; i += 1) {
    const left = arr[i] > arr[i - 1];
    const right = arr[i] > arr[i + 1];

    if ((left && right) || (!left && !right)) {
      res += 1;
    }
  }

  return res;
};
