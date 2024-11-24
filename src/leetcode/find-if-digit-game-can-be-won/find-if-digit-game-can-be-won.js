/**
 * Leetcode #3319
 * Difficulty: Easy
 * https://leetcode.com/problems/find-if-digit-game-can-be-won
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const canAliceWin = nums => {
  let doubles = 0;
  let singles = 0;

  for (const num of nums) {
    if (num < 10) {
      singles += num;
    } else {
      doubles += num;
    }
  }

  return singles !== doubles;
};
