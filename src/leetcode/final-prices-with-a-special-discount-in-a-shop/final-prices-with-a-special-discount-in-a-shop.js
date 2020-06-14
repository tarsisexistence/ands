/**
 * Leetcode #1475
 * Difficulty: Easy
 * https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
 */
/**
 * @param {number[]} prices
 * @return {number[]}
 */
export const finalPrices = prices => {
  const final = [];

  for (let i = 0; i < prices.length; i += 1) {
    const current = prices[i];
    let discount = 0;

    for (let j = i + 1; j < prices.length; j += 1) {
      if (prices[j] <= current) {
        discount = prices[j];
        break;
      }
    }

    const next = current - discount;
    final.push(next);
  }

  return final;
};
