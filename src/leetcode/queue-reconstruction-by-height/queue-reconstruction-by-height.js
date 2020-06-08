/**
 * Leetcode #406
 * Difficulty: Medium
 * https://leetcode.com/problems/queue-reconstruction-by-height/
 */
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
export const reconstructQueue = people => {
  const queue = [];
  people.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));

  for (let i = 0; i < people.length; i += 1) {
    const next = people[i];
    queue.splice(next[1], 0, next);
  }

  return queue;
};
