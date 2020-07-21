/**
 * Leetcode #1518
 * Difficulty: Easy
 * https://leetcode.com/problems/water-bottles/
 */
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
export const numWaterBottles = (numBottles, numExchange) => {
  let total = numBottles;

  while (numBottles / numExchange >= 1) {
    const drink = Math.floor(numBottles / numExchange);
    total += drink;
    numBottles = (numBottles % numExchange) + drink;
  }

  return total;
};
