/**
 * Leetcode #1486
 * Difficulty: Easy
 * https://leetcode.com/problems/xor-operation-in-an-array/
 */
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
export const xorOperation = (n, start) => {
  let result = 0;

  for (let i = 0; i < n; i += 1) {
    result ^= start + i * 2;
  }

  return result;
};

// export const xorOperation = (n, start) => {
//   const nums = Array.from({ length: n }, (_, i) => start + i * 2);
//   let result = nums[0];
//
//   for (let i = 1; i < n; i += 1) {
//     result ^= nums[i];
//   }
//
//   return result;
// };
