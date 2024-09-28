/**
 * Leetcode #901
 * Difficulty: Medium
 * https://leetcode.com/problems/online-stock-span
 */
export const StockSpanner = function () {
  this.prices = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let count = 1;

  for (let i = this.prices.length - 1; i >= 0; i -= 1) {
    if (price < this.prices[i]) {
      break;
    }

    count += 1;
  }

  this.prices.push(price);

  return count;
};

// StockSpanner.prototype.next = function (price) {
//   let count = 1;
//
//   while (this.prices.length > 0 && this.prices.at(-1)[0] < price) {
//     count += this.prices.pop()[1];
//   }
//
//   this.prices.push([price, count]);
//
//   return count;
// };
