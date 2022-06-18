/**
 * Leetcode #2164
 * Difficulty: Easy
 * https://leetcode.com/problems/sort-even-and-odd-indices-independently/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const sortEvenOdd = nums => {
  const evens = [];
  const odds = [];

  for (let i = 0; i < nums.length; i += 1) {
    if (i % 2 === 0) {
      evens.push(nums[i]);
    } else {
      odds.push(nums[i]);
    }
  }

  evens.sort((a, b) => b - a);
  odds.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 1) {
    if (i % 2 === 0) {
      nums[i] = evens.pop();
    } else {
      nums[i] = odds.pop();
    }
  }

  return nums;
};

// Solution for another problem
// export const sortEvenOdd = nums => {
//   for (let i = 0; i < nums.length; i += 1) {
//     const num = nums[i];
//     const isEven = num % 2 === 0;
//     let smallestIdx = i;
//
//     for (let j = i + 1; j < nums.length; j += 1) {
//       const n = nums[j];
//       const c = n % 2;
//
//       if ((isEven && c === 0 && n < nums[smallestIdx]) || (!isEven && c === 1 && n > nums[smallestIdx])) {
//         smallestIdx = j;
//       }
//     }
//
//     const temp = nums[i];
//     nums[i] = nums[smallestIdx];
//     nums[smallestIdx] = temp;
//   }
//
//   return nums;
// };
