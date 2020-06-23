/**
 * Leetcode #137
 * Difficulty: Medium
 * https://leetcode.com/problems/single-number-ii/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const singleNumber2 = nums => {
  const map = {};

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    map[num] = map[num] === undefined;
  }

  return Number(Object.keys(map).find(key => map[key] === true));
};

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const singleNumber = nums => {
//   const map = new Map();
//
//   for (let i = 0; i < nums.length; i += 1) {
//     map.set(nums[i], !map.has(nums[i]));
//   }
//
//   return [...map.keys()].find(num => map.get(num));
// };
