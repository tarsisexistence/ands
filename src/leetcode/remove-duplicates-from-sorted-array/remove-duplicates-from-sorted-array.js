/**
 * Leetcode #26
 * Difficulty: Easy
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const removeDuplicates = nums => {
  let k = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== nums[i + 1]) {
      nums[k] = nums[i];
      k += 1;
    }
  }

  return k;
};

// const removeDuplicates = nums => {
//   const set = new Set();
//
//   for (let i = 0; i < nums.length; i += 1) {
//     if (!set.has(nums[i])) {
//       nums[set.size] = nums[i];
//       set.add(nums[i]);
//     }
//   }
//
//   return set.size;
// };
