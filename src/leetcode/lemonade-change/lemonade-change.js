/**
 * Leetcode #860
 * Difficulty: Easy
 * https://leetcode.com/problems/lemonade-change
 */
/**
 * @param {number[]} bills
 * @return {boolean}
 */
export const lemonadeChange = bills => {
  let fives = 0;
  let tens = 0;

  for (const bill of bills) {
    if (bill === 5) {
      fives += 1;
    } else if (bill === 10 && fives > 0) {
      tens += 1;
      fives -= 1;
    } else if (bill === 20 && tens > 0 && fives > 0) {
      tens -= 1;
      fives -= 1;
    } else if (bill === 20 && fives > 2) {
      fives -= 3;
    } else {
      return false;
    }
  }

  return true;
};
