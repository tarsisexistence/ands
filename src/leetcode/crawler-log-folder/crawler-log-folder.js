/**
 * Leetcode #1598
 * Difficulty: Easy
 * https://leetcode.com/problems/crawler-log-folder/
 */
/**
 * @param {string[]} logs
 * @return {number}
 */
export const minOperations = logs => {
  let steps = 0;

  for (let i = 0; i < logs.length; i += 1) {
    const log = logs[i];

    if (log === '../') {
      steps = Math.max(steps - 1, 0);
    } else if (log !== './') {
      steps += 1;
    }
  }

  return steps;
};
