/**
 * Leetcode #2073
 * Difficulty: Easy
 * https://leetcode.com/problems/time-needed-to-buy-tickets/
 */
/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
export const timeRequiredToBuy = (tickets, k) => {
  let time = 0;

  while (tickets[k] !== 0) {
    const shifted = tickets.shift() - 1;

    if (k === 0) {
      tickets.push(shifted);
      k = tickets.length - 1;
    } else {
      k -= 1;

      if (shifted > 0) {
        tickets.push(shifted);
      }
    }

    time += 1;
  }

  return time;
};
