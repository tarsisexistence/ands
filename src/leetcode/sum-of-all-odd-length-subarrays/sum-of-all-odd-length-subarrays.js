/**
 * Leetcode #1588
 * Difficulty: Easy
 * https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
export const sumOddLengthSubarrays = arr => {
  let sum = 0;

  // starting point
  for (let i = 0; i < arr.length; i += 1) {
    // end point
    for (let j = i; j < arr.length; j += 1) {
      // filter odd subarrays
      if ((j - i) % 2 === 0) {
        // sum from start point to end point
        for (let k = i; k <= j; k += 1) {
          sum += arr[k];
        }
      }
    }
  }

  return sum;
};

// const sumOddLengthSubarrays = arr => {
//   let sum = 0;
//
//   for (let i = 0; i < arr.length; i += 1) {
//     sum += arr[i];
//
//     for (let j = i + 2; j < arr.length; j += 2) {
//       const slice = arr.slice(i, j + 1);
//
//       for (let num of slice) {
//         sum += num;
//       }
//     }
//   }
//
//   return sum;
// };
