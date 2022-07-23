/**
 * Leetcode #704
 * Difficulty: Easy
 * https://leetcode.com/problems/binary-search/
 */
export const search = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const middle = Math.floor((high + low) / 2);

    if (nums[middle] < target) {
      low = middle + 1;
    } else if (nums[middle] > target) {
      high = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
};

// export const search = (nums, target, start = 0, end = nums.length - 1) => {
//   if (start === end) {
//     return nums[end] === target ? end : -1;
//   }
//
//   const middle = Math.floor((start + end) / 2);
//
//   if (nums[middle] === target) {
//     return middle;
//   }
//
//   return nums[middle] > target
//     ? search(nums, target, start, Math.max(0, middle - 1))
//     : search(nums, target, middle + 1, end);
// };
