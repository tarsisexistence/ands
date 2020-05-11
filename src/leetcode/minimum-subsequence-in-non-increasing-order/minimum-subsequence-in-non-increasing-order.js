/**
 * Leetcode #1403
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const minSubsequence = nums => {
  const sortMap = {};
  const subsequence = [];
  let sum = 0;
  let subSum = 0;

  for (let i = 0; i < nums.length; i += 1) {
    sortMap[nums[i]] = (sortMap[nums[i]] || 0) + 1;
    sum += nums[i];
  }

  const sorted = Object.keys(sortMap).reduce((acc, num) => {
    while (sortMap[num] > 0) {
      acc.push(Number(num));
      sortMap[num] -= 1;
    }

    return acc;
  }, []);

  for (let i = nums.length - 1; i >= 0; i -= 1) {
    const num = sorted[i];
    subSum += num;
    sum -= num;
    subsequence.push(num);

    if (sum < subSum) {
      break;
    }
  }

  return subsequence;
};
