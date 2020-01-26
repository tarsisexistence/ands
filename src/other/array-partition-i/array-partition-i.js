/**
 * Leetcode #561
 * https://leetcode.com/problems/array-partition-i/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const arrayPairSum = nums => {
  const sortedArr = nums.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < sortedArr.length; i += 2) {
    sum += Math.min(sortedArr[i], sortedArr[i + 1]);
  }

  return sum;
};
