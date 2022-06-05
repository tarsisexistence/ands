/**
 * Leetcode #2220
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-bit-flips-to-convert-number/
 */
/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
export const minBitFlips = (start, goal) => {
  let count = 0;

  start = start.toString(2);
  goal = goal.toString(2);

  if (goal.length > start.length) {
    start = '0'.repeat(goal.length - start.length) + start;
  } else if (start.length > goal.length) {
    goal = '0'.repeat(start.length - goal.length) + goal;
  }

  for (let i = Math.max(goal.length, start.length) - 1; i >= 0; i -= 1) {
    if (goal[i] ? goal[i] !== start[i] : start[i] === '1') {
      count += 1;
    }
  }

  return count;
};
