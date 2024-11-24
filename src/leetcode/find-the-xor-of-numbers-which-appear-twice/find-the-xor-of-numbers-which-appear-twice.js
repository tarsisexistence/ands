/**
 * Leetcode #2932
 * Difficulty: Easy
 * https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
export const duplicateNumbersXOR = nums => {
  let answer = 0;
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) {
      answer ^= num;
    } else {
      set.add(num);
    }
  }

  return answer;
};
