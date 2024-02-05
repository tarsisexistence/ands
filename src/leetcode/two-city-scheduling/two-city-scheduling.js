/**
 * Leetcode #1029
 * Difficulty: Easy
 * https://leetcode.com/problems/two-city-scheduling/
 */
/**
 * @param {number[][]} costs
 * @return {number}
 */
export const twoCitySchedCost = costs => {
  const N = costs.length / 2;
  let cost = 0;

  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));

  while (costs.length > N) {
    cost += costs.pop()[1];
  }

  while (costs.length > 0) {
    cost += costs.pop()[0];
  }

  return cost;
};
