/**
 * Leetcode #1732
 * Difficulty: Easy
 * https://leetcode.com/problems/find-the-highest-altitude/
 */
/**
 * @param {number[]} gain
 * @return {number}
 */
export const largestAltitude = gain => {
  let maxAlt = 0;
  let current = 0;

  for (const alt of gain) {
    current += alt;

    if (current > maxAlt) {
      maxAlt = current;
    }
  }

  return maxAlt;
};
