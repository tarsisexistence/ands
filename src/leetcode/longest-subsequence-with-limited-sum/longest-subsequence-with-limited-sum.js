/**
 * Leetcode #2389
 * Difficulty: Easy
 * https://leetcode.com/problems/longest-subsequence-with-limited-sum/
 */
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
export const answerQueries = (nums, queries) => {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < queries.length; i += 1) {
    let diff = queries[i];
    let count = 0;

    for (let j = 0; j < nums.length; j += 1) {
      diff -= nums[j];

      if (diff >= 0) {
        count += 1;
      } else {
        break;
      }
    }

    queries[i] = count;
  }

  return queries;
};
