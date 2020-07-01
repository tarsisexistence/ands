/**
 * Leetcode #1399
 * Difficulty: Easy
 * https://leetcode.com/problems/count-largest-group/
 */
/**
 * @param {number} n
 * @return {number}
 */
export const countLargestGroup = n => {
  const map = {};
  let max = 0;
  let size = 0;

  for (let i = 0; i < n; i += 1) {
    const chars = String(i + 1).split('');
    const sum = chars.reduce((acc, num) => acc + Number(num), 0);
    const sumSize = map[sum] + 1 || 1;
    map[sum] = sumSize;

    if (sumSize === max) {
      size += 1;
    } else if (sumSize > max) {
      max = sumSize;
      size = 1;
    }
  }

  return size;
};

// const countLargestGroup = n => {
//   const map = {};
//
//   for (let i = 0; i < n; i += 1) {
//     const chars = String(i + 1).split('');
//     const sum = chars.reduce((acc, num) => acc + Number(num), 0);
//     map[sum] = (map[sum] || 0) + 1;
//   }
//
//   let max = 0;
//   let size = 0;
//
//   for (const sum in map) {
//     const value = map[sum];
//     if (value === max) {
//       size += 1;
//     } else if (value > max) {
//       max = value;
//       size = 1;
//     }
//   }
//
//   return size;
// };
