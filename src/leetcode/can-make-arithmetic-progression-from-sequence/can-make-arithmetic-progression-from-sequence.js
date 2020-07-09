/**
 * Leetcode #1502
 * Difficulty: Easy
 * https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
export const canMakeArithmeticProgression = arr => {
  arr.sort((a, b) => a - b);
  const diff = arr[1] - arr[0];

  for (let i = 2; i < arr.length; i += 1) {
    const currentDiff = arr[i] - arr[i - 1];

    if (diff !== currentDiff) {
      return false;
    }
  }

  return true;
};
