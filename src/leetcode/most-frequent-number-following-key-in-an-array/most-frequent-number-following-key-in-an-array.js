/**
 * Leetcode #2190
 * Difficulty: Easy
 * https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/
 */
/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
export const mostFrequent = (nums, key) => {
  const map = new Map();
  let res = 0;
  let max = 0;

  for (let i = 0; i < nums.length - 1; i += 1) {
    if (nums[i] !== key) {
      continue;
    }

    const target = nums[i + 1];
    const nextTargetCount = (map.get(target) ?? 0) + 1;

    map.set(target, nextTargetCount);

    if (nextTargetCount > max) {
      res = target;
      max = nextTargetCount;
    }
  }

  return res;
};

// export const mostFrequent = (nums, key) => {
//   const map = new Map();
//
//   for (let i = 0; i < nums.length - 1; i += 1) {
//     if (nums[i] === key) {
//       map.set(nums[i + 1], (map.get(nums[i + 1]) ?? 0) + 1);
//     }
//   }
//
//   let maxCount = 0;
//   let maxKey = 0;
//
//   for (const [key, count] of map) {
//     if (count > maxCount) {
//       maxKey = key;
//       maxCount = count;
//     }
//   }
//
//   return maxKey;
// };
