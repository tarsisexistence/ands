/**
 * Leetcode #1342
 * Difficulty: Easy
 * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
 */
/**
 * @param {number} num
 * @return {number}
 */
export const numberOfSteps = (num) => {
  let steps = 0;
  let n = num;

  while (n !== 0) {
    steps += 1;

    if (n % 2 === 0) {
      n /= 2;
    } else {
      n -= 1;
    }
  }

  return steps;
};
