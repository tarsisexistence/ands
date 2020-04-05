/**
 * Leetcode #122
 * Difficulty: Easy
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = prices => {
  let profit = 0;

  for (let i = 0; i < prices.length; i += 1) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
};

// const maxProfit = prices => {
//   let current = -1;
//   let profit = 0;
//
//   for (let i = 0; i < prices.length; i += 1) {
//     if (current === -1) {
//       current = prices[i];
//     } else if (current > prices[i]) {
//       current = prices[i];
//     } else if (current < prices[i] && (prices[i] >= prices[i + 1] || i === prices.length - 1)) {
//       profit += prices[i] - current;
//       current = -1;
//     }
//   }
//
//   return profit;
// };
