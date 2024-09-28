/**
 * Leetcode #2485
 * Difficulty: Easy
 * https://leetcode.com/problems/find-the-pivot-integer
 */
/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
/**
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number} n
 * @return {number}
 */
export const pivotInteger = n => {
  let sum = 0;
  let temp = 0;

  for (let i = 0; i < n; i += 1) {
    sum += i + 1;
  }

  for (let i = 0; i < n; i += 1) {
    const value = i + 1;
    sum -= value;

    if (sum === temp) {
      return value;
    }

    temp += value;
  }

  return -1;
};

// export const pivotInteger = n => {
//   let sum = 0;
//   let temp = 0;
//
//   for (let i = 0; i < n; i += 1) {
//     sum += i + 1;
//   }
//
//   for (let i = 0; i < n; i += 1) {
//     const value = i + 1;
//     const halfWithoutValue = (sum - value) / 2;
//
//     if (halfWithoutValue === temp) {
//       return value;
//     }
//
//     temp += value;
//   }
//
//   return -1;
// };
