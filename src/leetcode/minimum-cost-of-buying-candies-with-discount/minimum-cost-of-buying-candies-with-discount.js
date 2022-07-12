/**
 * Leetcode #2144
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/
 */
/**
 * @param {number[]} cost
 * @return {number}
 */
export const minimumCost = cost => {
  let result = 0;

  cost.sort((a, b) => b - a);

  for (let i = 0; i < cost.length; i += 1) {
    if ((i + 1) % 3 !== 0) {
      result += cost[i];
    }
  }

  return result;
};
