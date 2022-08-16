/**
 * Leetcode #2231
 * Difficulty: Easy
 * https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/
 */
/**
 * @param {number} num
 * @return {number}
 */
export const largestInteger = num => {
  const nums = num.toString().split('');

  for (let i = 0; i < nums.length; i += 1) {
    let maxId = i;

    for (let j = i + 1; j < nums.length; j += 1) {
      const parity = nums[j] % 2 === nums[maxId] % 2;

      if (parity && nums[j] > nums[maxId]) {
        maxId = j;
      }
    }

    const temp = nums[i];
    nums[i] = nums[maxId];
    nums[maxId] = temp;
  }

  return Number(nums.join(''));
};
