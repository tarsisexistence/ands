/**
 * Leetcode #2224
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/
 */
/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
export const convertTime = (current, correct) => {
  const left = current.split(':');
  const right = correct.split(':');
  const leftMinutes = Number(left[0]) * 60 + Number(left[1]);
  const rightMinutes = Number(right[0]) * 60 + Number(right[1]);

  let diff = rightMinutes - leftMinutes;
  let steps = 0;

  while (diff > 0) {
    diff -= diff >= 60 ? 60 : diff >= 15 ? 15 : diff >= 5 ? 5 : 1;
    steps += 1;
  }

  return steps;
};
