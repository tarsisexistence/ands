/**
 * Leetcode #495
 * Difficulty: Easy
 * https://leetcode.com/problems/teemo-attacking
 */
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
export const findPoisonedDuration = (timeSeries, duration) => {
  let count = 0;

  for (let i = 0; i < timeSeries.length; i += 1) {
    count += timeSeries[i + 1] === undefined ? duration : Math.min(timeSeries[i + 1] - timeSeries[i], duration);
  }

  return count;
};
