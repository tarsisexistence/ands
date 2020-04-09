/**
 * Leetcode #412
 * Difficulty: Easy
 * https://leetcode.com/problems/fizz-buzz/
 */
/**
 * @param {number} n
 * @return {string[]}
 */
export const fizzBuzz = n =>
  Array.from({ length: n }, (_, i) => {
    const num = i + 1;

    if (num % 3 === 0 && num % 5 === 0) {
      return 'FizzBuzz';
    } else if (num % 3 === 0) {
      return 'Fizz';
    } else if (num % 5 === 0) {
      return 'Buzz';
    } else {
      return String(num);
    }
  });
