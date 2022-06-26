/**
 * Leetcode #402
 * Difficulty: Medium
 * https://leetcode.com/problems/remove-k-digits/
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const canBeIncreasing = nums => {
  for (let i = 0; i < nums.length; i += 1) {
    const filtered = nums.filter((_, index) => i !== index);
    let isOk = true;

    for (let j = 1; j < filtered.length; j += 1) {
      if (filtered[j - 1] >= filtered[j]) {
        isOk = false;
        break;
      }
    }

    if (isOk) {
      return true;
    }
  }

  return false;
};
