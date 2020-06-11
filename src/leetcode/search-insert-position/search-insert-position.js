/**
 * Leetcode #35
 * Difficulty: Easy
 * https://leetcode.com/problems/search-insert-position/
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export const searchInsert = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  let middle = -1;

  while (low <= high) {
    middle = Math.floor((low + high) / 2);

    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] > target) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return low;
};

// export const searchInsert = (nums, target) => {
//   return search(0, nums.length - 1);
//
//   function search(start, end) {
//     if (start > end) {
//       return start;
//     }
//
//     const middle = Math.floor((start + end) / 2);
//
//     if (nums[middle] < target) {
//       return search(middle + 1, end);
//     } else if (nums[middle] > target) {
//       return search(start, middle - 1);
//     } else {
//       return middle;
//     }
//   }
// };

// export const searchInsert = (nums, target) => {
//   for (let i = 0; i < nums.length; i += 1) {
//     if (nums[i] >= target) {
//       return i;
//     }
//   }
//
//   return nums.length;
// };
