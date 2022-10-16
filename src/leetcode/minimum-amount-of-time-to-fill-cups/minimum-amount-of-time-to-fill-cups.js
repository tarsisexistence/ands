/**
 * Leetcode #2335
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups
 */
/**
 * @param {number[]} amount
 * @return {number}
 */
export const fillCups = amount => {
  let res = 0;

  while (!amount.every(x => x === 0)) {
    amount.sort((a, b) => b - a);
    let count = 0;
    res += 1;

    for (let i = 0; i < amount.length && count < 2; i += 1) {
      if (amount[i] > 0) {
        amount[i] -= 1;
        count += 1;
      }
    }
  }

  return res;
};

// export const fillCups = amount => {
//   let res = 0;
//   amount.sort((a, b) => a - b);
//
//   while (amount[2] !== 0) {
//     amount[2] -= 1;
//
//     if (amount[1] > 0) {
//       amount[1] -= 1;
//     }
//
//     amount.sort((a, b) => a - b);
//     res += 1;
//   }
//
//   return res;
// };
