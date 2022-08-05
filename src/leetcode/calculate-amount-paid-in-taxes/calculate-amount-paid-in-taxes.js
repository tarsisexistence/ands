/**
 * Leetcode #2303
 * Difficulty: Easy
 * https://leetcode.com/problems/calculate-amount-paid-in-taxes/
 */
/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
// export const calculateTax = (brackets, income) => {
//   let sum = 0;
//   let prev = 0;
//
//   for (const [money, percent] of brackets) {
//     const value = Math.max(Math.min(money, income) - prev, 0);
//     sum += value * (percent / 100);
//     prev = money;
//   }
//
//   return sum;
// };

export const calculateTax = (brackets, income) => {
  let sum = 0;
  let prev = 0;

  for (const [money, percent] of brackets) {
    const value = Math.min(income, money - prev);
    income -= value;
    sum += value * (percent / 100);
    prev = money;

    if (!income) {
      return sum;
    }
  }

  return sum;
};
