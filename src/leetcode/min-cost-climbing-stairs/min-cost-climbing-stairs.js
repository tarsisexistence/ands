/**
 * Leetcode #746
 * Difficulty: Easy
 * https://leetcode.com/problems/min-cost-climbing-stairs/
 */
/**
 * @param {number[]} cost
 * @return {number}
 */
export const minCostClimbingStairs = cost => {
  let a = cost[0];
  let b = cost[1];

  for (let i = 2; i < cost.length; i += 1) {
    const current = cost[i] + Math.min(a, b);

    a = b;
    b = current;
  }

  return Math.min(a, b);
};
