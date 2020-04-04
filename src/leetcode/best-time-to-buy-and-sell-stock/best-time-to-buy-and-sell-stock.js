/**
 * Leetcode #121
 * Difficulty: Easy
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = prices => {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i += 1) {
    if (minPrice > prices[i]) {
      minPrice = prices[i];
    } else if (minPrice < prices[i]) {
      const currentProfit = prices[i] - minPrice;
      maxProfit = Math.max(maxProfit, currentProfit);
    }
  }

  return maxProfit;
};

// const maxProfit = prices => prices.reduce((prev, current) => ({
//   min: Math.min(prev.min, current),
//   max: Math.max(prev.max, current - prev.min)
// }), { min: prices[0], max: 0 }).max;
