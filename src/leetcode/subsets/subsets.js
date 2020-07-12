/**
 * Leetcode #78
 * Difficulty: Medium
 * https://leetcode.com/problems/subsets/
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const subsets = nums => {
  const result = [[]];

  for (let i = 0; i < nums.length; i += 1) {
    const { length } = result;

    for (let j = 0; j < length; j += 1) {
      result.push(result[j].concat(nums[i]));
    }
  }

  return result;
};

// export const subsets = nums => {
//   const result = [];
//   const map = {};
//
//   for (let i = 0; i < nums.length; i += 1) {
//     const num = nums[i];
//     result.push([num]);
//   }
//
//   for (let i = 0; i < nums.length; i += 1) {
//     const num = nums[i];
//
//     for (let j = 0; j < result.length; j += 1) {
//       const arr = result[j].concat(num).sort((a, b) => a - b);
//       let str = '';
//       let duplicates = 0;
//
//       for (let z = 0; z < arr.length; z += 1) {
//         str += `:${arr[z]}`;
//
//         if (arr[z] === num) {
//           duplicates += 1;
//         }
//       }
//
//       const isDuplicate = duplicates > 1;
//
//       if (isDuplicate === false && map[str] === undefined) {
//         map[str] = true;
//         result.push(arr);
//       }
//     }
//   }
//
//   result.push([]);
//   return result;
// };
